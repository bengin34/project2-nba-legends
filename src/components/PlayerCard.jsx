import React, { useState } from "react";

const PlayerCard = ({ name, img, statistics }) => {
  const [displayStats, setDisplayStats] = useState(false);

  return (
    <div class="max-w-sm rounded justify-center overflow-hidden shadow-lg">
      <img class="w-full h-96" src={img} alt={name} />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{name}</div>
      </div>
    </div>
  );
};

export default PlayerCard;
