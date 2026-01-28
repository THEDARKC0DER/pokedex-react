import { useEffect, useState } from "react";
import {
  getAllPokemon,
  getPokemonType,
  getPokemonTypeNames,
} from "../apiCalls/pokemon";

import Spinner from "../components/Spinner";

import PokemonGrid from "../components/PokemonGrid";
import FilterBar from "../components/FilterBar";
import PokemonModal from "../components/PokemonModal";
import usePokemonList from "../hooks/usePokemonList";
import { useTypes } from "../hooks/useTypes";
import { useFavorites } from "../hooks/useFavorites";
import { Pagination } from "../components/Pagination";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState("all");

  const [showFavorites, setShowFavorites] = useState(false);

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const { favorites, toggleFavorite } = useFavorites();
  const { filteredPokemon, loader } = usePokemonList(
    selectedType,
    searchText,
    showFavorites,
    favorites
  );
  const types = useTypes();

  //reset the pagination page when a new search is entered
  useEffect(() => {
    setCurrentPage(1);
  }, [searchText]);

  //
  const totalPages = Math.ceil(filteredPokemon.length / 20);
  const startIndex = (currentPage - 1) * 20;
  const paginatedPokemon = filteredPokemon.slice(startIndex, startIndex + 20);

  return (
    <div className="w-full min-h-screen box-border flex flex-col items-center bg-gray-50 gap-10 py-10 transition-colors duration-300">
      <FilterBar
        setSearchText={setSearchText}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        types={types}
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
      />
      <div className="min-h-[60vh] flex justify-center items-center w-full gap-8 max-w-xs px-6 md:max-w-7xl">
        {loader ? (
          <Spinner />
        ) : (
          <PokemonGrid
            pokemonList={paginatedPokemon}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onSelectedPokemon={setSelectedPokemon}
          />
        )}
      </div>

      {filteredPokemon.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={() => setCurrentPage((p) => p - 1)}
          onNext={() => setCurrentPage((p) => p + 1)}
        />
      )}

      {selectedPokemon && (
        <PokemonModal
          pokemonId={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </div>
  );
};

export default Home;
