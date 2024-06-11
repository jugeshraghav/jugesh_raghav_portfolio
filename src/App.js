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
    <div className=" flex flex-col  justify-center w-[100%] md:w-[70%] h-[100vh] mx-auto">
      <div className="w-[100%] md:w-[70%] h-[10vh]  fixed top-0 z-10 pb-40">
        <Navbar />
      </div>
      <div className="flex-grow w-[100%] md:w-[70%] h-calc(100vh-20vh)  ">
        <Home />
      </div>
      <div className="w-[100%] md:w-[70%] h-[10vh]  ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
