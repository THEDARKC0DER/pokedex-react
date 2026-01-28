import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonGrid = ({
  pokemonList,
  favorites,
  onToggleFavorite,
  onSelectedPokemon,
}) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] w-full gap-8 max-w-xs px-6 md:max-w-7xl">
      {pokemonList &&
        pokemonList.map((pokemon) => {
          const pokemonId = pokemon.url.split("/").filter(Boolean).pop();
          return (
            <PokemonCard
              key={pokemonId}
              pokemon={pokemon}
              pokemonId={pokemonId}
              isFavorite={favorites.includes(pokemonId)}
              onToggleFavorite={onToggleFavorite}
              onSelectedPokemon={onSelectedPokemon}
            />
          );
        })}
    </div>
  );
};

export default PokemonGrid;
