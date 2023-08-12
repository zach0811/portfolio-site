import {
  IoMailOutline,
  IoLocationOutline,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FaFlagUsa } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div id="contact" className="contact-item">
          <h1>Contact Me</h1>
        </div>
        <div>
          <div className="contact-item">
            <a
              href="mailto: zach.d.wilkins@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMailOutline className="contact-icon" />
            </a>

            <h2>zach.d.wilkins@gmail.com</h2>
          </div>
          <div className="contact-item">
            <BsTelephone className="contact-icon" />
            <h2>678-549-8922</h2>
          </div>
          <div className="contact-item">
            <IoLocationOutline className="contact-icon" />
            <h2>Alpharetta, GA</h2>
            <FaFlagUsa className="contact-icon" />
          </div>
        </div>
        <div className="contact-item">
          <div>
            <a
              href="https://www.linkedin.com/in/zach-wilkins-5740b147/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin className="contact-icon" />
            </a>
            <a
              href="https://www.github.com/zach0811"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub className="contact-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
