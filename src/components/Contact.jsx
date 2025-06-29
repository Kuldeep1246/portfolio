import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l3dm4fm", // replace
        "template_aypxp62", // replace
        form.current,
        "7dJEehUeuGzYXq1b-" // replace
      )
      .then(() => {
        setSent(true);
        form.current.reset();
      })
      .catch((err) => console.log(err.text));
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 sm:px-12 bg-white dark:bg-gray-900"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-500">
          Contact Me
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Feel free to drop a message!
        </p>
      </div>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto grid gap-6"
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="p-3 rounded-md border bg-transparent text-sm"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="p-3 rounded-md border bg-transparent text-sm"
        />
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Your Message"
          className="p-3 rounded-md border bg-transparent text-sm"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition"
        >
          Send Message
        </button>
        {sent && (
          <p className="text-green-500 text-center">
            Message sent successfully!
          </p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;
