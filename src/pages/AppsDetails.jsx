import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoaderData, useParams } from "react-router";
import AppDetailsCard from "../components/AppDetailsCard";

const AppsDetails = () => {
  const data = useLoaderData();
  const {id} = useParams();
  const [apss, setApss] = useState({});

//   console.log(data,id,apss);

  useEffect(() => {
    const appsDetails = data.find(singleApp => singleApp.id == id)
    setApss(appsDetails) 
  }, [data,id])

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-285px)] w-11/12 lg:w-10/12 mx-auto my-6">
        <h2 className="text-center text-2xl font-semibold mb-5">Apps Details</h2>
        <AppDetailsCard apps={apss}></AppDetailsCard>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default AppsDetails;
