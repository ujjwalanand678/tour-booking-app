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
        <div className="flex flex-6 font-bold text-xl text-slate-800 justify-evenly">
            <Link to="/">
            <h2 className="">HOME</h2>
            </Link>
             <Link to="/">
            <h2 className="">ABOUT</h2>
            </Link>
             <Link to="/">
            <h2 className="">TOUR</h2>
            </Link>
             <Link to="/">
            <h2 className=" ">LOGIN</h2>
            </Link>
             <Link to="/">
            <h2 className="">REGISTER</h2>
            </Link>
        </div>
    </nav>
    </>
  )
 
};

export default Header;
