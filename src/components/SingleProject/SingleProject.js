import "./SingleProject.css";
import { ReactComponent as GithubIcon } from "../../Icons/dev-icons/github.svg";
import { ReactComponent as ExternalLinkIcon } from "../../Icons/external-link.svg";

const SingleProject = ({ title, website, github }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <GithubIcon />
        <ExternalLinkIcon />
      </div>
    </div>
  );
};

export default SingleProject;
