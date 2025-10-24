import React, {  useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRout = ({children}) => {
    const  {user ,Loading}=useContext(AuthContext)
         const loction = useLocation()
         console.log(loction)
    if(Loading){
        return <div className='flex justify-center mx-auto min-h-screen  items-center'>
<span className="loading loading-infinity loading-xl"></span>
        </div>
    } 
        // console.log(user)
    if(user && user?.email){
         return children
    }
    return <Navigate state={loction.pathname}  to="/auth/login"></Navigate>
};

export default PrivetRout;