import React, { useState } from "react";
import register from "../assets/register.png";
import user from "../assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../utils/ConfigBaseURL";

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handlechange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.name || !credentials.email || !credentials.password) {
      toast.error("Please fill all fields!");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "content-type": "application/json" },
      });

      const result = await res.json();

      if (res.ok) {
        toast.success(result.message || "User registered successfully!");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        toast.error(result.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Network error, please try again!");
      console.error(error);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={2500} />

      {/* MAIN WRAPPER */}
      <div className="w-full flex justify-center mt-20 mb-20 px-4">
        <div className="shadow-2xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl overflow-hidden max-w-4xl w-full">

          {/* Left Image */}
          <div className="hidden md:block">
            <img src={register} alt="register" className="w-full h-full object-cover" />
          </div>

          {/* Right Form Section */}
          <div className="flex flex-col items-center bg-orange-300 py-10 px-6">

            <img
              src={user}
              alt="user"
              className="w-28 mb-6"
            />

            <p className="text-white font-bold text-3xl mb-6">Register</p>

            <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col">

              <input
                type="text"
                placeholder="User Name"
                id="name"
                className="bg-white text-lg px-4 py-3 rounded-lg mb-4 outline-none"
                onChange={handlechange}
              />

              <input
                type="email"
                placeholder="Email"
                id="email"
                className="bg-white text-lg px-4 py-3 rounded-lg mb-4 outline-none"
                onChange={handlechange}
              />

              <input
                type="password"
                placeholder="Password"
                id="password"
                className="bg-white text-lg px-4 py-3 rounded-lg mb-4 outline-none"
                onChange={handlechange}
              />

              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-700 text-white text-lg py-3 rounded-lg mt-2 transition"
              >
                Register
              </button>
            </form>

            <p className="text-white text-lg font-semibold mt-6">
              Already have an account?
            </p>

            <Link to="/login">
              <p className="text-black text-xl font-bold mt-2 hover:underline">
                Login
              </p>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
