import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import Resume from "../res/resume.pdf";

export function About(props) {
  return (
    <div id="about">
      <br />
      <br />
      <div class="left">
        <img src="https://imgur.com/emSOqKS.png" alt="pfp" />
        <nav id="icon-list">
          <a href="https://github.com/varunm100" class="icon">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="mailto:varunm100@gmail.com" class="icon">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          {/* <a
            href="https://www.linkedin.com/in/varun-munagala-367b4a110/"
            class="icon"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a> */}
          <a
            href={Resume}
            target="_blank"
            rel="noreferrer"
            download
            class="icon"
          >
            <FontAwesomeIcon icon={faFile} size="2x" />
          </a>
        </nav>
      </div>
      <div>
        <div id="about-title">About</div>
        {/* <br />
        <br /> */}
        <p id="about-desc">
          Freshmen at UW Madison who thinks computers are cool :) Feel free to
          reach out to my email if you want to chat.
          <br />
          <br />
          Email: varunm100 AT gmail.com -{" "}
          <a href={Resume} target="_blank" rel="noreferrer" download>
            Resume/CV
          </a>
        </p>
      </div>
    </div>
  );
}
