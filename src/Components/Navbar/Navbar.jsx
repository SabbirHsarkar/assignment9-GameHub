import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 transition-all duration-300 ${
            isActive
              ? "text-white font-semibold border-b-2 border-purple-300"
              : "text-purple-200 hover:text-white"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-4 py-2 transition-all duration-300 ${
            isActive
              ? "text-white font-semibold border-b-2 border-purple-300"
              : "text-purple-200 hover:text-white"
          }`
        }
      >
        About
      </NavLink>

      <NavLink
        to="/features"
        className={({ isActive }) =>
          `px-4 py-2 transition-all duration-300 ${
            isActive
              ? "text-white font-semibold border-b-2 border-purple-300"
              : "text-purple-200 hover:text-white"
          }`
        }
      >
        Features
      </NavLink>

      <NavLink
        to="/community"
        className={({ isActive }) =>
          `px-4 py-2 transition-all duration-300 ${
            isActive
              ? "text-white font-semibold border-b-2 border-purple-300"
              : "text-purple-200 hover:text-white"
          }`
        }
      >
        Community
      </NavLink>

      <NavLink
        to="/pricing"
        className={({ isActive }) =>
          `px-4 py-2 transition-all duration-300 ${
            isActive
              ? "text-white font-semibold border-b-2 border-purple-300"
              : "text-purple-200 hover:text-white"
          }`
        }
      >
        Pricing
      </NavLink>

      <NavLink
        to="/faq"
        className={({ isActive }) =>
          `px-4 py-2 transition-all duration-300 ${
            isActive
              ? "text-white font-semibold border-b-2 border-purple-300"
              : "text-purple-200 hover:text-white"
          }`
        }
      >
        FAQ
      </NavLink>
    </>
  );

  return (
    <div className="flex justify-center mt-6 ">
      <div className="
        w-full 
        rounded-2xl 
        py-3 px-6 
        flex items-center justify-between 
        shadow-lg shadow-purple-900/40
        border border-purple-400/30
        bg-gradient-to-r from-[#3A0CA3] via-[#7209B7] to-[#B5179E]
      ">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-white font-semibold text-lg"
        >
          <img src="/logo.svg" alt="logo" className="w-6" />
          GameHUb
        </Link>

        {/* Menu Center */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks}
        </div>

        {/* Login Button */}
        <Link
          to="/login"
          className="px-5 py-2 rounded-lg 
          bg-white/20 backdrop-blur-md 
          text-white font-semibold 
          hover:bg-white/30 transition-all"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
