import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./assets/search.svg";
import "./App.css";
// b263d3d3

const API_URL = "http://www.omdbapi.com?apikey=b263d3d3";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(movies);
  };
  useEffect(() => {
    searchMovies("Superman");
  }, []);
  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search for Movies"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => {
              searchMovies(searchTerm);
            }}
          />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
        {/* <div className="container">
         <div className='movie'>
          <div>
          <p>
            {movie1.Year}
          </p>
          </div>
        <div>
          <img src={movie1.Poster!=="N/A"? movie1.Poster:"https://via.placeholder.com/400"} alt={movie1.Title} />
        </div>
        <div>
          <span>{movie1.Type}</span>
          <h3>{movie1.Title}</h3>
        </div>
        </div> */}
        {/* <MovieCard movie={movies[0]}></MovieCard>
        <MovieCard movie={movies[1]}></MovieCard>
        <MovieCard movie={movies[2]}></MovieCard>
        <MovieCard movie={movies[3]}></MovieCard>
        <MovieCard movie={movies[4]}></MovieCard> 
      </div> */}
      </div>
    </>
  );
}

export default App;
