import React, { useState } from "react";

const PlayerCard = ({ name, img, statistics }) => {
  const [displayStats, setDisplayStats] = useState(true);

  return (
    <div
      className="max-w-sm bg-white  rounded justify-center overflow-hidden shadow-lg"
      onClick={() => setDisplayStats(!displayStats)}
    >
      {displayStats ? (
        <img className="w-full rounded h-96 scale-100 hover:scale-75" src={img} alt={name} />
      ) : (
        <ul>
          {statistics.map((item) => {
            return (
              <li className="flex justify-center text-lg my-10 text-center ">
              🏀{item}
              </li>
            );
          })}
        </ul>
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-center mb-2">
        <a  href={`https://en.wikipedia.org/wiki/${name}`} >{name}</a>
        
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
