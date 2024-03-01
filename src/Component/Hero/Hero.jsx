import "./Hero.scss";
import heroImg from "../../Assets/Image/hero-img.jpg";
import { Link, animateScroll as scroll } from "react-scroll";

function Hero() {
  return (
    <div>
      <div className="hero__img-container">
        <img src={heroImg} alt="Hero Image" className="hero__img" />
        <h1 className="hero__headline">IT solutions for growing businesses</h1>
        <p className="hero__para">
          Are You Searching For Reliable IT Support? Tired of IT Guys With Poor
          Response Time, Endless Invoices, And Uncertainity About Compliance
          Regulations?
        </p>

        <button className="hero__bttn">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Learn More
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
