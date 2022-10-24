import "./App.css";
import MobileNav from "./sections/MobileNav/MobileNav";
import Welcome from "./sections/Welcome/Welcome";
import SectionHeader from "./components/SectionHeader/SectionHeader";

function App() {
  return (
    <div className="App">
      <MobileNav />
      <Welcome />
      <SectionHeader title="MORE ABOUT ME" />
    </div>
  );
}

export default App;
