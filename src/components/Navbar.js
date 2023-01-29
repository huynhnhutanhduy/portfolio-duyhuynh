import React, { useContext } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { Portfolio } from "../App";

const Navbar = () => {
  const { nav, handleClickBar } = useContext(Portfolio);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-8 bg-[#0a192f] text-gray-300 z-20">
      <div className="z-10">
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt="Logo" className="w-[100px] ml-[-20px] md:ml-0 cursor-pointer" />
        </Link>
      </div>

      {/* Menu */}
      <div>
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="certifications" smooth={true} duration={500}>
              Certifications
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
        </ul>
      </div>

      {/* FaBar */}
      <div className="md:hidden z-10 cursor-pointer" onClick={handleClickBar}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <ul>
          <li className="py-6 text-4xl">
            <Link onClick={handleClickBar} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClickBar} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClickBar} to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClickBar} to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClickBar} to="certifications" smooth={true} duration={500}>
              Certifications
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClickBar} to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
        </ul>
      </div>

      {/* Social icons */}
      <div className="hidden xl:flex flex-col fixed left-0 top-[35%]">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1877f2]">
            <a
              href="https://www.facebook.com/duy.hnad"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
            <a
              href="https://github.com/huynhnhutanhduy"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0079b5]">
            <a
              href="https://www.linkedin.com/in/duy-hnad/"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#fd4648]">
            <a
              href="mailto: duy.hnad@gmail.com"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
