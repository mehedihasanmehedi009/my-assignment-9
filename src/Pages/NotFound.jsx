import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-red-500 to-blue-500 text-white text-center">
      <h1 className="text-9xl font-extrabold">404</h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-white text-red-500 font-semibold rounded-full hover:bg-transparent hover:border-2 hover:border-white hover:text-white transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
