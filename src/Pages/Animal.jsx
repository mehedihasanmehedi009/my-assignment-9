 import React, { useState, useEffect } from "react";

const images = [
 
  "https://i.ibb.co/cc54JYZZ/premium-photo-1661943672478-6161b9ea75cc.jpg",
  "https://i.ibb.co/rGxw7DHd/premium-photo-1661962453590-5653f2283a5f.jpg",
  
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <section className="relative w-full overflow-hidden mt-6 rounded-2xl shadow-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative bg-black"
            style={{ height: "400px" }}
          >
            {/* Image that keeps faces visible */}
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover object-center sm:object-[center_top] md:object-[center_20%]"
            />

            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4 backdrop-blur-[2px]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">
                Central Animal Health Care
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 opacity-90">
                Your pet’s wellness partner.
              </p>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base shadow-lg transition-all duration-300"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              current === index ? "bg-orange-500 w-6" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
    </div>
  );
};

export default HeroSlider;
