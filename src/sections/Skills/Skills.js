import "./Skills.css";

import { ReactComponent as DownArrowIcon } from "../../Icons/arrow-down.svg";
import { ReactComponent as JavaScriptIcon } from "../../Icons/dev-icons/JavaScript.svg";
import { ReactComponent as ReactIcon } from "../../Icons/dev-icons/React.svg";
import { ReactComponent as HTMLIcon } from "../../Icons/dev-icons/HTML.svg";
import { ReactComponent as CSSIcon } from "../../Icons/dev-icons/CSS.svg";
import { ReactComponent as ExpressIcon } from "../../Icons/dev-icons/Express.svg";
import { ReactComponent as NodeIcon } from "../../Icons/dev-icons/Node.svg";
import { ReactComponent as MongoDBIcon } from "../../Icons/dev-icons/MongoDB.svg";
import DevIcon from "../../components/DevIcon/DevIcon";

const Skills = () => {
  return (
    <div className="Skills">
      <h2>SKILLS</h2>
      <div className="Skills-Title">
        <h3>Frontend</h3>
        <DownArrowIcon />
        <div></div>
      </div>
      <div className="Icon-Section">
        <div>
          <DevIcon
            svg={<JavaScriptIcon />}
            title="JavaScript"
            iconFirst={true}
          />
          <DevIcon svg={<ReactIcon />} title="React.js" />
          <DevIcon svg={<HTMLIcon />} title="HTML" />
          <DevIcon svg={<CSSIcon />} title="CSS" />
        </div>
      </div>
      <div className="Skills-Title">
        <div></div>
        <DownArrowIcon />
        <h3>Backend</h3>
      </div>
      <div className="Icon-Section">
        <div>
          <DevIcon
            svg={<ExpressIcon id="Express-Icon" />}
            title="Express.js"
            backendIcon={true}
          />
          <DevIcon svg={<NodeIcon />} title="Node.js" backendIcon={true} />
          <DevIcon svg={<MongoDBIcon />} title="MongoDB" backendIcon={true} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
