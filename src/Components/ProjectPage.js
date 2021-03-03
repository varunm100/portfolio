import "./ProjectPage.css";
import { Link } from "react-router-dom";

export function RTXTracer(props) {
  return (
    <div>
      <h1 className="title">Vulkan RTX Ray Tracer</h1>
      <img
        src="https://imgur.com/VT9N1rz.png"
        alt="screenshot"
        style={{ width: "100%", height: "auto" }}
        class="center"
      />
      <h3 className="subheading">1-minute Summary</h3>
      <p>
        This ray tracer was a hobby project I worked on over the summer of 2020,
        and the goal of this project was to make a complete physically-based GPU
        renderer. I call it a ray tracer because people seem to be more familiar
        with that term, but what it really is, is a hardware-accelerated
        uni-directional forward NEE path tracer.
      </p>
      <p>I implemented, </p>
      <ul>
        <li>Cook-torrance brdf</li>
        <li>Direct light sampling/Area Lights</li>
        <li>Tungsten Scene Loader</li>
        <li>HW Acceleration with Vulkan Ray Tracing Extensions</li>
        <li>Uni-directionl forward rays</li>
      </ul>
      <p style={{ fontSize: "1.25em" }}>
        <a
          href="https://github.com/varunm100/Pathtracer-Vulkan"
          style={{ textDecoration: "none" }}
        >
          Github{" "}
        </a>
        |
        <Link to="/gallery" style={{ textDecoration: "none" }}>
          {" "}
          Render Gallery
        </Link>
      </p>
      <h3 className="subheading">Backstory</h3>
      <p>
        This project was initially supposed to be a regular deferred renderer,
        but I later decided to make it use ray tracing after hearing about the
        horrors of shadow mapping. I had a gaming rig with an RTX card and
        wanted to utilize that as well. After doing some research, I found that
        the only way to do this was to either use the Vulkan ray-tracing
        extension or DXR. After much consideration, I went with the Vulkan route
        because I had planned to learn Vulkan anyway some time ago. This
        combined with the fact that Vulkan was cross-platform made it seem like
        it was the overall better choice. Over the next months of September and
        October, I would make a couple prototype engines before eventually
        working my way up to an engine such as this one. After getting the basic
        unidirectional path tracer working, I got tied up in another project and
        put this one on hold. I am hopeful that I will revisit this and get a
        chance to implement bi-directional rays, photon mapping, transmittance
        BSDF, homogeneous media, and environment maps sometime in the future.
      </p>
    </div>
  );
}

export function PathTracer(props) {
  return (
    <div>
      <h1 className="title">Path Tracer</h1>
      <img
        src="https://imgur.com/EdsvBsc.png"
        alt="screenshot"
        style={{ width: "100%", height: "auto" }}
        class="center"
      />
      <h3 className="subheading">Overview</h3>
      <p>
        This was a project I did for AP CS, we were given a lot of freedom for
        what we could do. It just had to be in processing and use
        objects/classes somehow. And I thought making a path tracer would be a
        fun project. This was not supposed to be super robust, and I just wanted
        something that looked decent, so a simple demo would suffice.
      </p>
      <p>
        Since I wanted to keep things simple, I decided to hard-code everything
        into the fragment shader, so there was no scene-loading, and it could
        only render spheres because they are generally easier to calculate
        intersections for.
      </p>
      <p style={{ fontSize: "1.25em" }}>
        <a
          href="https://github.com/twangcs2021/PathTracer-Processing"
          style={{ textDecoration: "none" }}
        >
          Github{" "}
        </a>
        |
        <Link to="/gallery" style={{ textDecoration: "none" }}>
          {" "}
          Render Gallery
        </Link>
      </p>
      <h3 className="subheading">Interesting Bugs I Ran Into:</h3>
      <ul>
        <li>
          I ran into a distortion bug because my fragment shader coordinates
          were all between -1 and 1, but my camera expected coordinates between
          0 to 1. I don't have any screenshots of it, but the entire scene was
          shifted down and to the left.
        </li>
        <li>
          My random function always returned zero. And since monte-carlo
          integration requires quasi-random sampling, it produced these strange
          artifacts
        </li>
        <img
          src="https://imgur.com/3T0cYjY.png"
        alt="screenshot"
          style={{ width: "100%", height: "auto" }}
        />
        <img
          src="https://imgur.com/XATF8dh.png"
        alt="screenshot"
          style={{ width: "100%", height: "auto" }}
        />
      </ul>
    </div>
  );
}
export function LegendOfZelda(props) {
  return (
    <div>
      <h1 className="title">Legend Of Zelda Clone</h1>
      <img
        src="https://user-images.githubusercontent.com/19439575/34623893-1390d66c-f279-11e7-9d2c-4bc7c80c8168.gif"
        alt="screenshot"
        style={{ width: "100%", height: "auto" }}
        class="center"
      />
      <h3 className="subheading">1-minute Summary</h3>
      <p>
        I used the XNA/Monogame framework in C# to build this game. It is a
        mini-game I made that used all the original sprites and soundtracks from
        the original 1986 action-adventure game The Legend of Zelda. It is a
        2-player combat game where the goal is the deplete the life points of
        the other player. Each player starts with a throwable wooden sword and
        melee weapon that they can use to hit the opponent and deplete their
        life points.
      </p>
      <p style={{ fontSize: "1.25em" }}>
        <a
          href="https://github.com/varunm100/Legend-of-Zelda-Clone"
          style={{ textDecoration: "none" }}
        >
          Github
        </a>
      </p>
    </div>
  );
}

