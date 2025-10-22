import React, { use } from 'react';
import Doctorcard from './Doctorcard';
const doctor =fetch("Doctor.json").then((res)=>res.json())
const Doctor = () => {
    const Catagory = use(doctor)
    return (
        <div>
           <h1 className='text-2xl text-center font-bold'>Health  Care Provider</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1  p-4 gap-5 ">
             {
      Catagory.map((care)=>(<Doctorcard key={care.id} care={care}></Doctorcard>))
            } 
          </div>
        </div>
    );
};

export default Doctor;