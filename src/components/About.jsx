import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 sm:px-12 bg-gray-100 dark:bg-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-cyan-500">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          I’m <span className="font-semibold">Kuldeep Gangarekar</span>, a Full
          Stack Developer (MERN) passionate about building secure, scalable, and
          user-friendly web apps.
          <br />
          <br />
          I've built real-time chat apps, booking systems, and voting platforms
          using tools like{" "}
          <strong>JWT, Zustand, Firebase, Cloudinary, Tailwind CSS</strong>, and
          more. I focus on clean code, performance, and great UX.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