export function AnimeNetwork(props) {
  return (
    <div>
      <h1 className="title">Anime Reccomendation Network</h1>
      <h3 className="subheading">1-minute Summary</h3>
      <p>
        This was built using electron and react. It scrapes anime
        recommendations from myanimelist.net and visually represents them in a
        graph. I originally created this as a little project for myself to
        search for anime more easily. I got inspired by Google's page rank
        algorithm and wondered if I could make something similar, but instead of
        indexing web pages, it indexes anime and creates a recommendation chart
        for people to easily find similar shows.
      </p>
      <p style={{ fontSize: "1.25em" }}>
        <a
          href="https://github.com/varunm100/Anime-Network"
          style={{ textDecoration: "none" }}
        >
          Github
        </a>
      </p>
      <img
        src="https://camo.githubusercontent.com/b70bb9ab5f26067e0be71dfb6825d3bc0a856422647cc40fbb1b94505d10ffc8/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3736323830323838363935373539363638322f3830343531313838373538303036393933382f756e6b6e6f776e2e706e67"
        alt="screenshot"
        style={{ width: "900x", height: "auto" }}
        className="center"
      />
      <img
        src="https://camo.githubusercontent.com/f6074dc8bd04c9dd5171ac407b6f6445101c2b087214bac2c2562ba3c079f5ed/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3736323830323838363935373539363638322f3830343531313935363533343432373635382f756e6b6e6f776e2e706e67"
        alt="screenshot"
        style={{ width: "900px", height: "auto" }}
        className="center"
      />
    </div>
  );
}

