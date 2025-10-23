import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const [hiden, setHiden] = useState(false);
  const hendels = () => {
    setHiden(!hiden);
  };
  return (
    <div className="flex justify-center min-h-screen items-center md:p-0 p-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl  text-center font-bold">
          {" "}
          Login Your account{" "}
        </h1>
        <form className="card-body">
          <fieldset name="email" className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <div className="relative">
              <label className="block text-sm mb-1">Password</label>
              <input
                type={hiden ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full bg-white/20  focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span
                onClick={hendels}
                className="absolute right-[8px] top-[36px] cursor-pointer z-50"
              >
                {hiden ? <FaEye size={15}/> : <IoEyeOff size={15}/>}
              </span>
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4  bg-gradient-to-r from-red-500 to-blue-500">
              Login
            </button>
          </fieldset>
          <button className="btn w-full  bg-white">
            <FcGoogle size={25} /> Continue With Google
          </button>
          <Link to="/auth/registar" className="text-center font-bold ">
            Dont Have An Account ?{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Registar
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
