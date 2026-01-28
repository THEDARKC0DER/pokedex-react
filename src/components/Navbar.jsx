import React from "react";

export const Navbar = () => {
  return (
    <nav className="">
      <div className=" mx-auto px-4 pt-3 flex items-center justify-center gap-4">
        <img src="pokedex.jfif" alt="" className="size-16 object-contain" />
        <h1 className="text-black font-bold text-xl md:text-2xl">Pokedex</h1>
      </div>
    </nav>
  );
};
