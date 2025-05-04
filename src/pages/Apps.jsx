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
      {/* Trending Apss */}
      <div className="border p-5">
        <h2>Trending Apps</h2>
        <div className="flex gap-3">
          {trendingApps.map((trendingApps) => (
            <Trending
              key={trendingApps.id}
              trendingApps={trendingApps}
            ></Trending>
          ))}
        </div>
      </div>
      {/* Health */}
      <div className="border p-5">
        <h2>Health Apps</h2>
        <div className="flex gap-5">
          {healthApps.map((healthApp) => (
            <Healthcare key={healthApp.id} healthApp={healthApp}></Healthcare>
          ))}
        </div>
      </div>
      {/* Productivity */}
      <div className="border p-5">
        <h2>Productivity Apss</h2>
        <div className="flex gap-5">
          {productivityApps.map((productivityApps) => (
            <Productivity
              key={productivityApps.id}
              productivityApps={productivityApps}
            ></Productivity>
          ))}
        </div>
      </div>
      {/* Educational Apps */}
      <div className="border p-5">
        <h2>Educational Apps</h2>
        <div className="flex gap-5">
          {educationalApps.map((educationalApps) => (
            <Educational
              key={educationalApps.id}
              educationalApps={educationalApps}
            ></Educational>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
