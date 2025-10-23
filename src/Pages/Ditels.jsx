import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLoaderData, useParams } from "react-router";

const Ditels = () => {
    const data = useLoaderData()
    const{serviceId} = useParams()
    console.log(data,serviceId)
  return <div>
    <header>
        <Header></Header>
    </header>
    <main>
      <h1>mehedi</h1>
    </main>
   <footer>
    <Footer></Footer>
   </footer>
  </div>;
};

export default Ditels;
