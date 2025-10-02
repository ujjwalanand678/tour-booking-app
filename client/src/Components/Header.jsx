import React from "react";
import travelLogo from "../assets/travel-3.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Header = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <>
      <nav className="flex items-center shadow-lg h-24 px-30 sticky top-0 z-50 bg-white ">
        <div className="flex flex-6">
          <img src={travelLogo} alt="logo" className="h-38 relative top-7 " />
        </div>
        <div className="flex flex-6 text-xl text-slate-800 justify-evenly">
          <Link to="/">
            <h2 className="bg-amber-500 rounded-full font-medium text-white py-2 px-4 hover:bg-amber-600 transition">
              HOME
            </h2>
          </Link>
          <Link to="/about">
            <h2 className="bg-amber-500 rounded-full font-medium text-white py-2 px-4 hover:bg-amber-600 transition">
              ABOUT
            </h2>
          </Link>
          <Link to="/tour">
            <h2 className="bg-amber-500 rounded-full font-medium text-white py-2 px-4 hover:bg-amber-600 transition">
              TOUR
            </h2>
          </Link>
          {/* Conditional Auth Buttons */}
          {user ? (
            <>
              <span className="flex items-center font-bold text-slate-700">
                {user.name || "User"}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 rounded-full font-medium text-white py-2 px-4 hover:bg-red-600 transition"
              >
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <h2 className="bg-amber-500 rounded-full font-medium text-white py-2 px-4 hover:bg-amber-600 transition">
                  LOGIN
                </h2>
              </Link>
              <Link to="/register">
                <h2 className="bg-amber-500 rounded-full font-medium text-white py-2 px-4 hover:bg-amber-600 transition">
                  REGISTER
                </h2>
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
