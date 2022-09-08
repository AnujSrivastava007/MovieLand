import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";

// 89e9fc5b

// const movie1 = {
//   Title: "Spiderman",
//   Year: "2010",
//   imdbID: "tt1785572",
//   Type: "movie",
//   Poster: "N/A",
// };

const API_URL = "http://www.omdbapi.com?apikey=89e9fc5b";

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');

  const searchmovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    // searchmovies('Spiderman');
  }, []);

  const inputHandler = (event) => {
    setSearchTerm(event.target.value);
  }

  const searchHandler = () => {
    searchmovies(searchTerm);
  }

  return (
    
    <div className="app">
      <h1>Movie World</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={inputHandler}
        />
        <img src={SearchIcon} alt="Search" onClick={searchHandler} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map( (movie) => (
            <MovieCard movie={movie}/>
          ) )}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movie Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
