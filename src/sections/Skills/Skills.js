import "./Skills.css";

import { ReactComponent as DownArrowIcon } from "../../Icons/arrow-down.svg";

const Skills = () => {
  return (
    <div className="Skills">
      <h2>SKILLS</h2>
      <div className="Skills-Title">
        <h3>Frontend</h3>
        <DownArrowIcon />
        <div></div>
      </div>

      <div className="Skills-Title">
        <div></div>
        <DownArrowIcon />
        <h3>Backend</h3>
      </div>
    </div>
  );
};

export default Skills;
