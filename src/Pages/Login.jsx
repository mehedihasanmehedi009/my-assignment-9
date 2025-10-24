import { useContext, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
import {
 
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
 
} from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
 const Provider = new GoogleAuthProvider()
const Login = () => {
  const { setUser,  signinfun } = useContext(AuthContext);
        const loction = useLocation()
         const naviget = useNavigate()
        console.log(loction)
         
  const [hiden, setHiden] = useState(false);
  const emailRef = useRef(null);
  const hendellogin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log({ email, password });
    signinfun(email, password)
     .then((res) => {
    console.log(res);
         naviget(loction.state)
    toast.success("Signin success ✅");
  })
  .catch((e) => {
    console.log(e.code);
    if (
      e.code === "auth/invalid-credential" ||
      e.code === "auth/wrong-password" ||
      e.code === "auth/user-not-found"
    ) {
      toast.error("Your password is invalid ❌");
    } else {
      toast.error("Login failed, please try again");
    }
  });
  };

  const hendelegoggle = ()=>{
   signInWithPopup(auth,Provider)
   .then((res)=>{
    console.log(res.user)
       toast.success("Google sigin success")
   })
   .catch((e)=>{
    toast.error(e.message)
   })

  }

 
  const hendelforget = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then((res) => {
        console.log(res);
        toast.success("check Your email to reset password");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const hendel = () => {
    setHiden(!hiden);
  };
   return (
    <div className="flex justify-center min-h-screen items-center md:p-0 p-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl  text-center font-bold">
          {" "}
          Login Your account{" "}
        </h1>
        <form onSubmit={hendellogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              ref={emailRef}
              className="input"
              placeholder="Email"
            />
            <div className="relative">
              <label className="block text-sm mb-1">Password</label>
              <input
                type={hiden ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full bg-white/20  focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span
                onClick={hendel}
                className="absolute right-[8px] top-[36px] cursor-pointer z-50"
              >
                {hiden ? <FaEye size={15} /> : <IoEyeOff size={15} />}
              </span>
            </div>
            <div>
              <a onClick={hendelforget} className="link link-hover">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="btn btn-neutral mt-4  bg-gradient-to-r from-red-500 to-blue-500"
            >
              Login
            </button>
          </fieldset>
          <button
            onClick={hendelegoggle}
            type="button"
            className="btn w-full  bg-white"
          >
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
