import "./SectionHeader.css";
import { ReactComponent as DownArrowIcon } from "../../Icons/arrow-down.svg";

const SectionHeader = ({ title }) => {
  const titles = [];

  for (let index = 0; index < 4; index++) {
    titles.push(
      <div key={index}>
        <h1>{title}</h1>
        <DownArrowIcon />
      </div>
    );
  }

  return <div className="SectionHeader">{titles}</div>;
};

export default SectionHeader;
