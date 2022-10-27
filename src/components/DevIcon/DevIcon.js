import "./DevIcon.css";

const DevIcon = ({ svg, title, backendIcon }) => {
  if (backendIcon) {
    return (
      <div className="DevIcon BackendIcon">
        <div className={title}>{svg}</div>
        <span>{title}</span>
      </div>
    );
  } else {
    return (
      <div className="DevIcon">
        <div>{svg}</div>
        <span>{title}</span>
      </div>
    );
  }
};

export default DevIcon;
