import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { MdAddTask, MdOutlineTaskAlt,MdOutlineMotionPhotosOn } from "react-icons/md";
import { RiArchiveDrawerLine } from "react-icons/ri";
function NavBar() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  return (
    <IconContext.Provider value={{ className: "text-xl md:text-2xl" }}>
      <div className="z-50 bottom-0 bg-gray-600 w-full fixed h-20 md:w-36 md:h-full md:m-auto md:rounded-r-xl md:rounded-t-none rounded-t-xl">
        <nav className="tabs flex flex-center h-full md:h-auto justify-center text-xs md:flex-col md:items-center md:py-28">
          <Link
            to="/new"
            onClick={() => setActiveMenuItem(0)}
            className={`${
              activeMenuItem === 0 ? "dark-shadow" : ""
            } w-full h-full md:py-6 md:m-1.5 flex flex-col items-center justify-center hover:bg-black`}
          >
            <MdAddTask
              className={activeMenuItem === 0 ? "text-green-500" : "text-white"}
            />
            <span
              className={`${
                activeMenuItem === 0 ? "text-green-500" : "text-white"
              } mt-1.5`}
            >
              NewTask
            </span>
          </Link>
          <Link
            to="/inprogress"
            onClick={() => setActiveMenuItem(1)}
            className={`${
              activeMenuItem === 1 ? "dark-shadow" : ""
            } w-full h-full md:py-6 md:m-1.5 flex flex-col items-center justify-center hover:bg-black`}
          >
            <MdOutlineMotionPhotosOn
              className={activeMenuItem === 1 ? "text-green-500" : "text-white"}
            />
            <span
              className={`${
                activeMenuItem === 1 ? "text-green-500" : "text-white"
              } mt-1.5`}
            >
              Inprogress
            </span>
          </Link>{" "}
          <Link
            to="/completed"
            onClick={() => setActiveMenuItem(2)}
            className={`${
              activeMenuItem === 2 ? "dark-shadow" : ""
            } w-full h-full md:py-6 md:m-1.5 flex flex-col items-center justify-center hover:bg-black`}
          >
            <MdOutlineTaskAlt
              className={
                activeMenuItem === 2 ? "text-green-500 " : "text-white "
              }
            />
            <span
              className={`${
                activeMenuItem === 2 ? "text-green-500" : "text-white"
              } mt-1.5`}
            >
              Completed{" "}
            </span>
          </Link>
          <Link
            to="/archive"
            onClick={() => setActiveMenuItem(3)}
            className={`${
              activeMenuItem === 3 ? "dark-shadow" : ""
            } w-full h-full md:py-6 md:m-1.5 flex flex-col items-center justify-center hover:bg-black`}
          >
            <RiArchiveDrawerLine
              className={activeMenuItem === 3 ? "text-green-500" : "text-white"}
            />
            <span
              className={`${
                activeMenuItem === 3 ? "text-green-500" : "text-white"
              } mt-1.5`}
            >
              Archive{" "}
            </span>
          </Link>
        </nav>
      </div>
    </IconContext.Provider>
  );
}

export default NavBar;
