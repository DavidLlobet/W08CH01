import PokemonCard from "../components/PokemonCard/PokemonCard";

function MyPokemonISR({ pokemons }) {
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

  if (!pokemons) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemons,
    },
    revalidate: 30,
  };
}

export default MyPokemonISR;
