 import React from "react";

const Doctorcard = ({ care }) => {
  const { name, email, number, position, image, description } = care;

  return (
    <div className="w-full sm:w-80 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border overflow-hidden">
      {/* Doctor Image */}
      <div className="w-full h-64 bg-gray-100 flex justify-center items-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain object-top"
        />
      </div>

      {/* Doctor Info */}
      <div className="p-5 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-indigo-600 font-medium text-sm mt-1">{position}</p>

        <p className="text-gray-600 text-sm mt-3 line-clamp-3">{description}</p>

        {/* Contact Info */}
        <div className="mt-4 text-gray-700 text-sm">
          <p><span className="font-medium">📧</span> {email}</p>
          <p><span className="font-medium">📞</span> {number}</p>
        </div>

        {/* Button */}
        <button className="mt-5 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition-all">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Doctorcard;

