import React from "react";
import travel from "../assets/travel-3.png"
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
    <div className="mx-40 grid grid-cols-4 mt-20 gap-10" >
      <div>
        <img src={travel} alt="" className="w-40 relative left-12" />
        <p className="text-gray-700 text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, natus!
        </p>
      </div>
      <div>
        <ul className="">
          <li className="font-bold text-2xl leading-16">Discover</li>
          <Link to="/"><li className="text-xl leading-12">Home</li></Link>
          <Link to="/about"><li className="text-xl leading-12">About</li></Link>
          <Link to="/tour"><li className="text-xl leading-12">Tours</li></Link>
        </ul>
      </div>
      <div>
        <ul className="">
          <li className="font-bold text-2xl leading-16">Quick Links</li>
          <Link to="/"><li className="text-xl leading-12">Gallery</li></Link>
          <Link to="/login"><li className="text-xl leading-12">Login</li></Link>
          <Link to="/register"><li className="text-xl leading-12">Register</li></Link>
        </ul>
      </div>
      <div>
        <ul className="">
          <li className="font-bold text-2xl leading-16">Contact</li>
          <li className="text-xl leading-12">Address: Patna, Bihar</li>
          <li className="text-xl leading-12">Email: ujjwalanand678@gmail.com</li>
          <li className="text-xl leading-12">Phone: +91 7903972407</li>
        </ul>
      </div>
      
    </div>
    <hr className="opacity-40 mt-10"/>
    <p className="text-gray-700 text-xl mt-10 mb-10 text-center">Copyright {new Date().getFullYear()}, Design and develop by UJJWAL ANAND. All rights reserved.</p>
    </>
  );
};

export default Footer;
