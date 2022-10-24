import "./Connect.css";
import { ReactComponent as CloseIcon } from "../../Icons/x.svg";
import { ReactComponent as LinkedInLogo } from "../../Icons/Social/LinkedIn.svg";
import { ReactComponent as GitHubLogo } from "../../Icons/Social/GitHub.svg";

const Connect = ({ openCloseConnect }) => {
  return (
    <div className="Connect">
      <CloseIcon id="closeIcon" onClick={() => openCloseConnect("open")} />
      <a
        href="https://www.linkedin.com/in/charlesbartlett2022/"
        target="_black"
      >
        <LinkedInLogo />
        <h3>LinkedIn</h3>
      </a>
      <a href="https://github.com/CharBar3" target="_black">
        <GitHubLogo style={{ backgroundColor: "White" }} />
        <h3>GitHub</h3>
      </a>
      {/* <a href="https://calendly.com/charbar3/30min?month=2022-10">
        <h3>Calendly</h3>
      </a> */}
    </div>
  );
};

export default Connect;
