import { useEffect, useState } from "react";
import { getAllPokemon, getPokemonType } from "../apiCalls/pokemon";

const usePokemonList = (selectedType, searchText, showFavorites, favorites) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loader, setLoader] = useState(true);

  const getData = async () => {
    try {
      setLoader(true);
      if (selectedType === "all") {
        const response = await getAllPokemon();
        setPokemonList(response.results);
        // console.log(response.results);
      } else {
        const response = await getPokemonType(selectedType);
        const formattedData = response.pokemon.map((p) => p.pokemon);
        setPokemonList(formattedData);
        // console.log(formatted);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    getData();
  }, [selectedType]);

  const searchedPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredPokemon = showFavorites
    ? searchedPokemon.filter((pokemon) => {
        const id = pokemon.url.split("/").filter(Boolean).pop();
        return favorites.includes(id);
      })
    : searchedPokemon;

  return { filteredPokemon, loader };
};

export default usePokemonList;
