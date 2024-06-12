import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";
import { Resume } from "./pages/Resume";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <div className=" ">
      <div className="">
        <Navbar />
      </div>
      <div className="   ">
        <Home />
        <Skills />
        <Projects />
      </div>
      <div className=" ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
