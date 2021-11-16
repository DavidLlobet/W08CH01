import PokemonCard from "../components/PokemonCard/PokemonCard";

function MyPokemonSSR({ pokemons }) {
  return (
    <ul className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} name={pokemon.name} />
      ))}
    </ul>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://pokeapi-menchu.herokuapp.com/pokemon");
  const pokemons = await res.json();

  // Pass data to the page via props
  return { props: { pokemons } };
}

export default MyPokemonSSR;
