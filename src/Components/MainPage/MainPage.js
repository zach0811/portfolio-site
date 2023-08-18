import portrait from "../../Resources/Outdoor-Portrait.jpg";
import climbing from "../../Resources/climbing1.jpeg";
import mountain from "../../Resources/mountain1.jpeg";
import carabiner from "../../Resources/carabiner.png";
import hiking from "../../Resources/hiking.png";
import mountain2 from "../../Resources/mountain2.png";
import "./MainPage.css";
import Card from "../Card/Card";

export const MainPage = () => {
  return (
    <div className="main-page" id="home">
      <div className="info-section">
        <div className="info-subsection">
          <h1 className="welcome">Welcome!</h1>
          <h2>My name is Zach.</h2>
          <p>
            I'm a software engineer based out of Atlanta, Georgia. It's my goal
            to create solutions that increase human flourishing throughout the
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
      <div className="info-section" id="about">
        <div className="info-subsection">
          <img className="front-page-picture" src={climbing} alt="portrait" />
        </div>
        <div className="info-subsection">
          <h1>About Me</h1>
          <p>
            At 30 I made a career switch into software engineering. I'm
            constantly trying to grown and develop in order to provide long term
            value in a constanlty changing world.
          </p>
          <p>
            When I'm not working or studying you can find me spending time
            outdoors! I'm most passionate about climbing, hiking, and traveling.
          </p>
          <div className="outdoor-icons">
            <img src={carabiner} alt="" />
            <img src={mountain2} alt="" />
            <img src={hiking} alt="" />
          </div>
        </div>
      </div>
      <div className="skills-section" id="skills">
        <h1>Skills</h1>
        <p>
          I've had the privelege of being able to interact with many different
          technologies. Below are some of tools I've worked with.
        </p>
        <div className="skill-icons">
          <Card icon={"devicon-javascript-plain colored"} title="Javascript" />
          <Card icon={"devicon-html5-plain colored"} title="HTML" />
          <Card icon={"devicon-css3-plain colored"} title="CSS" />
          <Card icon={"devicon-java-plain colored"} title="Java" />
          <Card icon={"devicon-react-original colored"} title="React" />
        </div>
        <div className="skill-icons">
          <Card icon={"devicon-github-original colored"} title="Github" />
          <Card icon={"devicon-git-plain colored"} title="Git" />
          <Card icon={"devicon-nodejs-plain colored"} title="NodeJS" />
          <Card icon={"devicon-npm-original-wordmark colored"} title="NPM" />
          <Card icon={"devicon-spring-plain colored"} title="Spring" />
        </div>
      </div>
      <div className="info-section" id="experience">
        <div className="info-subsection">
          <h1>Experience</h1>
          <p>
            Prior to breaking into software engineering, I held management roles
            for Restoration Hardware and Enterprise Rent-a-Car. I also served 10
            years in the Marine Corps Reserve. These roles have been crucial in
            shaping me as a problem solver and leader.
          </p>
        </div>
        <div className="info-subsection">
          <img className="front-page-picture" src={mountain} alt="portrait" />
        </div>
      </div>
    </div>
  );
};
