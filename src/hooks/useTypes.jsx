import React, { useEffect, useState } from "react";
import { getPokemonTypeNames } from "../apiCalls/pokemon";

export const useTypes = () => {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const fetchTypes = async () => {
      const data = await getPokemonTypeNames();
      setTypes(data);
    };

    fetchTypes();
  }, []);

  return types;
};
