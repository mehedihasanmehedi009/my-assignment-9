 import { Link } from "react-router";

const ServiceCard = ({ Data }) => {
  const {
    serviceName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = Data;

  return (
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

        <div className="flex items-center justify-between text-sm text-gray-700 pt-2">
          <p>
            💰 <span className="font-semibold">${price}</span>
          </p>
          <p>⭐ {rating}</p>
        </div>

        <div className="text-xs sm:text-sm text-gray-600">
          <p>
            Provider: <span className="font-medium">{providerName}</span>
          </p>
          <p>
            Email:{" "}
            <a
              href={`mailto:${providerEmail}`}
              className="text-blue-500 underline break-all"
            >
              {providerEmail}
            </a>
          </p>
        </div>

        <p className="text-xs sm:text-sm text-gray-700 mt-2">
          🕒 Slots Available:{" "}
          <span className="font-medium">{slotsAvailable}</span>
        </p>

        <Link
          to="/"
          className="btn mt-auto bg-gradient-to-r from-blue-500 to-red-500 text-white py-2 rounded-xl hover:opacity-90 transition text-sm sm:text-base"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
