import { Projectcard } from "../components/ProjectCard";
import { projects } from "../constants/projects";

export const Projects = () => {
  const projectsArr = projects;

  return (
    <div className="py-40 flex flex-col gap-20 ">
      <div>
        <h1 className="font-bold text-5xl text-teal-600 text-center mb-6">
          Projects
        </h1>
        <h1 className="text-thin text-2xl  text-center">
          Imagination Trumps Knowledge!
        </h1>
      </div>

      <div className="flex flex-col gap-16 w-[70%] mx-auto">
        {projectsArr?.map((project) => (
          <Projectcard project={project} key={project?.id} />
        ))}
      </div>
    </div>
  );
};
