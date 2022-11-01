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
      <SingleProject
        title="BingeList"
        website="https://bingelist-project.netlify.app/bingelist/"
        github="https://github.com/CharBar3/bingelist-frontend"
      />
      <SingleProject
        title="Workout Time"
        website="hhttps://workout-time.herokuapp.com/dashboard"
        github="https://github.com/CharBar3/workout-time"
      />
      <SingleProject
        title="Guess that Rick & Morty Character!"
        website="https://charbar3.github.io/Guess-that-Rick-Morty-Character/"
        github="https://github.com/CharBar3/Guess-that-Rick-Morty-Character"
      />
    </div>
  );
};

export default Projects;
