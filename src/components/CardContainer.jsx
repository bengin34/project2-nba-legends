import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import { data } from "../utils/data";

const CardContainer = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const filterFunc = (search) => {
    const inputValue = value.trim().replace(/[^a-zA-Z ]/g, '').toLowerCase();
    if (search.name.toLowerCase().includes(inputValue)) {
      return search;
    }
  }

  return (
    <div>
      <div className="text-center my-5">
        <input
          type="search"
          onChange={handleChange}
          className="w-2/4 py-2 font-large text-center rounded-t "
        />
      </div>
      {value ? (
        <div className="container h-full mx-auto p-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 rounded-md min-h-[300px]">
          {data.filter(filterFunc).map(({ name, img, statistics }) => {
            return (
              <PlayerCard
                key={name}
                name={name}
                img={img}
                statistics={statistics}
                

              />
            );
          })}
        </div>
      ) : (
        <div className="container h-full mx-auto p-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 rounded-md min-h-[300px]">
          {data.map(({ name, img, statistics }) => {
            return (
              <PlayerCard
                key={name}
                name={name}
                img={img}
                statistics={statistics}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CardContainer;