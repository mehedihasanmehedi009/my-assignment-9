import React, { useState, useEffect } from "react";

const images = [
  "https://i.ibb.co.com/cc54JYZZ/premium-photo-1661943672478-6161b9ea75cc.jpg",
  "https://i.ibb.co.com/rGxw7DHd/premium-photo-1661962453590-5653f2283a5f.jpg",
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden mt-5    rounded-2xl">
      <div
        className="flex w-[200%] h-full transition-transform duration-500"
        style={{ transform: `translateX(-${current * 50}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-1/2 h-full bg-center bg-cover relative"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col justify-center items-center text-center text-white px-4">
              <h1 className="text-2xl sm:text-3xl md:text-5xl mb-2 sm:mb-3 md:mb-4 font-bold">
                Central Animal Health Care
              </h1>
              <p className="text-sm sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6">
                Your pet’s wellness partner.
              </p>
              <a className="bg-orange-500 hover:bg-orange-600 px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-3 rounded text-sm sm:text-base md:text-lg">
                Book an Appointment
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
