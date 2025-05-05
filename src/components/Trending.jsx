import React from "react";
import { Link } from "react-router";

const Trending = ({ trendingApps }) => {
  const { id, thumbnail, name, rating, downloads } = trendingApps;

  return (
    <div className="card bg-base-100 shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm mx-auto rounded-2xl">
      <figure className="px-4 pt-4">
        <img
          src={thumbnail}
          alt={name}
          className="rounded-full w-[130px] h-[130px] object-cover mx-auto shadow-lg"
        />
      </figure>
      <div className="card-body items-center text-center space-y-4 p-6">
        <h2 className="card-title text-xl font-bold text-indigo-600 hover:text-indigo-800 transition-all duration-300">
          {name}
        </h2>
        <p className="text-sm text-gray-700">⭐ Rating: {rating}</p>
        <p className="text-sm text-gray-700">
          📥 Downloads: {downloads.toLocaleString()}
        </p>
        <Link
          to={`/apps-details/${id}`}
          className="btn btn-primary py-2 px-6 rounded-full text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 transition-all duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Trending;
