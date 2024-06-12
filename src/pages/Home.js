import { HeroSection } from "../components/HeroSection";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
export const Home = () => {
  return (
    <>
      <div>
        <HeroSection />
        <Skills />
        <Projects />
      </div>
    </>
  );
};
