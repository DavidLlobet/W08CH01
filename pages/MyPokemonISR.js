import PokemonCard from "../components/PokemonCard/PokemonCard";

function MyPokemonISR({ pokemons }) {
  return (
    <ul>
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
