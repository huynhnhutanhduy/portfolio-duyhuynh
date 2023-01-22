import React, { useContext } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import { Portfolio } from "../App";

const Home = () => {
  const { nav } = useContext(Portfolio);

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full gap-6">
        <p className="text-xl text-subname">Hi, my name is</p>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-name leading-normal">
          Duy Huynh,
        </h1>
        <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-typing">
          <Typed
            strings={[
              "I'm a Frontend Developer.",
              "I can work with HTML, CSS, JS, ReactJS, SQL, GitHub and new technologies.",
            ]}
            typeSpeed={79}
            backSpeed={39}
            loop
            className="leading-normal"
          ></Typed>
        </h2>

        {/* Social icons */}
        <div className={!nav ? "xl:hidden absolute top-[77%]" : "hidden"}>
          <ul className="flex mt-2">
            <li className="pl-0">
              <a
                href="https://www.facebook.com/duy.hnad"
                className="text-[#1877f2]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={30} />
              </a>
            </li>
            <li className="pl-0">
              <a
                href="https://github.com/huynhnhutanhduy"
                className="text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </li>
            <li className="pl-0">
              <a
                href="https://www.linkedin.com/in/duy-hnad/"
                className="text-[#0079b5]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className="pl-0">
              <a
                href="mailto: duy.hnad@gmail.com"
                className="text-[#fd4648]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiOutlineMail size={30} />
              </a>
            </li>
          </ul>
        </div>

        {/* View to projects */}
        <div className={!nav ? "absolute top-[87%] xl:top-[82%]" : "hidden"}>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-lg duration-300">
              View Projects <HiArrowNarrowRight className="ml-3" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
