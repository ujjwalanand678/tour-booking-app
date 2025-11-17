import React from "react";
import travel from "../assets/travel-3.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Logo + Description */}
        <div>
          <img 
            src={travel} 
            alt="travel logo" 
            className="w-32 sm:w-36 mb-4"
          />
          <p className="text-gray-700 text-base leading-6 max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, natus!
          </p>
        </div>

        {/* Discover */}
        <div>
          <ul>
            <li className="font-bold text-xl mb-4">Discover</li>
            <li className="text-base mb-3">
              <Link to="/">Home</Link>
            </li>
            <li className="text-base mb-3">
              <Link to="/about">About</Link>
            </li>
            <li className="text-base mb-3">
              <Link to="/tour">Tours</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <ul>
            <li className="font-bold text-xl mb-4">Quick Links</li>
            <li className="text-base mb-3">
              <Link to="/">Gallery</Link>
            </li>
            <li className="text-base mb-3">
              <Link to="/login">Login</Link>
            </li>
            <li className="text-base mb-3">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <ul>
            <li className="font-bold text-xl mb-4">Contact</li>
            <li className="text-base mb-3">
              <strong>Address:</strong> Patna, Bihar
            </li>
            <li className="text-base mb-3">
              <strong>Email:</strong> ujjwalanand678@gmail.com
            </li>
            <li className="text-base mb-3">
              <strong>Phone:</strong> +91 7903972407
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Line */}
      <hr className="opacity-40" />

      <p className="text-gray-700 text-lg mt-8 mb-10 text-center px-4">
        Copyright {new Date().getFullYear()}, Design and developed by
        <span className="font-bold"> UJJWAL ANAND</span>. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
