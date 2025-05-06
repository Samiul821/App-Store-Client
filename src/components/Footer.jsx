import React from "react";
import { Link } from "react-router";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/about" className="link link-hover">
          About us
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
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
          <a href="https://x.com/SmSamiul890" target="_blank" rel="noreferrer">
            <FaSquareXTwitter className="text-2xl text-black-700 hover:scale-110 transition" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
