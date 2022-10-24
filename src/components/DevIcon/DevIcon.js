import "./DevIcon.css";

const DevIcon = ({ svg, title }) => {
  return (
    <div className="DevIcon">
      <span>{svg}</span>
      <span>{title}</span>
    </div>
  );
};

export default DevIcon;
