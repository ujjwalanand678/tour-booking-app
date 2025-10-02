import React from "react";
import register from "../assets/register.png";
import user from "../assets/user.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../utils/ConfigBaseURL";

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: undefined,
    email: undefined,
    password: undefined,
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "content-type": "application/json" },
      });
      const result = await res.json();
      if (res.ok) {
        toast.success(result.message || "User registered successfully!");
        navigate("/login");
      } else {
        toast.error(result.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Network error, please try again!");
      console.error(error);
    }
  };

  const handlechange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  // console.log(credentials);
  return (
    <>
      <div className=" mx-90 mt-30 w-[60%] mb-40">
        <div className="shadow-2xl grid grid-cols-2 gap-0">
          <div>
            <img src={register} alt="" />
          </div>
          <div className="flex flex-col bg-orange-300 text-center ">
            <img
              src={user}
              alt=""
              className="w-[27%] relative left-47 bottom-20"
            />
            <div className="relative bottom-10">
              <p className="text-white font-bold text-4xl mb-5">Register</p>
              <form
                className="relative left-32 flex flex-col "
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="User Name"
                  className="bg-white text-xl px-3 py-2 rounded-lg w-[50%] mb-5 outline-hidden"
                  id="name"
                  onChange={handlechange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white text-xl px-3 py-2 rounded-lg w-[50%] mb-5 outline-hidden"
                  id="email"
                  onChange={handlechange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-white text-xl px-3 py-2 rounded-lg w-[50%] mb-5 outline-hidden"
                  id="password"
                  onChange={handlechange}
                />
                <button
                  type="submit"
                  className="bg-gray-800 hover:bg-gray-700  text-white text-xl p-2 rounded-lg w-[50%]"
                >
                  Register
                </button>
              </form>
              <p className="text-white text-xl font-bold mt-6">
                Already have an account?
              </p>
              <Link to="/login">
                <p className="text-black text-xl font-bold mt-4">Login</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
