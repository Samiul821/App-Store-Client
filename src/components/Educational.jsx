import React from "react";

const Educational = ({ educationalApps }) => {
  const { thumbnail, name, rating, downloads } = educationalApps;

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm mx-auto">
      <figure className="px-4 pt-4">
        <img
          src={thumbnail}
          alt={name}
          className="rounded-xl w-[130px] h-[130px] object-cover"
        />
      </figure>
      <div className="card-body items-center text-center space-y-2">
        <h2 className="card-title text-lg font-semibold text-blue-600">
          {name}
        </h2>
        <p className="text-sm text-gray-600">⭐ Rating: {rating}</p>
        <p className="text-sm text-gray-600">
          📥 Downloads: {downloads.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Educational;
