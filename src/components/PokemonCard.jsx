import React from "react";

const PokemonCard = ({
  pokemon,
  pokemonId,
  isFavorite,
  onToggleFavorite,
  onSelectedPokemon,
}) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center
    bg-linear-to-br from-amber-400 to-amber-500
    rounded-2xl h-56 shadow-md
    hover:shadow-2xl hover:-translate-y-2
    active:scale-[0.98]
    transition-all duration-300 ease-out
    cursor-pointer"
      onClick={() => onSelectedPokemon(pokemonId)}
    >
      <button
        className="absolute top-2 right-4 text-xl cursor-pointer "
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(pokemonId);
        }}
      >
        <span
          className={`
      inline-block
      transition-all duration-500 ease-in
      ${
        isFavorite
          ? "scale-100 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)] "
          : "scale-140"
      }
    `}
        >
          {isFavorite ? "⭐" : "☆"}
        </span>
      </button>
      <img
        loading="lazy"
        className="size-40 object-contain"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
        onError={(e) => {
          e.currentTarget.src =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
        }}
        alt="Pokemon"
      />
      <p className="mt-2 font-bold capitalize text-gray-700 ">{pokemon.name}</p>
    </div>
  );
};

export default PokemonCard;
