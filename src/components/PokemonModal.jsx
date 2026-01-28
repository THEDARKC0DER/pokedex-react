import React, { useEffect, useState } from "react";
import { getPokemon } from "../apiCalls/pokemon";
import Spinner from "./Spinner";

const PokemonModal = ({ pokemonId, onClose }) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Pokémon details
  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const data = await getPokemon(pokemonId);
        setDetails(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (pokemonId) fetchDetails();
  }, [pokemonId]);

  // Close on outside click
  const handleBackdropClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  // Prevent modal inner click from closing
  const handleModalClick = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/30 z-50 px-4"
      onClick={handleBackdropClick}
    >
      <div
        className="flex flex-col gap-4 md:flex-row items-center bg-white rounded-2xl p-6 md:py-10 w-3/4  max-w-xl  md:max-w-2xl lg:max-w-4xl shadow-lg max-h-[90vh] overflow-y-auto relative transform scale-95 opacity-0 animate-modal-enter"
        onClick={handleModalClick}
      >
        {loading || !details ? (
          <div className="w-full flex justify-center py-20">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center w-2/3 md:w-1/3 shrink-0 gap-2">
              <img
                src={details.sprites.front_default || "/pokedex.png"}
                alt={details.name}
                onError={(e) => {
                  e.currentTarget.src = "/pokedex.png";
                }}
                className="max-h-64 md:max-h-[40vh] w-full object-contain transition-transform duration-300 hover:scale-105"
              />
              <h2 className="text-xl md:text-3xl font-semibold capitalize text-center">
                {details.name}
              </h2>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-6 p-4 md:pl-20 text-sm md:text-lg ">
              <p>
                <strong>Types:</strong>{" "}
                {details.types.map((t) => t.type.name).join(", ")}
              </p>
              <p>
                <strong>Height:</strong> {details.height} |{" "}
                <strong>Weight:</strong> {details.weight}
              </p>
              <div>
                <strong>Stats:</strong>
                {details.stats.map((stat) => (
                  <p key={stat.stat.name}>
                    {stat.stat.name}: {stat.base_stat}
                  </p>
                ))}
              </div>
            </div>

            <button
              className="absolute top-4 right-4 text-lg md:text-xl cursor-pointer"
              onClick={onClose}
            >
              ✖
            </button>
          </>
        )}
      </div>
      <style jsx>{`
        @keyframes modal-enter {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-modal-enter {
          animation: modal-enter 0.25s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PokemonModal;
