
import './AppMovie.css';
import { useEffect, useState } from 'react';
import MovieTile from './comps/MovieTile';
import SearchIcon from "./search.svg";

//bad6a154
let apiUrl = "https://www.omdbapi.com/?apikey=bad6a154";

const AppMovie = () => {

  const movie = {
    "Title": "All Quiet on the Western Front",
    "Year": "2022",
    "imdbID": "tt1016150",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzM4ZDJhYjYtZGY5Ny00NTk0LWI4ZTYtNjczZDFiMGI2ZjEzXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg"
  };

  const [movies, setMovies] = useState([]);
  const searchMovies = async (keyWord) => {
    console.log(`keyWord --> ${keyWord}`);
    if (!keyWord) {
      keyWord = "action";
    }
    const data = await fetch(`${apiUrl}&s=${keyWord}`);
    const moviesList = await data?.json();
    setMovies(moviesList.Search);
    console.log(moviesList.Search);

  };

  useEffect(() => {
    searchMovies("")
  }, []);

  console.log(movies.length);
  return (
    <div className='app' >
      <h1>Movie list</h1>

      <div className='search'>
        <input id="txtSearch" placeholder='Search for movies' ></input>
        <img alt='Search' src={SearchIcon} onClick={() => { searchMovies(document.querySelector("#txtSearch").value) }} />
      </div>

      <>
        {

          // <MovieTile key="1" movie={movie}></MovieTile>
          //   )
          movies.map((item, index) => {
            return (
              <MovieTile key={index} movie={item}></MovieTile>
            )
          })
        }
      </>
    </div >
  )
}

export default AppMovie;
