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
    <>
      <Navbar />
      <div className="w-[60%] mx-auto py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
