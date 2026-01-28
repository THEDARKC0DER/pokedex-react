import React from "react";
import Search from "./Search";

const FilterBar = ({
  setSearchText,
  selectedType,
  setSelectedType,
  types,
  showFavorites,
  setShowFavorites,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
      <Search onSearch={setSearchText} />

      <div className="relative">
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="appearance-none border rounded-lg px-4 pr-10 py-2 shadow-sm  
                   hover:border-gray-400 focus:outline-none
                     focus:ring-2 focus:ring-blue-400 transition"
        >
          <option value="all">All</option>

          {types.map((type) => (
            <option key={type.name} value={type.name}>
              {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={() => setShowFavorites((toggle) => !toggle)}
        className="px-4 py-2 rounded-lg border bg-yellow-100 hover:bg-yellow-200 transition hover:cursor-pointer"
      >
        {showFavorites ? "show All" : "⭐ Favorites"}
      </button>
    </div>
  );
};

export default FilterBar;
