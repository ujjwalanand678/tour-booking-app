import React from "react";
import travel from "../assets/travel-3.png"
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
          <li className="text-xl leading-12">Home</li>
          <li className="text-xl leading-12">About</li>
          <li className="text-xl leading-12">Tours</li>
        </ul>
      </div>
      <div>
        <ul className="">
          <li className="font-bold text-2xl leading-16">Quick Links</li>
          <li className="text-xl leading-12">Gallery</li>
          <li className="text-xl leading-12">Login</li>
          <li className="text-xl leading-12">Register</li>
        </ul>
      </div>
      <div>
        <ul className="">
          <li className="font-bold text-2xl leading-16">Contact</li>
          <li className="text-xl leading-12">Address:</li>
          <li className="text-xl leading-12">Email:</li>
          <li className="text-xl leading-12">Phone:</li>
        </ul>
      </div>
      
    </div>
    <hr className="opacity-40 mt-10"/>
    <p className="text-gray-700 text-xl mt-10 mb-10 text-center">Copyright {new Date().getFullYear()}, Design and develop by UJJWAL ANAND. All rights reserved.</p>
    </>
  );
};

export default Footer;
