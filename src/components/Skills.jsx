import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiFirebase
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> }
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 sm:px-12 bg-gray-100 dark:bg-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-500 mb-4">
          Tech Stack
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Technologies I've worked with
        </p>
      </motion.div>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-8 max-w-5xl mx-auto text-4xl text-center">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="hover:scale-110 transition transform duration-300"
          >
            <div>{skill.icon}</div>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
