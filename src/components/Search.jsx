import React, { useEffect, useState } from "react";

const Search = ({ onSearch }) => {
  const [inputText, setInputText] = useState("");

  const handleSearch = (e) => {
    setInputText(e.target.value);
  };

  // using debounce search with a delay of 300ms
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(inputText);
      console.log(inputText);
    }, 500);

    // cleanup
    return () => clearTimeout(timer);
  }, [inputText]);
  return (
    <input
      autoComplete="off"
      name="pokemon-search"
      type="text"
      placeholder="Type here to search for pokemons"
      onChange={handleSearch}
      className=" w-72 px-4 py-2 border rounded-lg shadow-sm
        focus:outline-none
        focus:ring-2 focus:ring-blue-400
        focus:border-blue-400
        transition"
    />
  );
};

export default Search;
