 import React, { useState, useEffect } from "react";

const images = [
  "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
  "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
  "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
  "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
  "https://img.daisyui.com/images/stock/photo-1581091215366-16f1e7e9c8a6.webp",
  "https://img.daisyui.com/images/stock/photo-1612831455542-8f927f45b45f.webp"
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 2000); // প্রতি 2 সেকেন্ডে slide
    return () => clearInterval(interval);
  }, []);

  const slideWidth = 100 / images.length;

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${current * slideWidth}%)`
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="h-[400px] sm:h-[500px] md:h-[600px] flex-shrink-0 bg-center bg-cover"
            style={{ width: `${slideWidth}%`, backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${current === idx ? "bg-white" : "bg-gray-400"}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
