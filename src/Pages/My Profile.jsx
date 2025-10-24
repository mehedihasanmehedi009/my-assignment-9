import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
 
import { Link } from 'react-router';

const MyProfile = () => {
    const {user,} =useContext(AuthContext)
         
    return (
         <div>
            
            {
                user ? <div className='flex justify-center min-h-screen items-center '>
             <div className="card bg-base-100 max-w-126 shadow-sm p-4">
  <figure className="px-10 pt-10">
    <img
      src={user?.photoURL}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{user?.displayName }</h2>
    <p className='md:text-2xl'>   {user?.email}</p>
    <div className="card-actions">
    <Link to="/" className="my-btn btn font-bold mt-1  mb-3 text-white hover:bg-blue-500 bg-purple-500">
            updet Profile
            </Link>
    </div>
  </div>
</div>
        </div>:    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-red-500 to-blue-500 text-white text-center">
      <h1 className="text-9xl font-extrabold">404</h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-white text-red-500 font-semibold rounded-full hover:bg-transparent hover:border-2 hover:border-white hover:text-white transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
            }
         </div>
    );
};

export default MyProfile;