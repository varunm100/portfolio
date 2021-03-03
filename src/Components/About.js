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
          <a
            href="https://www.linkedin.com/in/varun-munagala-367b4a110/"
            class="icon"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href={Resume} target="_blank" rel="noreferrer" download class="icon">
            <FontAwesomeIcon icon={faFile} size="2x" />
          </a>
        </nav>
      </div>
      <div>
        <div id="about-title">About</div>
        <br />
        <br />
        <p id="about-desc">
          Hi! I'm currently a junior at Saratoga high-school who has been doing
          programming for quite some time now as a hobby. I'm passionate about
          computer graphics and machine learning algorithms. I'm also excited
          about trying to improve AR/VR technologies. Outside of machine
          learning and computer graphics, I also love watching Anime and writing
          in my free-time. I'm currently looking for internship or research
          opportunities. Feel free to reach out to me at my email.
          <br />
          <br />
          Email: varunm100 AT gmail.com -{" "}
          <a href={Resume} target="_blank" rel="noreferrer"download>
            Resume/CV
          </a>
        </p>
      </div>
    </div>
  );
}
