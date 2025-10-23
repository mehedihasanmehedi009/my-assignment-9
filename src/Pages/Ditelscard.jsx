import { Link } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";

 

const ServiceCard = ({ Data }) => {
  const { serviceName, description, image, category } = Data;

  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all fields!");
      return;
    }
    toast.success("Service booked successfully!");
    setFormData({ name: "", email: "" });
  };

  return (
    <div>
      {/* Service Card */}
      <div className="md:w-[900px] p-5 mx-auto bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col">
        {/* Image Section */}
        <div className="w-full h-80 sm:h-96 md:h-[500px] bg-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={serviceName}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow space-y-3">
          <span className="text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-red-500 to-blue-500 px-3 py-1 rounded-full w-fit">
            {category}
          </span>

          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            {serviceName}
          </h2>

          <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
            {description}
          </p>

          <Link
            to="/"
            className="btn mt-auto bg-gradient-to-r from-blue-500 to-red-500 text-white py-2 rounded-xl hover:opacity-90 transition text-sm sm:text-base"
          >
            Go Back
          </Link>
        </div>
      </div>

      {/* Book Service Form */}
      <div className="flex justify-center mt-6 p-5">
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
          <h3 className="text-xl font-semibold mb-4">Book This Service</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-red-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
