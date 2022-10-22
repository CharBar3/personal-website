import "./App.css";
import MobileNav from "./components/MobileNav/MobileNav";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <MobileNav />
        <Welcome />
      </div>
    </div>
  );
}

export default App;
