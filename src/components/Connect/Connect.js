import "./Connect.css";
import { ReactComponent as CloseIcon } from "../../Icons/x.svg";
import { ReactComponent as LinkedInLogo } from "../../Icons/Social/LinkedIn.svg";
import { ReactComponent as GitHubLogo } from "../../Icons/Social/GitHub.svg";
import { ReactComponent as CalendarIcon } from "../../Icons/calendar.svg";
import { ReactComponent as EmailIcon } from "../../Icons/mail.svg";
import { ReactComponent as PhoneIcon } from "../../Icons/phone.svg";
import { ReactComponent as CopyIcon } from "../../Icons/copy.svg";

const Connect = ({ setConnectStatus, connectStatus }) => {
  const copyToClipboard = (e) => {
    console.log(e.currentTarget);
  };

  return (
    <div
      className="Connect"
      tabIndex="0"
      style={{ width: `${connectStatus}` }}
      onBlur={() => setConnectStatus("0px")}
    >
      <div className="ConnectInnerWrapper">
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
        <a href="https://calendly.com/charbar3/30min?month=2022-10">
          <CalendarIcon />
          <h3>Calendly</h3>
        </a>
        <a href="mailto:charlesthomasbartlett3@gmail.com">
          <EmailIcon />
          <h3>Email Me</h3>
        </a>
        <a href="tel:2524147645">
          <PhoneIcon />
          <h3>Call Me</h3>
        </a>
        {/* <div className="CopyButtons">
          <button onClick={(e) => copyToClipboard(e)}>
            Copy Email <CopyIcon />
          </button>
          <button onClick={(e) => copyToClipboard(e)}>
            2524147645 <CopyIcon />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Connect;
