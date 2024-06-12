import { AiFillTwitterCircle } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
export const Footer = () => {
  return (
    <div className="  flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-0">
      <div>
        <p className=" text-sm">Made with ❤️ by @Jugesh Raghav</p>
      </div>
      {/* contact ooter icons */}
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
