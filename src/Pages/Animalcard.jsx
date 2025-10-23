import { useState, useEffect } from "react";
import Card from "./Card";

const Animalcard = () => {
  const [catagorycard, setCatagorycard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Dog.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch JSON");
        return res.json();
      })
      .then((data) => {
        setCatagorycard(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-center text-4xl font-bold p-4">
        Popular Winter Care Services
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5">
        {catagorycard.map((card) => (
          <Card key={card.serviceId} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Animalcard;
