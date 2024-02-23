import "./About.scss";
import itWork from "../../Assets/Image/it-work.jpg";
function About() {
  return (
    <div className="about__main">
      <h1 className="about__title">
        IT That <bold>Works</bold> For You
      </h1>
      <div className="about__img-container">
        <img src={itWork} alt="working technicians" className="about__img" />
        <div className="about__img-border"></div>
      </div>
      <div className="about-content__container">
        <p className="about-content__para">
          Started in 2024,{" "}
          <span
            style={{ color: "#0251bf", fontWeight: "bold", fontSize: "26px" }}
          >
            Tech Haven{" "}
          </span>
          is your Trusted IT Support Partner for Small Businesses and Homes. At
          Tech Haven, we understand the critical importance of technology in
          today's fast-paced world. Our mission is to provide comprehensive and
          reliable IT support services to small businesses and residences,
          enabling our clients to focus on what matters most - growing their
          business or enjoying their home life.
        </p>
      </div>
      <div>
        <h2 className="about-content__subtitle">What Makes Us Stand Out?</h2>
        <ul className="about-content__list">
          <li>
            <span
              style={{ color: "#0251bf", fontWeight: "bold", fontSize: "22px" }}
            >
              Customer Focus
            </span>
            : Our clients are our top priority.
          </li>
          <li>
            <span
              style={{ color: "#0251bf", fontWeight: "bold", fontSize: "22px" }}
            >
              Innovation
            </span>
            : We are constantly seeking new and better ways to serve our
            clients.
          </li>
          <li>
            <span
              style={{ color: "#0251bf", fontWeight: "bold", fontSize: "22px" }}
            >
              Transparency
            </span>
            : We are committed to open and honest communication.
          </li>
          <li>
            <span
              style={{ color: "#0251bf", fontWeight: "bold", fontSize: "22px" }}
            >
              Flexibility
            </span>
            :We will work with you to find solutions that meet your specific
            needs and requirements.
          </li>
          <li>
            <span
              style={{ color: "#0251bf", fontWeight: "bold", fontSize: "22px" }}
            >
              Responsiveness
            </span>
            : We are committed to responding quickly to your needs and providing
            timely solutions.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
