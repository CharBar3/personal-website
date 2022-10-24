import "./App.css";
import MobileNav from "./sections/MobileNav/MobileNav";
import Welcome from "./sections/Welcome/Welcome";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Education from "./sections/Education/Education";
import Connect from "./components/Connect/Connect";

function App() {
  return (
    <div className="App">
      <MobileNav />
      <Welcome />
      <SectionHeader title="MORE ABOUT ME" />
      <Skills />
      <Projects />
      <Education />
    </div>
  );
}

export default App;
