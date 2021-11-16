import PokemonCard from "../components/PokemonCard/PokemonCard";

function MyPokemonSSG({ pokemons }) {
  return (
    <ul className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} name={pokemon.name} />
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://pokeapi-menchu.herokuapp.com/pokemon");
  const pokemons = await res.json();

  return {
    props: {
      pokemons,
    },
  };
}

export default MyPokemonSSG;
