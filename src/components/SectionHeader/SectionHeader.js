import "./SectionHeader.css";
import { ReactComponent as DownArrowIcon } from "../../Icons/arrow-down.svg";
import { useEffect } from "react";

const SectionHeader = ({ title }) => {
  return (
    <div className="SectionHeader">
      <div>
        <h1>{title}</h1>
        <DownArrowIcon />
      </div>
    </div>
  );
};

export default SectionHeader;
