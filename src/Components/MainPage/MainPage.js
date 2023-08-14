import portrait from "../../Resources/Outdoor-Portrait.jpg";
import "./MainPage.css";
import Card from "../Card/Card";

export const MainPage = () => {
  return (
    <div className="main-page">
      <div className="info-section">
        <div className="info-subsection" id="home">
          <h1>Welcome!</h1>
          <h2>My name is Zach.</h2>
          <p>
            I'm a software engineer based out of Atlanta, Georgia. It's my goal
            to engineer solutions to increase human flourishing throughout the
            world.
          </p>
          <a href="#contact">
            <button>Contact Me</button>
          </a>
        </div>
        <div className="info-subsection">
          <img className="front-page-picture" src={portrait} alt="portrait" />
        </div>
      </div>
      <div className="info-section">
        <div className="info-subsection">
          <img className="front-page-picture" src={portrait} alt="portrait" />
        </div>
        <div className="info-subsection">
          <h1>About Me</h1>
          <p>
            At 30 I made a career switch into software engineering. I work hard
            every day to develop my skills in order to provide long term value.
            When I'm not working or studying you can find me spending time
            outdoors!
          </p>
        </div>
      </div>
      <div className="section" id="skills">
        <h1>Skills</h1>
        <p>
          I've had the privelege of being able to interact with many different
          technologies. Below are some of things I've been exposed to.
        </p>
        <div className="skill-icons">
          <Card icon={"devicon-javascript-plain colored"} title="Javascript" />
          <Card icon={"devicon-html5-plain colored"} title="HTML" />
          <Card icon={"devicon-css3-plain colored"} title="CSS" />
          <Card icon={"devicon-java-plain-wordmark colored"} title="Java" />
          <Card icon={"devicon-react-original colored"} title="React" />
        </div>
      </div>
      <div className="info-section" id="about">
        <div className="info-subsection">
          <h1>Experience</h1>
          <p>
            Prior to switching careers I held management roles for Restoration
            Hardware and Enterprise Rent-a-Car. I also served 10 years in the
            Marine Corps Reserve. These roles have been crucial in shaping me as
            a problem solver and leader.
          </p>
        </div>
        <div className="info-subsection">
          <img className="front-page-picture" src={portrait} alt="portrait" />
        </div>
      </div>
    </div>
  );
};
