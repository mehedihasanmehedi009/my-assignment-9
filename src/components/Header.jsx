import React, { use } from "react";
import { GiJumpingDog } from "react-icons/gi";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

const Header = () => {
  const { user,setUser ,Loading } = use(AuthContext);

    
  const Singout=() =>{
    signOut(auth)
    .then(()=>{
      setUser(false)
      toast.success("SignOut success Full")
    })
    .catch((e)=>
    toast.error(e.massage)
    )
  }
 
  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left Section */}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
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
        <GiJumpingDog size={59} className="animate-pulse" />
      </div>

      {/* Center Section */}
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

      {/* Right Section */}
      <div className="navbar-end md:mr-20">
        {user ? (
          <div className="text-center flex gap-4     items-center space-y-2">
            {/* Profile Image with Hover Name */}
            <div className="relative group cursor-pointer">
              {/* <img src="https://lh3.googleusercontent.com/a/ACg8ocL-5bM7i3qb16gI7R2HUW0C9vepMUcptvL_kcrermIfaUGlGXU=s96-c" alt="" /> */}
              <img
                src={user.photoURL }
                className="h-12 w-12 rounded-full border-2 border-purple-500 transition-transform duration-300 group-hover:scale-105"
                alt="User"
              />
              <span className="absolute left-1/2 -translate-x-1/2 mt-2 text-sm font-semibold bg-purple-600 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                {user?.displayName || "User"}
           
              </span>
            </div>

            {/* Sign Out Button */}
            <Link to="/" onClick={Singout} className="my-btn btn font-bold mt-1  mb-3 text-white hover:bg-blue-500 bg-purple-500">
              Sign Out
            </Link>
          </div>
        ) : (
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
            <Link to={"/auth/login"}>Sign in</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
