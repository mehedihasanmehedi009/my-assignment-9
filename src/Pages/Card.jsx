import React from "react";
import { FaStar } from "react-icons/fa";

const Card = ({ card }) => {
  const { serviceName, price, rating, image, description, category } = card;

  return (
    <div className="w-ful mt-8 bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition-all  hover:scale-105  ">
      {/* Image */}
      <img
        src={image}
        alt={serviceName}
        className="w-full h-56 object-cover transition-all  hover:scale-120 "
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{serviceName}</h2>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-sm" />
          ))}
          <span className="text-gray-700 ml-2 text-sm">{rating}</span>
        </div>

        <p className="text-gray-900 font-semibold mt-2">${price}</p>

        {/* Button */}
        <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md transition-all">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
