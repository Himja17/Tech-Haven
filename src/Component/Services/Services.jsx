import "./Services.scss";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import serviceData from "../../Data/serviceData.json";

function Services() {
  const handleLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft += slider.offsetWidth;
  };

  const handleRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft -= slider.offsetWidth;
  };
  return (
    <div className="services-main">
      <h1>OUR SERVICES</h1>

      {/* Slider */}
      <div id="main-slider-container">
        <MdChevronLeft
          size={"50px "}
          className="slider-icon left"
          onClick={handleRight}
        />

        {/* Slider of images */}

        <div id="slider" style={{ width: `${serviceData.length * 100}%` }}>
          {serviceData.map((services, idx) => {
            return (
              <div className="slider-card" key={idx}>
                <div
                  className="slider-card-img"
                  style={{ backgroundImage: `url(${services.image})` }}
                ></div>
                <h3 className="slider-card-title">{services.name}</h3>
                <p className="slider-card-detail">{services.detail}</p>
              </div>
            );
          })}
        </div>

        <MdChevronRight
          size={"50px "}
          className="slider-icon right"
          onClick={handleLeft}
        />
      </div>
    </div>
  );
}

export default Services;
