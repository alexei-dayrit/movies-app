import "./css/App.css";
import MovieCard from "./components/MovieCard";

function App() {
  const movieNumber = 1;

  return (
    <>
      {movieNumber === 1 ? (
        <MovieCard movie={{ title: "Alex's Film", release_date: "2024" }} />
      ) : (
        <MovieCard
          movie={{ title: "Christelle's Film", release_date: "2020" }}
        />
      )}
    </>
  );
}

export default App;
