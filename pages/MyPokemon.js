function MyPokemon({ pokemons }) {
  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li>Name: {pokemon.name}</li>
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

export default MyPokemon;
