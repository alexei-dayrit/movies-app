import MovieCard from "../components/MovieCard";

const Home = () => {
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Terminator", release_date: "199" },
    { id: 3, title: "The Matrix", release_date: "1998" },
  ];

  const handleSearch = () => {};

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          className="search-import"
          type="text"
          placeholder="Search for movies..."
        />
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
