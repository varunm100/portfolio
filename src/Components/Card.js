import "./Card.css";
import { Link } from "react-router-dom";

export function Card(props) {
  return (
    <div className="project">
      <Link to={props.route} class="project-title">
        <img src={props.src} className="project-image" alt="project screenshot"/>
        <p>{props.title}</p>
      </Link>
    </div>
  );
}
