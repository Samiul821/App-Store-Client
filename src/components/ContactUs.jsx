import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for contacting us!");
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-600 mb-4">Contact Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Reach out to us anytime. We’re here to help and answer any question
          you might have!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-indigo-500 text-xl mt-1" />
            <p>Bogura, Bangladesh</p>
          </div>
          <div className="flex items-start gap-4">
            <FaPhone className="text-indigo-500 text-xl mt-1" />
            <p>+880 1330624539</p>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-indigo-500 text-xl mt-1" />
            <p>mdsamiulislamsm254@gmail.com</p>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com/smsamiul890"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="text-2xl text-blue-600 hover:scale-110 transition" />
            </a>
            <a
              href="https://github.com/Samiul821"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-2xl text-gray-800 hover:scale-110 transition" />
            </a>
            <a
              href="https://x.com/SmSamiul890"
              target="_blank"
              rel="noreferrer"
            >
              <FaSquareXTwitter className="text-2xl text-black-700 hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-base-100 shadow-md p-8 rounded-xl space-y-6 border"
        >
          <div className="form-control flex flex-col">
            <label className="label font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control flex flex-col">
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control flex flex-col">
            <label className="label font-semibold">Message</label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Your message..."
              rows={5}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-purple-500 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
