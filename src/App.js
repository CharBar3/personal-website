import "./App.css";
import MobileNav from "./sections/MobileNav/MobileNav";
import Welcome from "./sections/Welcome/Welcome";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <div className="App">
      <MobileNav />
      <Welcome />
      <SectionHeader title="MORE ABOUT ME" />
      <Skills />
    </div>
  );
}

export default App;
