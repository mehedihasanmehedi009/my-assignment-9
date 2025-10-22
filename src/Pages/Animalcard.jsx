import { use } from "react";
import Card from "./Card";

const catagory = fetch("/Dog.json").then((res) => res.json());
const Animalcard = () => {
  const catagorycard = use(catagory);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1  p-4 gap-5 ">
      {catagorycard.map((card) => (
        <Card key={card.serviceId} card={card}></Card>
      ))}
    </div>
  );
};

export default Animalcard;
