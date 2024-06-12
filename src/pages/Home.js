import { HeroSection } from "../components/HeroSection";
import { Contact } from "./Contact";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
export const Home = () => {
  return (
    <>
      <div>
        <HeroSection />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};
