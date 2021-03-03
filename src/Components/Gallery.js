import "./Gallery.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const gallery = [
  {
    img: "https://imgur.com/EdsvBsc.png",
    link: "/pathtracer",
  },
  {
    img: "https://imgur.com/ssvXosx.png",
    link: "/pathtracer",
  },
  {
    img: "https://imgur.com/2pzpEeL.png",
    link: "/pathtracer",
  },
  {
    img: "https://imgur.com/sML1E4Q.png",
    link: "/pathtracer",
  },
  {
    img: "https://imgur.com/oitWXBm.png",
    link: "/pathtracer",
  },
  {
    img: "https://imgur.com/OW6wzsw.png",
    link: "/pathtracer",
  },
  {
    img: "https://imgur.com/BHLWq9T.png",
    link: "/pathtracer",
  },
  {
    img: "https://imgur.com/TI91UWk.png",
    link: "/rtxtracer",
  },
  {
    img: "https://imgur.com/O5YGU4I.png",
    link: "/rtxtracer",
  },
  {
    img: "https://imgur.com/jb1QRuk.png",
    link: "/rtxtracer",
  },
  {
    img: "https://imgur.com/VT9N1rz.png",
    link: "/rtxtracer",
  },
  {
    img: "https://imgur.com/eaK8IXf.png",
    link: "/rtxtracer",
  },
];

export function Gallery(props) {
  return (
    <div>
      {gallery.map((item) => {
        return (
          <div>
            <Link to={item.link} style={{ textDecoration: "none", color: "black" }}>
              <img src={item.img} alt={item.alt} className="gallery-image" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
