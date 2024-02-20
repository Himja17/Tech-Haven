import "./About.scss";
import itWork from "../../Assets/Image/it-work.jpg"
function About() {
  return (
    <div>
      <h1>
        IT That <bold>Works</bold> For You
      </h1>
          <div>
              <img src={itWork} alt="working technicians" />
      </div>
      <div>
        <p>
          Started in 2024, <bold>Tech Haven</bold>is your Trusted IT Support
          Partner for Small Businesses and Homes. At Tech Haven, we understand
          the critical importance of technology in today's fast-paced world. Our
          mission is to provide comprehensive and reliable IT support services
          to small businesses and residences, enabling our clients to focus on
          what matters most - growing their business or enjoying their home
          life.
        </p>

        <h2>What Makes Us Stand Out?</h2>
        <ul>
          <li>
            Customer Focus: Our clients are our top priority. We go above and
            beyond to provide exceptional service and build long-term
            relationships.
          </li>
          <li>
            Innovation: We are constantly seeking new and better ways to serve
            our clients. We are at the forefront of technological advancements
            and strive for continuous improvement.
          </li>
          <li>
            Transparency: We are committed to open and honest communication. You
            can trust us to keep you informed every step of the way and to
            provide clear, accurate information.
          </li>
          <li>
            Flexibility: We understand that every client is unique, and we are
            flexible in our approach. We will work with you to find solutions
            that meet your specific needs and requirements.
          </li>
          <li>
            Responsiveness: We understand that technology issues can be time
            sensitive. We are committed to responding quickly to your needs and
            providing timely solutions.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
