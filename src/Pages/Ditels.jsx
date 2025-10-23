import React, { Suspense, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLoaderData, useParams } from "react-router";
import ServiceCard from "./Ditelscard";
import { PropagateLoader } from "react-spinners";

const Ditels = () => {
  const data = useLoaderData();
  const { serviceId } = useParams();
  const [Data, setData] = useState({});
  useEffect(() => {
    const carddata = data.find((singl) => singl.serviceId == serviceId);
    setData(carddata);
  }, [data, serviceId]);
  console.log(Data);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <h1 className=" md:text-4xl text-2xl font-bold text-center p-4"> Animol Ditels</h1>
       <div className="p-4">
         <Suspense fallback={<PropagateLoader />}>
            <ServiceCard Data={Data}></ServiceCard>
        </Suspense>
       </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Ditels;
