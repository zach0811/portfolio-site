import portrait from "../../Resources/Outdoor-Portrait.jpg";
import "./MainPage.css";
import climbing1 from "../../Resources/climbing1.jpg";
import climbing2 from "../../Resources/climbing2.jpg";
import kayak from "../../Resources/kayak.jpg";

export const MainPage = () => {
  return (
    <div className="main-page">
      <div className="about-me-section">
        <div className="about-me-1" id="home">
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
        <div className="about-me-2">
          <img className="about-me-picture" src={portrait} alt="portrait" />
        </div>
      </div>
      <div className="about-me" id="about">
        <h1>About Me</h1>
        <p>
          At 30 I made a career switch into software engineering. I work hard
          every day to develop my skills in order to provide long term value.
          When I'm not working or studying you can find me spending time
          outdoors!
        </p>
      </div>
      <div className="section" id="skills">
        <h1>Skills</h1>
        <p>
          I've had the privelege of being able to interact with many different
          technologies. Below are some of things I've been exposed to.
        </p>
        <div className="skill-icons">
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-html5-plain colored"></i>
          <i className="devicon-css3-plain colored"></i>
          <i className="devicon-java-plain-wordmark colored"></i>
          <i className="devicon-react-original-wordmark colored"></i>
        </div>
      </div>
      <div className="experience-section" id="experience">
        <div className="experience-1">
          <h1>Experience</h1>
          <p>
            Prior to switching careers I held management roles for Restoration
            Hardware and Enterprise Rent-a-Car. I also served 10 years in the
            Marine Corps Reserve. These roles have been crucial in shaping me as
            a problem solver and leader.
          </p>
        </div>
        <div className="experience-2">
          <img src={climbing1} alt="" />
          <img src={climbing2} alt="" />
          <img src={kayak} alt="" />
          <img src={kayak} preview={false} alt="" />
        </div>
      </div>
    </div>
  );
};
