import React, {useEffect, useState} from 'react'
import Movie from './component/movie';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const MOVIE_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const search_api = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(MOVIE_API);
  }, []);
  const getMovies = (API) => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);
    });
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
    getMovies(search_api + searchTerm);
    searchTerm("");
        }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      <header>
        <div className="home">
          <h1>Lumia Movie</h1>
          <h3>A Reliable Movie Rating App For You...</h3>
          <form onSubmit={handleOnSubmit}>
                <input type="search" className='search' name="search" id="search" placeholder="Search for a movie..." value={searchTerm} onChange={handleOnChange}/><br /><br />
                <button>Search</button>
          </form>
        </div>
        <button className='home-button' onClick={refreshPage}><i className="fa fa-home"></i></button>
      </header>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) =>
          <Movie key={movie.id} {...movie} />
        )}
      </div>
    </>
    
  );
}

export default App;
