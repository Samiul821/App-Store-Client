import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { toast } from "react-toastify";

const AppsSlider = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        const latestApps = data.slice(0, 3);
        setApps(latestApps);
      })
      .catch((err) => toast.error("Failed to load apps:", err));
  }, []);

  return (
    <div className="w-10/12 mx-auto mt-10">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        interval={3000}
      >
        {apps.map((app) => (
          <div key={app.id}>
            <img className="h-[300px] md:h-[400px] lg:h-[600px]" src={app.banner} alt={app.name} />
            <div className="legend">
              <h3 className="text-xl font-bold">{app.name}</h3>
              <p>{app.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AppsSlider;
