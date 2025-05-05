import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const AppDetailsCard = ({ apps }) => {
  return (
    <motion.div
      className="max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 border"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
    >
      <img
        src={apps.banner}
        alt="Banner"
        className="h-40 w-full object-cover"
      />
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={apps.thumbnail}
            alt="Thumbnail"
            className="w-12 h-12 rounded-xl object-cover shadow"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">{apps.name}</h2>
            <p className="text-sm text-gray-500">{apps.developer}</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-3">{apps.description}</p>

        <ul className="list-disc pl-5 text-sm text-gray-700 mb-3">
          {Array.isArray(apps.features) &&
            apps.features.map((feature, i) => <li key={i}>{feature}</li>)}
        </ul>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            {apps.rating}
          </span>
          <span>{(apps.downloads / 1000000).toFixed(1)}M downloads</span>
        </div>

        {Array.isArray(apps.reviews) && apps.reviews.length > 0 && (
          <div className="mt-4 p-3 bg-gray-100 rounded-xl">
            <p className="text-gray-800 text-sm font-medium">
              "{apps.reviews[0].comment}"
            </p>
            <p className="text-xs text-gray-500 mt-1">
              – {apps.reviews[0].user}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AppDetailsCard;
