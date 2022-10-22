import "./Welcome.css";
import { ReactComponent as ArrowIcon } from "../../Icons/arrow-up-right.svg";

const Welcome = () => {
  return (
    <div className="Welcome">
      <h1>CHARLES BARTLETT</h1>
      <h3>Full Stack Software Engineer</h3>
      <p>
        Hello! I'm a full stack MERN developer with a focus on Frontend. I'm
        currently intersted in full time positions working with React.js!
      </p>
      <button>
        Lets Talk
        <ArrowIcon />
      </button>
    </div>
  );
};

export default Welcome;
