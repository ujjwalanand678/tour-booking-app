import React from "react";
import login from "../assets/login.png";
import user from "../assets/user.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { BASE_URL } from "../utils/ConfigBaseURL";

import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlechange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: { "content-type": "application/json" },
      });
      const result = await res.json();
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: result.data,
        token: result.token,
        role: result.role,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    console.log("Sending credentials:", credentials);
  };

  return (
    <>
      <div className=" mx-78 mt-30 w-[60%] mb-40">
        <div className="shadow-2xl grid grid-cols-2 gap-0">
          <div>
            <img src={login} alt="login" />
          </div>
          <div className="flex flex-col bg-orange-300 text-center ">
            <img
              src={user}
              alt=""
              className="w-[27%] relative left-38 bottom-20"
            />
            <div className="relative bottom-10">
              <p className="text-white font-bold text-3xl mb-5">Login</p>
              <form
                onSubmit={handleSubmit}
                className="relative left-26 flex flex-col"
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white text-lg px-3 py-2 rounded-lg w-[50%] mb-5 outline-hidden"
                  id="email"
                  onChange={handlechange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-white text-lg px-3 py-2 rounded-lg w-[50%] mb-5 outline-hidden"
                  id="password"
                  onChange={handlechange}
                />
                <button
                  type="submit"
                  className="bg-gray-800 hover:bg-gray-700  text-white text-lg p-2 rounded-lg w-[50%]"
                >
                  Login
                </button>
              </form>
              <p className="text-white text-xl font-bold mt-6">
                Don't Have an Account?
              </p>
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
