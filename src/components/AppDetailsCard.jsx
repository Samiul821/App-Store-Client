import React, { useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const AppDetailsCard = ({ apps }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");
  const [reviews, setReviews] = useState([]);
  const [isInstalled, setIsInstalled] = useState(false);

  const handleSubmit = () => {
    const numericRating = Number(rating);
    if (!reviewText || numericRating < 1 || numericRating > 5) {
      alert("Please enter a review and a rating between 1 and 5.");
      return;
    }

    const newReview = {
      comment: reviewText,
      rating: numericRating,
    };

    setReviews([newReview, ...reviews]);
    setReviewText("");
    setRating("");
  };

  const handleInstallToggle = () => {
    setIsInstalled((prev) => !prev);
  };

  return (
    <motion.div
      className="max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 border mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col lg:gap-5 lg:flex-row p-5">
        {/* Left Side */}
        <div className="lg:w-1/2">
          <img
            src={apps.banner}
            alt="Banner"
            className="h-40 w-full object-cover"
          />
          <div className="py-4 flex items-center gap-4">
            <img
              src={apps.thumbnail}
              alt="Thumbnail"
              className="w-16 h-16 rounded-xl object-cover shadow"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{apps.name}</h2>
              <p className="text-sm text-gray-500">{apps.developer}</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-4">{apps.description}</p>

          <ul className="list-disc pl-5 text-sm text-gray-700 mb-4">
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
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 py-6 lg:py-0">
          {Array.isArray(apps.reviews) && apps.reviews.length > 0 && (
            <div className="mb-4 p-3 bg-gray-100 rounded-xl">
              <p className="text-gray-800 text-sm font-medium">
                "{apps.reviews[0].comment}"
              </p>
              <p className="text-xs text-gray-500 mt-1">
                – {apps.reviews[0].user}
              </p>
            </div>
          )}

          {/* Download Button */}
          <button
            onClick={handleInstallToggle}
            className={`cursor-pointer w-full py-2 px-4 rounded-xl transition duration-300 ${
              isInstalled
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isInstalled ? "Uninstall" : "Install"}
          </button>

          {/* Review Input */}
          {isInstalled && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Submit Your Review</h3>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review..."
                className="w-full border rounded-md p-2 mb-2 text-sm"
              />
              <input
                type="number"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                placeholder="Rating (1-5)"
                className="w-full border rounded-md p-2 mb-2 text-sm"
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition duration-300"
              >
                Submit Review
              </button>
            </div>
          )}

          {/* Display User Reviews */}
          {reviews.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-md font-semibold mb-1">User Reviews</h4>
              {reviews.map((r, i) => (
                <div key={i} className="bg-gray-50 p-3 rounded-lg border">
                  <p className="text-sm text-gray-800 font-medium">
                    "{r.comment}"
                  </p>
                  <p className="text-xs text-gray-500">
                    Rating: {r.rating} / 5
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AppDetailsCard;
