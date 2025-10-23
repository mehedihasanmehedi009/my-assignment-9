 

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen items-center md:p-0 p-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <h1 className="text-3xl  text-center font-bold"> Login Your account </h1>
         <form className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p>Dont Have An Account ? <span></span></p>
      </div>
    </div>
  );
};

export default Login;
