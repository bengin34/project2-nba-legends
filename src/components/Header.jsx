import React from "react";
import nbaLogo from "../assets/nba-logo.png";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center my-5 ">
        <img className="mx-auto w-72" src={nbaLogo} alt="nba-logo" />
      </div>
      <h1 className="flex justify-center my-3 text-4xl text-white ">
        Nba Legends
      </h1>
    </div>
  );
};

export default Header;
