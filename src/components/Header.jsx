import React from "react";
import { GiJumpingDog } from "react-icons/gi";
import MyLink from "../../../-9/capcha-1/src/component/MyLink/MyLink";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start ml-5 md:ml-20">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink className="text-[15px] font-bold" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="text-[15px] font-bold" to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink className="text-[15px] font-bold" to="/myprofile">
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>

        <GiJumpingDog size={59} className=" animate-pulse    " />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className="text-[20px] font-bold" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="text-[20px] font-bold" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="text-[20px] font-bold" to="/myprofile">
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end  md:mr-20 ">
        <button
          className="btn font-bold text-[20px]
      "
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Header;
