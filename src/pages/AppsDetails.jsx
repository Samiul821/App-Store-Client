import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoaderData, useParams } from "react-router";
import AppDetailsCard from "../components/AppDetailsCard";
import { Helmet } from "react-helmet-async";

const AppsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [apps, setApps] = useState({});

  useEffect(() => {
    const appsDetails = data.find((singleApp) => singleApp.id == id);
    setApps(appsDetails);
  }, [data, id]);

  return (
    <div>
      <Helmet>
        <title>Details | App Store</title>
      </Helmet>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-285px)] w-11/12 lg:w-10/12 mx-auto my-6 flex justify-center">
        <section>
          <h2 className="text-center text-2xl font-semibold mb-5">
            Apps Details
          </h2>
          <AppDetailsCard apps={apps}></AppDetailsCard>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default AppsDetails;
