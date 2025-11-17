import React, { useState, useContext } from "react";
import travelLogo from "../assets/travel-3.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <>
      <nav className="w-full sticky top-0 z-50 bg-white shadow-md px-4 sm:px-6 md:px-10 lg:px-20 flex items-center justify-between h-20">

        {/* Logo */}
        <Link to="/">
          <img
            src={travelLogo}
            alt="logo"
            className="h-12 sm:h-14 md:h-16 cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-lg font-semibold text-slate-800">

          <Link to="/">
            <h2 className="bg-amber-500 rounded-full cursor-pointer text-white py-2 px-5 hover:bg-amber-600 transition">
              HOME
            </h2>
          </Link>

          <Link to="/about">
            <h2 className="bg-amber-500 rounded-full cursor-pointer text-white py-2 px-5 hover:bg-amber-600 transition">
              ABOUT
            </h2>
          </Link>

          <Link to="/tour">
            <h2 className="bg-amber-500 rounded-full cursor-pointer text-white py-2 px-5 hover:bg-amber-600 transition">
              TOUR
            </h2>
          </Link>

          {user ? (
            <>
              <span className="bg-green-600 hover:bg-green-700 text-white py-2 px-5 rounded-full transition cursor-pointer">
                {user.name || "User"}
              </span>

              <button
                onClick={handleLogout}
                className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-5 rounded-full transition cursor-pointer"
              >
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <h2 className="bg-amber-500 rounded-full cursor-pointer text-white py-2 px-5 hover:bg-amber-600 transition">
                  LOGIN
                </h2>
              </Link>

              <Link to="/register">
                <h2 className="bg-amber-500 rounded-full cursor-pointer text-white py-2 px-5 hover:bg-amber-600 transition">
                  REGISTER
                </h2>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-slate-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-5 space-y-4 text-lg font-semibold text-slate-800 transition-all">

          <Link to="/" onClick={() => setOpen(false)}>
            <p className="py-2">Home</p>
          </Link>

          <Link to="/about" onClick={() => setOpen(false)}>
            <p className="py-2">About</p>
          </Link>

          <Link to="/tour" onClick={() => setOpen(false)}>
            <p className="py-2">Tour</p>
          </Link>

          {user ? (
            <>
              <p className="py-2 bg-green-600 text-white px-4 rounded-full inline-block">
                {user.name || "User"}
              </p>

              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="block w-full bg-orange-600 text-white py-2 rounded-full"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setOpen(false)}>
                <p className="py-2">Login</p>
              </Link>

              <Link to="/register" onClick={() => setOpen(false)}>
                <p className="py-2">Register</p>
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
