import { Projectcard } from "../components/ProjectCard";
import { projects } from "../constants/projects";

export const Projects = () => {
  const projectsArr = projects;

  return (
    <div className="flex flex-col gap-20 py-8">
      <h1 className="font-bold text-5xl text-teal-600 text-center">
        Imagination Trumps Knowledge!
      </h1>

      <div className="flex flex-col gap-16 w-[70%] mx-auto">
        {projectsArr?.map((project) => (
          <Projectcard project={project} key={project?.id} />
        ))}
      </div>
    </div>
  );
};
