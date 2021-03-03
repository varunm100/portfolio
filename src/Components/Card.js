import "./Card.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function Card(props) {
  return (
    <div className="project">
      <Link to={props.route} class="project-title">
        <img src={props.src} className="project-image" />
        <p>{props.title}</p>
      </Link>
    </div>
  );
}
