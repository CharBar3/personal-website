import "./Welcome.css";
import { ReactComponent as ArrowRightIcon } from "../../Icons/arrow-right.svg";
import { ReactComponent as LayersIcon } from "../../Icons/layers.svg";
import { ReactComponent as DownloadIcon } from "../../Icons/download.svg";

const Welcome = () => {
  return (
    <div className="Welcome">
      <h1>
        Charles
        <br /> Bartlett
      </h1>
      <div className="WelcomeTitle">
        <h3>Full Stack</h3>
        <LayersIcon />
        <h3>Software Engineer</h3>
      </div>

      <p>
        I empower teams to beat deadlines and exceed expectations. Currently,
        I’m interested in Frontend or Full Stack roles working with React.js.
        Lets talk about how I can make a difference in your workforce!
      </p>
      <div className="WelcomeButtons">
        <button>
          <ArrowRightIcon />
          Lets Talk
        </button>
        <button>
          <DownloadIcon /> Resume
        </button>
      </div>
    </div>
  );
};

export default Welcome;
