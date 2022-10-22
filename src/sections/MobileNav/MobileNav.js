import "./MobileNav.css";

import { ReactComponent as MobileNavIcon } from "../../Icons/menu.svg";

const MobileNav = () => {
  return (
    <div className="MobileNav">
      <span>Charles Bartlett</span>
      <MobileNavIcon />
    </div>
  );
};

export default MobileNav;
