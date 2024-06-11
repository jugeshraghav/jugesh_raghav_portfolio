import { AiFillTwitterCircle } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
export const Footer = () => {
  return (
    <div className=" p-2 py-8 flex justify-between items-center">
      <div>
        <p className="text-teal-600 text-sm">Made with ❤️ by @Jugesh Raghav</p>
      </div>
      <div className="flex gap-4 ">
        <AiFillLinkedin className=" text-xl cursor-pointer w-6 h-6 rounded-lg hover:shadow-lg" />
        <AiFillGithub className=" text-xl cursor-pointer w-6 h-6 rounded-lg hover:shadow-lg" />
        <AiFillInstagram className=" text-xl cursor-pointer w-6 h-6 rounded-lg hover:shadow-lg" />
        <SiLeetcode className=" text-xl cursor-pointer w-6 h-6 rounded-lg hover:shadow-lg" />
        <AiFillTwitterCircle className=" text-xl cursor-pointer w-6 h-6 rounded-lg hover:shadow-lg" />
      </div>
    </div>
  );
};
