import PokemonCard from "../components/PokemonCard/PokemonCard";

import { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
      );
      const pokemonList = await response.json();
      setPokemons(pokemonList.results);
    })();
  }, []);

  return (
    <ul>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} />
      ))}
    </ul>
  );
};
export default Pokemon;