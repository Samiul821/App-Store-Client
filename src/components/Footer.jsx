import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaGithub, FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 mt-16 border-t shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-3xl font-extrabold text-indigo-600 mb-3">
            App Store BD
          </h2>
          <p className="text-sm leading-relaxed">
            Discover useful apps with a clean interface. Built using React &
            Tailwind CSS for modern user experience.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 underline underline-offset-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-indigo-500 transition-colors duration-200"
              >
                🏠 Home
              </Link>
            </li>
            <li>
              <Link
                to="/apps"
                className="hover:text-indigo-500 transition-colors duration-200"
              >
                📱 Apps
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-indigo-500 transition-colors duration-200"
              >
                ℹ️ About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-indigo-500 transition-colors duration-200"
              >
                📞 Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 underline underline-offset-4">
            Follow Me
          </h3>
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            <a
              href="https://facebook.com/smsamiul890"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="hover:text-blue-600 transition-transform hover:scale-110" />
            </a>
            <a
              href="https://github.com/Samiul821"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-gray-900 transition-transform hover:scale-110" />
            </a>
            <a
              href="https://x.com/SmSamiul890"
              target="_blank"
              rel="noreferrer"
            >
              <FaSquareXTwitter className="hover:text-black transition-transform hover:scale-110" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 bg-gray-300 text-gray-700 text-sm font-medium">
        &copy; {new Date().getFullYear()} App Store BD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
