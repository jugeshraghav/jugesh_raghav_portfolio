import { BsFillMoonFill } from "react-icons/bs";
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
      <div className=" flex justify-between items-start px-4 md:px-0">
        <div className="flex w-full justify-between md:items-center flex-col   md:flex-row">
          <div>
            <NavLink to="/" className="nav_logo  font-bold cursor-pointer ">
              Jugesh Raghav
            </NavLink>
          </div>

          <div className=" hidden mt-10 md:mt-0 md:flex gap-6 justify-between text-sm ">
            <NavLink
              to="/"
              className=" font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150"
            >
              Home
            </NavLink>
            <NavLink
              to="/skills"
              className=" font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150"
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className=" font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150"
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className=" font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150"
            >
              Contact Me
            </NavLink>
          </div>

          {isOpen && (
            <div className="flex flex-col mt-10 md:mt-0 gap-6 justify-between md:hidden ease-in-out duration-200">
              <NavLink
                className=" font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className=" font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150"
                to="skills"
              >
                Skills
              </NavLink>
              <NavLink
                className=" font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150"
                to="/projects"
              >
                Projects
              </NavLink>

              <NavLink
                className=" font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150"
                to="contact"
              >
                Contact Me
              </NavLink>
            </div>
          )}
        </div>

        <div className="block md:hidden pt-2">
          {isOpen ? (
            <RxCross2
              className=" text-xl cursor-pointer"
              onClick={onToggleNavHandler}
            />
          ) : (
            <GiHamburgerMenu
              className=" text-xl cursor-pointer"
              onClick={onToggleNavHandler}
            />
          )}
        </div>
      </div>
    </>
  );
};
