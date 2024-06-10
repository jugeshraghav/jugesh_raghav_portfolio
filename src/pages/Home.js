import { GrLocationPin } from "react-icons/gr";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
export const Home = () => {
  return (
    <>
      <div className="w-[80%]  mx-auto flex flex-col md:flex-row gap-6">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-teal-600 text-3xl font-bold">
            Front-End React Developer
          </h1>
          <p>
            Hi, I am <span className="text-teal-600 ">Jugesh Raghav</span>. A
            passionate Frontend Developer based in Delhi, India{" "}
            <GrLocationPin className="text-red-500 font-bold" />
          </p>
          <div className="flex gap-2">
            <AiFillGithub className="text-lg" />
            <AiFillLinkedin className="text-lg" />
          </div>
          <div>
            <button>Resume</button>
            <button>Contact Me </button>
          </div>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/work-home-concept-flat-design_1308-94346.jpg?t=st=1718005322~exp=1718008922~hmac=519ee0d6dee6a5092a16b68a52302ec6757f086f10c865ca2af1c91db5f5d1d6&w=826"
            alt="my-profile"
          />
        </div>
      </div>
    </>
  );
};
