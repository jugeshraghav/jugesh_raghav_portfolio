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
      <div className="w-[100%] h-60 p-4 border-2 flex gap-4 shadow-lg">
        <div className="w-[50%] h-[100%]">
          <img src={image} alt={name} className="w-[100%] h-full rounded" />
        </div>
        <div className=" w-[50%] text-left flex flex-col gap-2">
          <h4 className="font-bold text-xl text-teal-600">{name}</h4>
          <p className="text-sm ">{tagline}</p>
          {/* <p className="text-sm text-gray-400 px-2">{description}</p> */}
          <div className="flex gap-2">
            <AiOutlineLink className="text-xl" />
            <AiFillGithub className="text-xl" />
          </div>
          <div className="flex gap-2">
            {techStack.map((technology) =>
              technology === "react" ? (
                <DiReact className="text-xl" />
              ) : technology === "javascript" ? (
                <DiJavascript1 className="text-xl" />
              ) : (
                <DiCss3 className="text-xl" />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};
