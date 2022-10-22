import "./App.css";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import About from "./sections/About/About";
import MobileNav from "./sections/MobileNav/MobileNav";
import Welcome from "./sections/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <MobileNav />
      <Welcome />
      <About />
    </div>
  );
}

export default App;
