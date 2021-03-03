import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Card } from "./Components/Card";
import { About } from "./Components/About";
import { Gallery } from "./Components/Gallery";
import {
  RTXTracer,
  PathTracer,
  LegendOfZelda,
  AnimeNetwork,
  TimeSeries,
  P2PNetwork,
  VoxelEngine,
  TimeTracker,
  ASCIIChess,
} from "./Components/ProjectPage";

const Projects = [
  {
    src:
      "https://camo.githubusercontent.com/98e70bf351dbaaaf4fc176019396754a22f68920b1df271e1069b4a1f61791ce/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3634303633313235393733303534323630322f3738323338313338363430343436323633322f756e6b6e6f776e2e706e67",
    title: "RTX Vulkan Ray Tracer",
    route: "/rtxtracer",
  },
  {
    src:
      "https://camo.githubusercontent.com/42c496372b8339202023aa570dbe1c8bb34b72ede3177abaaa6c39a3f1007c5a/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3634303633313235393733303534323630322f3738303533393232373232313030303234332f756e6b6e6f776e2e706e67",
    title: "Path Tracer",
    route: "/pathtracer",
  },
  {
    src: "https://imgur.com/2VJWZmR.png",
    title: "Voxel Engine",
    route: "/voxelengine",
  },
  {
    src: "https://imgur.com/Fl1Ekcy.png",
    title: "Screen Time Tracker",
    route: "/timetracker",
  },
  {
    src: "https://imgur.com/pq4S1QW.png",
    title: "Time Series Prediction",
    route: "/timeseries",
  },
  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/P2P-network.svg/1024px-P2P-network.svg.png",
    title: "Peer-to-Peer Network",
    route: "/p2pnetwork",
  },
  {
    src:
      "https://user-images.githubusercontent.com/19439575/34623893-1390d66c-f279-11e7-9d2c-4bc7c80c8168.gif",
    title: "Legend of Zelda Clone",
    route: "/legendofzelda",
  },
  {
    src:
      "https://camo.githubusercontent.com/b70bb9ab5f26067e0be71dfb6825d3bc0a856422647cc40fbb1b94505d10ffc8/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3736323830323838363935373539363638322f3830343531313838373538303036393933382f756e6b6e6f776e2e706e67",
    title: "Anime Network",
    route: "/animenetwork",
  },
  {
    src: "https://i.imgur.com/TC6YcQ7.png",
    title: "ASCII Chess",
    route: "/asciichess",
  },
];

function App() {
  return (
    <div className="content">
      <Router basename={process.env.PUBLIC_URL}>
        <header className="header">
          <a href="index.html" className="header-title">
            Varun Munagala
          </a>
          <nav className="main-nav">
            <ul>
              <li>
                <Link to="/" style={{ textDecoration: "none", color: "#263333"}}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  style={{ textDecoration: "none", color: "#263333"}}
                >
                  Render Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "#263333" }}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <br />
          <br />
          <br />
        </header>
        <body>
          <section id="main-content">
            <Switch>
              <Route path="/gallery">
                <Gallery />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/rtxtracer">
                <RTXTracer />
              </Route>
              <Route path="/pathtracer">
                <PathTracer />
              </Route>
              <Route path="/legendofzelda">
                <LegendOfZelda />
              </Route>
              <Route path="/animenetwork">
                <AnimeNetwork />
              </Route>
              <Route path="/timeseries">
                <TimeSeries />
              </Route>
              <Route path="/p2pnetwork">
                <P2PNetwork />
              </Route>
              <Route path="/voxelengine">
                <VoxelEngine />
              </Route>
              <Route path="/timetracker">
                <TimeTracker />
              </Route>
              <Route path="/asciichess">
                <ASCIIChess />
              </Route>
              <Route path="/">
                {Projects.map((project) => {
                  return (
                    <Card
                      src={project.src}
                      title={project.title}
                      route={project.route}
                    />
                  );
                })}
              </Route>
            </Switch>
          </section>
        </body>
      </Router>
    </div>
  );
}

export default App;
