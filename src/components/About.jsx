import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
       <Helmet>
        <title>About Us | App Store</title>
      </Helmet>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-indigo-600 mb-4">About Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Welcome to our App Explorer! We aim to bring you the most innovative,
          useful, and trending applications in one place. Whether you're looking
          for productivity tools, entertainment, or utilities – we’ve got
          something for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-base-100 shadow-md p-6 rounded-xl border"
        >
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            🚀 Our Mission
          </h3>
          <p className="text-sm text-gray-700">
            To connect users with powerful apps that simplify life, boost
            productivity, and spark creativity.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-base-100 shadow-md p-6 rounded-xl border"
        >
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            🎯 Our Vision
          </h3>
          <p className="text-sm text-gray-700">
            Become a leading platform for app discovery where innovation meets
            usability.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-base-100 shadow-md p-6 rounded-xl border"
        >
          <h3 className="text-xl font-semibold text-green-600 mb-2">
            🤝 Our Promise
          </h3>
          <p className="text-sm text-gray-700">
            Curated content, honest reviews, and an easy-to-use platform you can
            trust.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
