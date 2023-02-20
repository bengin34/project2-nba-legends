import React from "react";

const Search = ({ setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="text-center my-5">
      <input type="text" onChange={handleChange} className="w-2/4 py-2 font-large text-center rounded-t"/>
    </div>
  );
};

export default Search;
