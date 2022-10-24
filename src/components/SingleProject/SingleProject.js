import "./SingleProject.css";
import { ReactComponent as GithubIcon } from "../../Icons/dev-icons/github.svg";
import { ReactComponent as ExternalLinkIcon } from "../../Icons/external-link.svg";

const SingleProject = ({ title, website, github }) => {
  return (
    <div className="SingleProject">
      <h3>{title}</h3>
      <div className="SingleProject-Icons">
        <a href={github} target="_blank">
          <GithubIcon />
        </a>
        <a href={website} target="_blank">
          <ExternalLinkIcon />
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
