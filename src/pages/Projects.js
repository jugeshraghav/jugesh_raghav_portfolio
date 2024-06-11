import { Projectcard } from "../components/ProjectCard";
import { projects } from "../constants/projects";

export const Projects = () => {
  const projectsArr = projects;
  console.log(projectsArr);
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-3xl text-teal-600">Projects</h1>
      <p className="text-sm text-gray-400 px-10">
        I've worked on tons of little projects over the years but these are the
        ones that I'm most proud of. Many of them are open-source, so if you see
        something that picks your interest, check out the code and contribute if
        you have ideas on how it can be improved.
      </p>
      <div className="flex flex-col gap-6">
        {projectsArr?.map((project) => (
          <Projectcard project={project} key={project?.id} />
        ))}
      </div>
    </div>
  );
};
