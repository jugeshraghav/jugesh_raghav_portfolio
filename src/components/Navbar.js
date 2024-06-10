import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import "../App.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggleNavHandler = (e) => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className=" flex flex-col md:flex-row justify-between w-100 my-2 p-4 border-b-2 border-teal-600 shadow-lg">
        <div>
          <NavLink
            to="/"
            className="nav_logo text-teal-600 font-bold cursor-pointer "
          >
            Jugesh Raghav
          </NavLink>
        </div>

        <div className=" hidden mt-10 md:mt-0 md:flex gap-6 justify-between">
          <NavLink
            to="/about"
            className="text-teal-600 font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150"
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className="text-teal-600 font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150"
          >
            Experience
          </NavLink>
          <NavLink
            to="/projects"
            className="text-teal-600 font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150"
          >
            Projects
          </NavLink>
          <NavLink
            to="/resume"
            className="text-teal-600 font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150"
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact"
            className="text-teal-600 font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150"
          >
            Contact Me
          </NavLink>
        </div>

        {isOpen && (
          <div className="flex flex-col mt-10 md:mt-0 gap-6 justify-between md:hidden">
            <NavLink className="text-teal-600 font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150">
              About
            </NavLink>
            <NavLink className="text-teal-600 font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150">
              Experience
            </NavLink>
            <NavLink className="text-teal-600 font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150">
              Projects
            </NavLink>
            <NavLink className="text-teal-600 font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150">
              Resume
            </NavLink>
            <NavLink className="text-teal-600 font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150">
              Contact Me
            </NavLink>
          </div>
        )}

        <div className="absolute top-6 right-6 block md:hidden">
          {isOpen ? (
            <RxCross2
              className="text-teal-600 text-xl cursor-pointer"
              onClick={onToggleNavHandler}
            />
          ) : (
            <GiHamburgerMenu
              className="text-teal-600 text-xl cursor-pointer"
              onClick={onToggleNavHandler}
            />
          )}
        </div>
      </div>
    </>
  );
};
