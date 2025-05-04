import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Healthcare from "../components/Healthcare";
import Productivity from "../components/Productivity";
import Educational from "../components/Educational";
import Trending from "../components/Trending";

const Apps = () => {
  const data = useLoaderData();

  const [healthApps, setHealthApps] = useState([]);
  const [productivityApps, setProductivityApps] = useState([]);
  const [educationalApps, setEducationalApps] = useState([]);
  const [trendingApps, setTrendingApps] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const health = data.filter((app) => app.category === "Health");
      const productivity = data.filter(
        (app) => app.category === "Productivity"
      );
      const education = data.filter((app) => app.category === "Education");
      const trending = [...data]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

      setHealthApps(health);
      setProductivityApps(productivity);
      setEducationalApps(education);
      setTrendingApps(trending);
    }
  }, [data]);

  return (
    <div className="space-y-5">
      {/* Trending Apps */}
      <section className="backdrop-blur-md bg-purple-100/30 border border-purple-300 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-purple-700 mb-6 border-b border-purple-300 pb-2 flex items-center gap-2">
          <span>🔥</span> Trending Apps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {trendingApps.map((trendingApps) => (
            <Trending
              key={trendingApps.id}
              trendingApps={trendingApps}
            ></Trending>
          ))}
        </div>
      </section>
      {/* Health */}
      <section className="backdrop-blur-md bg-green-100/30 border border-green-300 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-green-700 mb-6 border-b border-green-300 pb-2 flex items-center gap-2">
          <span>💪</span> Health Apps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {healthApps.map((healthApp) => (
            <Healthcare key={healthApp.id} healthApp={healthApp}></Healthcare>
          ))}
        </div>
      </section>
      {/* Productivity */}
      <section className="backdrop-blur-md bg-blue-100/30 border border-blue-300 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b border-blue-300 pb-2 flex items-center gap-2">
          <span>🛠️</span> Productivity Apps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {productivityApps.map((productivityApps) => (
            <Productivity
              key={productivityApps.id}
              productivityApps={productivityApps}
            ></Productivity>
          ))}
        </div>
      </section>
      {/* Educational Apps */}
      <section className="backdrop-blur-md bg-orange-100/30 border border-orange-300 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-orange-700 mb-6 border-b border-orange-300 pb-2 flex items-center gap-2">
          <span>📚</span> Educational Apps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {educationalApps.map((educationalApps) => (
            <Educational
              key={educationalApps.id}
              educationalApps={educationalApps}
            ></Educational>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Apps;
