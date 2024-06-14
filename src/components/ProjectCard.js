import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
import { cssIcon, javascriptIcon, reactIcon } from "../constants/icons";
export const Projectcard = ({ project }) => {
  const {
    id,
    name,
    image,
    tagline,
    description,
    techStack,
    link: { live, github },
  } = project;

  return (
    <>
      <div
        className={
          id % 2 === 0
            ? "w-[100%] h-80 p-4  flex gap-6 flex-row-reverse justify-center items-center"
            : "w-[100%] h-80 p-4  flex gap-6 lex-row justify-center items-center"
        }
      >
        <div className="w-[50%] h-[100%]">
          <img src={image} alt={name} className="w-[100%] h-full rounded" />
        </div>
        <div className=" w-[50%] text-left flex flex-col gap-4">
          <h4 className="font-bold text-2xl text-teal-600">{name}</h4>
          {/* <p className="text-sm ">{tagline}</p> */}
          <p className="text-sm">{description}</p>

          <div className="flex gap-2">
            {techStack.map((technology) =>
              technology === "react" ? (
                <img src={reactIcon} alt={technology} className="w-10 h-6" />
              ) : technology === "javascript" ? (
                <img
                  src={javascriptIcon}
                  alt={technology}
                  className="w-10 h-6"
                />
              ) : (
                <img src={cssIcon} alt={technology} className="w-10 h-6" />
              )
            )}
          </div>
          <div className="flex gap-2">
            <button className="bg-teal-600 px-2 py-1 border-2 border-teal-600 text-white hover:bg-white hover:text-teal-600 flex gap-2">
              Live <AiOutlineLink className="text-xl" />
            </button>
            <button className="hover:bg-teal-600 px-2 py-1 border-2 border-teal-600 hover:text-white bg-white text-teal-600 flex gap-2">
              Source Code
              <AiFillGithub className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
