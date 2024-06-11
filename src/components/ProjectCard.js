import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
export const Projectcard = ({ project }) => {
  const {
    name,
    image,
    tagline,
    description,
    techStack,
    link: { live, github },
  } = project;

  return (
    <>
      <div className="w-[80%] mx-auto h-60 p-4 border-2 border-teal-600 rounded-lg flex gap-4 hover:shadow-lg hover:shadow-teal-400">
        <div className="w-full h-full">
          <img src={image} alt={name} className="w-[40%] h-full rounded" />
        </div>
        <div className="text-left flex flex-col gap-2">
          <h4 className="font-bold text-md">{name}</h4>
          <p className="text-sm text-teal-600">{tagline}</p>
          <p className="text-sm text-gray-400 px-2">{description}</p>
          <div className="flex gap-2">
            <AiOutlineLink className="text-lg" />
            <AiFillGithub className="text-lg" />
          </div>
          <div className="flex gap-2">
            {techStack.map((technology) =>
              technology === "react" ? (
                <DiReact className="text-lg" />
              ) : technology === "javascript" ? (
                <DiJavascript1 className="text-lg" />
              ) : (
                <DiCss3 className="text-lg" />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};
