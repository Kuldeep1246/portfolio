import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Kuldeep from "../assets/KuldeepGangarekar.pdf"

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center px-6 sm:px-12 bg-gradient-to-b from-black via-gray-800 to-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-cyan-400">Kuldeep</span>
        </h1>
        <p className="text-gray-300 max-w-lg mx-auto mb-6">
          Full Stack Developer | MERN Stack | Passionate about building scalable
          apps
        </p>

        <div className="flex justify-center gap-4 mb-4 text-2xl">
          <a
            href="https://github.com/kuldeep1246"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:text-cyan-400 transition" />
          </a>
          <a
            href="https://linkedin.com/in/kuldeep-gangarekar-9a5941231"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:text-cyan-400 transition" />
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <Link to="projects" smooth duration={500}>
            <button className="px-6 py-2 bg-cyan-500 rounded-md text-white hover:bg-cyan-600">
              View Projects
            </button>
          </Link>
          <a href={Kuldeep} download>
            <button className="px-6 py-2 border border-cyan-500 rounded-md text-cyan-400 hover:bg-cyan-600 hover:text-white">
              Download Resume
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
