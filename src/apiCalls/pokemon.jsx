import { axiosInstance } from "./index";

export const getAllPokemon = async () => {
  try {
    const response = await axiosInstance.get(
      "https://pokeapi.co/api/v2/pokemon?limit=1350"
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const getPokemonType = async (type) => {
  try {
    const response = await axiosInstance.get(
      `https://pokeapi.co/api/v2/type/${type}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const getPokemonTypeNames = async () => {
  try {
    const response = await axiosInstance.get("https://pokeapi.co/api/v2/type");
    return response.data.results;
  } catch (err) {
    console.error(err);
  }
};

export const getPokemon = async (id) => {
  try {
    const response = await axiosInstance.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
