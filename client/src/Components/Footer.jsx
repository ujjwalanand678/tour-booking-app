import React from "react";
import travel from "../assets/travel-3.png"
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
    <div className="mx-40 grid grid-cols-4 mt-25  items-center" >
      <div className="px-2">
        <img src={travel} alt="" className="w-40 relative left-5" />
        <p className="text-gray-700 text-base w-35">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, natus!
        </p>
      </div>
      <div>
        <ul className="">
          <li className="font-bold text-lg leading-11">Discover</li>
          <Link to="/"><li className="text-base leading-10">Home</li></Link>
          <Link to="/about"><li className="text-base leading-10">About</li></Link>
          <Link to="/tour"><li className="text-base leading-10">Tours</li></Link>
        </ul>
      </div>
      <div>
        <ul className="">
          <li className="font-bold text-lg leading-11">Quick Links</li>
          <Link to="/"><li className="text-base leading-10">Gallery</li></Link>
          <Link to="/login"><li className="text-base leading-10">Login</li></Link>
          <Link to="/register"><li className="text-base leading-10">Register</li></Link>
        </ul>
      </div>
      <div>
        <ul className="">
          <li className="font-bold text-lg leading-11">Contact</li>
          <li className="text-base leading-10">Address: Patna, Bihar</li>
          <li className="text-base leading-10">Email: ujjwalanand678@gmail.com</li>
          <li className="text-base leading-10">Phone: +91 7903972407</li>
        </ul>
      </div>
      
    </div>
    <hr className="opacity-40 mt-10"/>
    <p className="text-gray-700 text-lg mt-10 mb-10 text-center">Copyright {new Date().getFullYear()}, Design and develop by UJJWAL ANAND. All rights reserved.</p>
    </>
  );
};

export default Footer;