export function TimeSeries(props) {
  return (
    <div>
      <h1 className="title">Time Series Prediction</h1>
      <h3 className="subheading">Overview</h3>
      <p>
        During my time at Zebi, a small big data/blockchain startup, I was
        tasked with predicting future sales for a client based on previous
        historical data. I tried out several time-series algorithms, but
        eventually ended-up choosing to go with an LSTM RNN using Keras, which
        was the only machine learning-based algorithm I tested and it generally
        produced more reasonable results than all of the other models.
      </p>
      <p style={{ fontSize: "1.25em" }}>
        <a
          href="https://github.com/varunm100/ResourcePrediction"
          style={{ textDecoration: "none" }}
        >
          Github
        </a>
      </p>
      <p style={{ fontSize: "1.25em" }}>Methods Implemented</p>
      <ul>
        <li>Polynomial Regression</li>
        <li>Quadratic Smoothing</li>
        <li>ARIMA Time Series</li>
        <li>FB Prophet</li>
        <li>LSTM RNN (Recurrent Neural Network)</li>
      </ul>
      <p style={{ fontSize: "1.25em" }}>
        Results from RNN (With differing parameters)
      </p>
      <img
        src="https://imgur.com/pq4S1QW.png"
        alt="screenshot"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

export function P2PNetwork(props) {
  return (
    <div>
      <h1 className="title">Peer To Peer Network</h1>
      <h3 className="subheading">1-minute Summary</h3>
      <p>
        At Zebi, a small big data/blockchain startup, I was tasked with making a
        prototype P2P network. I impelemented it using raw java sockets as a
        proof-of-concept. This was a prototype that was eventually made into a
        private blockchain. One main challenge that I had to tackle was making
        sure it was able to take requests from multiple peers at the same time,
        and so it had to be fully multi-threaded. I decided to go the lock-free
        apporach and use java atomics.
      </p>
      <p style={{ fontSize: "1.25em" }}>
        <a
          href="https://github.com/varunm100/P2P-Network"
          style={{ textDecoration: "none" }}
        >
          Github
        </a>
      </p>
      <p style={{ fontSize: "1.25em" }}>Features I Had to Implement</p>
      <ul>
        <li>Fully multi-threaded and uses Java Sockets</li>
        <li>Ability to distribute data throughout the network</li>
        <li>
          Ability to ping messagges back and forth between 2 targeted nodes
        </li>
        <li>Ability to host a poll and securely get consensus</li>
      </ul>
    </div>
  );
}

export function VoxelEngine(props) {
  return (
    <div>
      <h1 className="title">Voxel Maze</h1>
      <h3 className="subheading">1-minute Summary</h3>
      <p>
        A maze-type voxel game that uses 3d perlin noise and was built using
        OpenGL and C++. This was another one of my hobby prototype engines that
        eventually turned into a voxel maze-type game. I had originally planned
        to turn this into a Minecraft clone with added features, but had trouble
        finalizing the terrain algorithm and never ended up finishing it. I want
        to eventually improve on this by using Vulkan and maybe adding some
        terrain and ray tracing to make it look much better.
      </p>
      <p style={{ fontSize: "1.25em" }}>
        <a
          href="https://github.com/varunm100/VoxelEngine"
          style={{ textDecoration: "none" }}
        >
          Github
        </a>
      </p>
      <img src="https://imgur.com/2VJWZmR.png" alt="screenshot" class="full-width" />
      <img src="https://imgur.com/ZTnIiCH.png" alt="screenshot" class="full-width" />
      <img src="https://imgur.com/73PWdv5.png" alt="screenshot" class="full-width" />
      <img src="https://imgur.com/E8e9tyF.png" alt="screenshot" class="full-width" />
    </div>
  );
}

export function TimeTracker(props) {
  return (
    <div>
      <h1 className="title">Screen Time Monitor</h1>
      <h3 className="subheading">Overview</h3>
      <p>
        This is a time tracking application designed to visialize computer
        activity on a timeline and provide computer usage statistics. This was
        built using react and electron. I mainly chose electron, because it
        seemed like the easiest way to get started with a cross-platform desktop
        application.
      </p>
      <h3 className="subheading">Backstory</h3>
      <p>
        With the increasing number of applications designed to lure you into
        their short-term driven dopamine feedback loop, I found myself spending
        endless hours browsing through Reddit and watching random videos on
        YouTube. It became so much harder to do anything productive. To really
        capitalize the time I spend on my computer I wanted to create an
        application to track my screen time. The program is structured to record
        activity based on the title of the active window and categorizes it into
        several different groups based on a user-defined config file with a list
        of categories and a set of match terms.
      </p>
      <p>Chosen Categories for Myself: </p>
      <ul>
        <li>YouTube</li>
        <li>Netflix</li>
        <li>Twitch</li>
        <li>Reddit</li>
        <li>Anime</li>
        <li>Web Browsing</li>
        <li>Discord</li>
        <li>Spotify</li>
        <li>Emacs</li>
        <li>VS (vscode or Visual Studio)</li>
        <li>Idle</li>
        <li>Other</li>
      </ul>
      <p style={{ fontSize: "1.25em" }}>
        <a
          href="https://github.com/varunm100/screen-time-monitor"
          style={{ textDecoration: "none" }}
        >
          Github
        </a>
      </p>
      <img src="https://imgur.com/E03lmBl.png" alt="screenshot" class="full-width" />
      <img src="https://imgur.com/uQIQsh2.png" alt="screenshot"class="full-width" />
      <img src="https://imgur.com/Fl1Ekcy.png" alt="screenshot" class="full-width" />
    </div>
  );
}

export function ASCIIChess(props) {
  return (
    <div>
      <h1 className="title">ASCII Chess</h1>
      <h3 className="subheading">Overview</h3>
      <p>
        This emulates the classic game of chess with a grid of ascii characters.
        This was written in C++ and only works in a BASH shell
        that supports the colors. I personally love the vintage aesthetic that
        comes with terminal-based games, so I decided to make my own.
      </p>
      <p style={{ fontSize: "1.25em" }}>
        <a
          href="https://github.com/varunm100/ChessEngineC"
          style={{ textDecoration: "none" }}
        >
          Github
        </a>
      </p>
      <img src="https://imgur.com/TC6YcQ7.png" alt="screenshot" class="full-width" />
    </div>
  );
}
