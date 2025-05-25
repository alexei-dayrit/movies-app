import "../css/MovieCard.css";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {
  const imageUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : null;

  const onFavoriteClick = () => {
    alert("clicked!");
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={imageUrl} alt={movie.title} />
        <button className="favorite-btn" onClick={onFavoriteClick}>
          ♥
        </button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;
