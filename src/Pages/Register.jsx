import { createUserWithEmailAndPassword } from "firebase/auth/web-extension";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
const Register = () => {
  const [hiden, setHiden] = useState(false);
  const HedelRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    //   console.log("mehedi",{email,password})
    if (password.length < 6) {
      toast.error("password up to 6 digit");
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error(" at least one lowercase letter.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("at least one uppercase letter");
      return;
    }

    if (!/[0-9]/.test(password)) {
      console.error("Error: The string must contain at least one number.");
    }
    // if (!/[A-Z]/.test(name)) {
    //   toast.error("at least one uppercase letter");
    //   return
    // }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        toast.success("register success");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  const hendels = () => {
    setHiden(!hiden);
  };
  return (
    <div className="flex justify-center min-h-screen items-center ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl  text-center font-bold"> Registar account </h1>
        <form onSubmit={HedelRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
            />
            <label className="label">Photo</label>
            <input
              type="photo"
              name="photo"
              className="input"
              placeholder="Your URL"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <div className="relative">
              <label className="block text-sm mb-1">Password</label>
              <input
                type={hiden ? "textr" : "password"}
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full bg-white/20  focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span
                onClick={hendels}
                className="absolute right-[8px] top-[36px] cursor-pointer z-50"
              >
                {hiden ? <FaEye size={15} /> : <IoEyeOff  size={15}/>}
              </span>
            </div>
            <button className="btn btn-neutral mt-4  bg-gradient-to-r from-red-500 to-blue-500">
              Login
            </button>
            <Link
              to="/auth/login"
              className=" text-[15px] text-center font-bold "
            >
              Already have account ?
              <span className="text-blue-600 underline cursor-pointer">
                Login
              </span>
            </Link>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
