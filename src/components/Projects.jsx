import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ChatGo",
    desc: `Secure chat app with JWT authentication, Cloudinary image upload, Zustand for state, and Socket.IO integration. Deployed on Render with responsive UI using Tailwind CSS and DaisyUI.`,
    tech: "MERN, Zustand, Socket.IO, Cloudinary, Tailwind CSS, DaisyUI",
    demo: "https://chatgo-uhcl.onrender.com/",
    code: "https://github.com/Kuldeep1246/ChatGo"
  },
  {
    title: "Online Voting System",
    desc: `Built secure voter auth with Firebase and React Router. Designed voter profiles and supported confidential vote casting for transparency in remote voting.`,
    tech: "React, Firebase, Material-UI, React Router",
    demo: "https://onlinevotingsys.netlify.app/",
    code: "https://github.com/anisha314/OnlineVotingSystem"
  },
  {
    title: "Booking.Pro",
    desc: `Travel booking platform for hotels, flights, and cars with Firebase authentication. Developed fully responsive UI with HTML, CSS, JavaScript.`,
    tech: "HTML, CSS, JavaScript, Firebase Realtime DB",
    demo: "https://bookingpro.netlify.app/",
    code: "https://github.com/jasminekeshari/Booking.Pro"
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 sm:px-12 bg-white dark:bg-gray-900"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-500">
          Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Explore my featured work
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-cyan-500 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
              {project.desc}
            </p>
            <p className="text-xs text-gray-500 italic mb-4">{project.tech}</p>
            <div className="flex justify-between text-sm">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 hover:underline"
              >
                Live
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 hover:underline"
              >
                Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
