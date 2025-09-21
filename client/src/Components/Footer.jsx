import React from "react";
import travel from "../assets/travel-3.png"
const Footer = () => {
  return (
    <div className="mx-40 grid grid-cols-4 mt-20">
      <div>
        <img src={travel} alt="" className="w-30"/>
        <p>
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
  );
};

export default Footer;
