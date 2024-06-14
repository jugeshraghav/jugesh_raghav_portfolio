import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    // app Layout
    <div className="">
      <div className="w-[100%] md:w-[75%] mx-auto ">
        {/* Navbar */}
        <div className="fixed top-0 w-full md:w-[75%] mx-auto bg-white py-4">
          <Navbar />
        </div>
        {/* body  */}
        <div className="">
          <Home />
        </div>
        {/* Footer */}
        <div className="py-4 mt-40 border-t-2 border-black ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
