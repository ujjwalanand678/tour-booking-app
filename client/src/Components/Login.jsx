import React, { useState, useContext } from "react";
import login from "../assets/login.png";
import user from "../assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { BASE_URL } from "../utils/ConfigBaseURL";
import { AuthContext } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlechange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      toast.error("Please fill all fields!");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: { "content-type": "application/json" },
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || "Invalid credentials!");
        return;
      }

      toast.success("Login Successful!");

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: result.data,
        token: result.token,
        role: result.role,
      });

      setTimeout(() => {
        navigate("/");
      }, 1200);

    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={2500} />

      <div className="w-full flex justify-center mt-20 mb-20 px-4">
        <div className="shadow-2xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl overflow-hidden max-w-4xl w-full">

          {/* Left Image */}
          <div className="hidden md:block">
            <img src={login} alt="login" className="w-full h-full object-cover" />
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center bg-orange-300 py-10 px-6">

            <img
              src={user}
              alt="user icon"
              className="w-28 mb-6"
            />

            <p className="text-white font-bold text-3xl mb-6">Login</p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col">

              <input
                type="email"
                placeholder="Email"
                className="bg-white text-lg px-4 py-3 rounded-lg mb-4 outline-none"
                id="email"
                onChange={handlechange}
              />

              <input
                type="password"
                placeholder="Password"
                className="bg-white text-lg px-4 py-3 rounded-lg mb-4 outline-none"
                id="password"
                onChange={handlechange}
              />

              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-700 text-white text-lg py-3 rounded-lg mt-2 transition"
              >
                Login
              </button>
            </form>

            <p className="text-white text-lg font-semibold mt-6">
              Don't have an account?
            </p>

            <Link to="/register">
              <p className="text-red-700 text-xl font-bold mt-2 hover:underline">
                Register
              </p>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
