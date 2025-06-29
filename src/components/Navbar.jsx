import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [navOpen, setNavOpen] = useState(false);
  const links = ["home", "about", "projects", "skills", "contact"];

  const toggleMenu = () => setNavOpen(!navOpen);
  const closeMenu = () => setNavOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-white dark:bg-gray-900 dark:text-white shadow-md">
      <h1 className="text-2xl font-bold text-cyan-500">Kuldeep Gangarekar</h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 items-center text-sm font-medium">
        {links.map((link) => (
          <Link
            key={link}
            to={link}
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer capitalize hover:text-cyan-400"
            activeClass="text-cyan-400 font-semibold"
          >
            {link}
          </Link>
        ))}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl hover:text-yellow-400"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden flex items-center gap-4">
        <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button onClick={toggleMenu}>
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center gap-6 py-6 shadow-md md:hidden">
          {links.map((link) => (
            <Link
              key={link}
              to={link}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
              className="capitalize text-lg hover:text-cyan-400"
            >
              {link}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
