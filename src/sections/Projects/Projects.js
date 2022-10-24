import SingleProject from "../../components/SingleProject/SingleProject";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="Projects">
      <h2>PROJECTS</h2>
      <SingleProject
        title="Skully Rogers"
        website="https://skully-rogers.netlify.app/"
        github="https://github.com/CharBar3/skully-rogers"
      />
    </div>
  );
};

export default Projects;
