import { AiOutlineDownload } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrLocationPin } from "react-icons/gr";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { Projects } from "./Projects";
export const Home = () => {
  return (
    <>
      <div className="flex flex-col   gap-6 justify-center items-center">
        <div className=" flex flex-col gap-8 justify-start items-center md:items-start">
          <h1 className=" text-5xl font-bold">
            Hi, I am <br />
            <span className="text-teal-600 ">Jugesh Raghav</span>
          </h1>
          <p className="text-sm w-80">
            A passionate Frontend Developer skilled in ReactJS, Javascript, HTML
            and CSS based in Delhi, India.
          </p>
          <div className="flex gap-2">
            <AiFillGithub className="text-xl " />
            <AiFillLinkedin className="text-xl " />
            <AiOutlineTwitter className="text-xl " />
          </div>
          <div>
            <button className=" flex gap-2 items-center border-2 border-teal-600 text-sm font-bold hover:bg-teal-600 text-teal-600 hover:text-white  px-4 py-1 rounded-lg shadow-lg ">
              Resume <AiOutlineDownload />
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/young-woman-long-hair-with-glasses_24877-82904.jpg?t=st=1718096241~exp=1718099841~hmac=ab4a4db097f7d4acf321dd0261833ccc0dc225fc8dc185514f053ecac6d7a856&w=740"
            alt="my-profile"
            className="w-80 h-80 rounded-xl"
          />
        </div>
      </div>
    </>
  );
};
