import React from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";

const Error = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-[#1a1a2e] to-[#16213e] text-white p-6">
      <motion.div
        className="text-center max-w-md space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="w-40 h-40 mx-auto"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-full h-full text-violet-400"
          >
            <path
              fill="currentColor"
              d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
            ></path>
            <rect
              width="176"
              height="32"
              x="168"
              y="320"
              fill="currentColor"
            ></rect>
            <polygon
              fill="currentColor"
              points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 
            162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 
            120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
            ></polygon>
            <polygon
              fill="currentColor"
              points="383.958 182.63 360.042 161.37 338.671 185.412 
            314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 
            319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 
            362.588 206.671 383.958 182.63"
            ></polygon>
          </svg>
        </motion.div>

        <motion.h1
          className="text-5xl font-bold"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          404
        </motion.h1>

        <p className="text-lg text-gray-300">
          Oops! The page you're looking for doesn't exist or is currently
          offline.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <NavLink
            to="/"
            className="inline-block px-6 py-3 mt-4 bg-violet-600 hover:bg-violet-700 transition rounded-full text-white font-semibold"
          >
            ⬅ Back to Homepage
          </NavLink>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Error;
