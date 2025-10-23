import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl  text-center font-bold"> Registar account </h1>
        <div className="card-body">
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
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />

            <button className="btn btn-neutral mt-4">Login</button>
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
        </div>
      </div>
    </div>
  );
};

export default Register;
