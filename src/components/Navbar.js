import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggleNavHandler = (e) => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between w-100 my-2 p-4 border-b-2 border-teal-600 shadow-lg ">
        <div>
          <h4 className="nav_logo text-teal-600 font-bold cursor-pointer ">
            Jugesh Raghav
          </h4>
        </div>
        {isOpen && (
          <div className="flex flex-col md:flex-row mt-10 md:mt-0 gap-6 justify-between">
            <p className="text-teal-600 font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150">
              About
            </p>
            <p className="text-teal-600 font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150">
              Experience
            </p>
            <p className="text-teal-600 font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150">
              Projects
            </p>
            <p className="text-teal-600 font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150">
              Resume
            </p>
            <p className="text-teal-600 font-semithin cursor-pointer hover:border-b-4 hover:border-teal-500 ease-in-out duration-150">
              Contact Me
            </p>
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
