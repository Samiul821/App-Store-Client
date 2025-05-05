import React from "react";

const AppCard = ({ app }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
    <img
      src={app.thumbnail}
      alt={app.name}
      className="w-full h-56 object-cover rounded-t-lg"
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{app.name}</h3>
      <p className="text-sm text-gray-500 mb-3">{app.developer}</p>
      <p className="text-sm text-gray-600 mb-4">{app.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-yellow-500 font-semibold text-lg">⭐ {app.rating}</span>
        <span className="text-sm text-gray-500 uppercase tracking-wide">{app.category}</span>
      </div>
    </div>
  </div>
  );
};

export default AppCard;
