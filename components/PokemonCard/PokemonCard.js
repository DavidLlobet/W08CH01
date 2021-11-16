const PokemonCard = ({ name }) => {
  return (
    <article className="card shadow-sm">
      <h2 className="fw-light text-center display-5">{name}</h2>
      <img
        src="https://cdn2.myminifactory.com/assets/object-assets/5f7c6ef230f1d/images/720X720-squirtle-2.jpg"
        alt="user"
        width="300"
        height="300"
        className="bd-placeholder-img card-img-top"
      ></img>
    </article>
  );
};

export default PokemonCard;
