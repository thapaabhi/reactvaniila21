import React, { useContext, useState } from "react";
import { DataContext } from "./data";
import SlothCard from "../../components/card";

export default function Categories() {
  const { data } = useContext(DataContext);
  const [bata, setBata] = useState(data);

  const one = () => {
    setBata(data);
  };

  const two = () => {
    setBata(data.filter((element) => element.name === "polar"));
  };

  const three = () => {
    setBata(data.filter((element) => element.name !== "polar"));
  };

  return (
    <>
      <div className="flex justify-between my-9 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {bata.map((item, abc) => (
            <div key={abc} className="p-10 w-[1/3]">
              <SlothCard
                img={item.img}
                name={item.name}
                place={item.place}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
