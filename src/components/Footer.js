import { AiFillTwitterCircle } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
export const Footer = () => {
  return (
    <div className=" border-t-2 border-teal-600 p-2  w-100 flex flex-col gap-2 items-center absolute bottom-0 left-0 right-0">
      <div className="flex gap-4 ">
        <AiFillLinkedin className="text-blue-500 text-2xl cursor-pointer w-6 h-6 rounded-lg hover:shadow-lg" />
        <AiFillGithub className=" text-2xl cursor-pointer w-6 h-6 rounded-lg hover:shadow-lg" />
        <AiFillInstagram className="text-pink-500 text-2xl cursor-pointer w-6 h-6 rounded-lg hover:shadow-lg" />
        <SiLeetcode className="text-yellow-600 text-2xl cursor-pointer w-6 h-6 rounded-lg hover:shadow-lg" />
        <AiFillTwitterCircle className="text-blue-500 text-2xl cursor-pointer w-6 h-6 rounded-lg hover:shadow-lg" />
      </div>
      <div>
        <p className="text-teal-600">Made with ❤️ by @Jugesh Raghav</p>
      </div>
    </div>
  );
};
