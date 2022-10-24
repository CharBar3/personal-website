import "./Education.css";

import { ReactComponent as RightArrowCircleIcon } from "../../Icons/arrow-right-circle.svg";
import GeneralAssemblyLogo from "../../Icons/dev-icons/GA-Logo.png";

const Education = () => {
  return (
    <div className="Education">
      <h2>EDUCATION</h2>
      <div>
        <h3>General Assembly</h3>
        <img src={GeneralAssemblyLogo} />
      </div>
      <div>
        <p>
          Full-stack software engineering immersive student in an intensive,
          twelve-week, 450+ hour program focused on product development
          fundamentals, object-oriented programming, MVC frameworks, data
          modeling, and team collaboration strategies. Developed a portfolio of
          individual and group projects.
        </p>
      </div>
    </div>
  );
};

export default Education;
