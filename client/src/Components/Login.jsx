import React from "react";
import login from "../assets/login.png";
import user from "../assets/user.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Login = () => {
  return (
    <>
      <div className=" mx-90 mt-30 w-[60%] mb-40">
        <div className="shadow-2xl grid grid-cols-2 gap-0">
          <div>
            <img src={login} alt="" />
          </div>
          <div className="flex flex-col bg-orange-300 text-center ">
            <img
              src={user}
              alt=""
              className="w-[27%] relative left-47 bottom-20"
            />
            <div className="relative bottom-10">
                <p className="text-white font-bold text-4xl mb-5">Login</p>
            <form action="" className="relative left-32 flex flex-col">
              <input
                type="email"
                placeholder="Email"
                className="bg-white text-xl px-3 py-2 rounded-lg w-[50%] mb-5 outline-hidden"
              />
              <input
                type="password"
                placeholder="Password"
                className="bg-white text-xl px-3 py-2 rounded-lg w-[50%] mb-5 outline-hidden"
              />
              <button className="bg-gray-800 hover:bg-gray-700  text-white text-xl p-2 rounded-lg w-[50%]">
                Login
              </button>
            </form>
            <p className="text-white text-xl font-bold mt-6">Don't Have an Account?</p>
            <Link>
              <p className="text-red-600 text-xl font-bold mt-4">Register</p>
            </Link>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
