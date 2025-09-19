import React from "react";
import travelLogo from "../assets/travel-3.png"
import { Link } from "react-router-dom";
const Header = () => {
  return (
     <>
    <nav className="flex items-center shadow-lg h-25 px-30 ">
        <div className="flex flex-6">
            <img src={travelLogo} alt="logo" className="h-38 relative top-7 " />
        </div>
        <div className="flex flex-6 text-xl text-slate-800 justify-evenly">
            <Link to="/">
            <h2 className="bg-amber-500 rounded-full font-medium text-white py-2 px-4">HOME</h2>
            </Link>
             <Link to="/">
            <h2 className="bg-amber-500 rounded-full font-medium text-white py-2 px-4">ABOUT</h2>
            </Link>
             <Link to="/">
            <h2 className="bg-amber-500 rounded-full font-medium text-white py-2 px-4">TOUR</h2>
            </Link>
             <Link to="/">
            <h2 className="bg-amber-500 rounded-full font-medium text-white py-2 px-4">LOGIN</h2>
            </Link>
             <Link to="/">
            <h2 className="bg-amber-500 rounded-full font-medium text-white py-2 px-4">REGISTER</h2>
            </Link>
        </div>
    </nav>
    </>
  )
 
};

export default Header;
