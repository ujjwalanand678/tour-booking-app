import React from "react";
import maletourist from "../assets/male-tourist.png"
const Subscribe = () => {
  return (
  <div className="grid grid-cols-2 px-40 bg-blue-200 items-center">
    <div>
        <p className="text-2xl font-medium w-142 mb-6">Subscribe now for usefull travelling information.</p>
        <form action="" className="bg-white rounded-lg text-lg w-150 ">
            <input type="text" placeholder="Enter Your Email" className="outline-hidden px-3"/>
            <button type="submit" className="bg-amber-500 text-white py-2 px-4 rounded-lg relative left-60 my-3  "> Subscribe</button>
        </form>
        <p className="text-gray-700 text-lg mt-9 w-160">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia odio iure quasi! Deserunt, similique in!</p>
    </div>
    <div>
        <img src={maletourist} alt="pic pf turist" />
    </div>
    </div>);
};

export default Subscribe;
