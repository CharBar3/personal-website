import "./Connect.css";
import { ReactComponent as CloseIcon } from "../../Icons/x.svg";
import { ReactComponent as LinkedInLogo } from "../../Icons/Social/LinkedIn.svg";

const Connect = ({ openCloseConnect }) => {
  return (
    <div className="Connect">
      <CloseIcon id="closeIcon" onClick={() => openCloseConnect("open")} />
      <div>
        <a href="https://www.linkedin.com/in/charlesbartlett2022/">LinkedIn</a>
        <a href="https://github.com/CharBar3">GitHub</a>
        <a href="https://calendly.com/charbar3/30min?month=2022-10">Calendly</a>
      </div>
    </div>
  );
};

export default Connect;
