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
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[550px] sm:h-[650px] md:h-[750px] overflow-hidden mt-5 rounded-2xl bg-black">
      <div
        className="flex w-[200%] h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 50}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-1/2 h-full bg-center bg-no-repeat bg-contain relative flex items-center justify-center"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-lg">
                Central Animal Health Care
              </h1>
              <p className="text-base sm:text-lg md:text-2xl mb-6">
                Your pet’s wellness partner.
              </p>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg shadow-lg"
              >
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
