import "./DevIcon.css";

const DevIcon = ({ svg, title }) => {
  return (
    <div className="DevIcon">
      <div>{svg}</div>
      <span>{title}</span>
    </div>
  );
};

export default DevIcon;
