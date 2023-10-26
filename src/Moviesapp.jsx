import axios from "axios";
import { useState,useEffect} from "react";
import "./moives.css";
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const Imagpath = "https://image.tmdb.org/t/p/w1280";
function Moviesapp() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const changeTheSearch = (event) => {
    // console.log(event.target.value);
    setSearch(event.target.value);
  }

  const getAllMovies = () => {
    axios.get(APIURL)
      .then(
        (response) => {
          // console.log(response.data.results)
          setMovies(response.data.results);
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

  const getSearchedMovies = () => {
    // console.log(SEARCHAPI + search)
    axios.get(
      SEARCHAPI + search
    )
      .then(
        (response) => {
          // console.log(response.data.results)
          setMovies(response.data.results);
        }
      )
      .catch(
        (error) => { 
          console.log(error);
        }
      )
  }

  useEffect(
    () => {
      setMovies([]);
      // console.log("Hello");
      if (search === "") {
        getAllMovies();
      } else {
        getSearchedMovies();
      }
    },[search])

    const [isModalOpen, setIsModalOpen] = useState(false);

      const openModal = () => {
        setIsModalOpen(true);
      };

      const closeModal = () => {
        setIsModalOpen(false);
      };

  return (
    <div className="app-container">
      <div className="header">
        <h1>Movie Search App</h1>
      </div>
      <div className="search-bar">
        <div className="input-container">
          <input type="text" value={search} onChange={changeTheSearch} />
        </div>
      </div>
      <>
          {
            movies.length === 0
              ?
              <div className="text-3xl text-center mt-2"> Loading... </div>
              :(
              <div className="results">
              {movies.map((movie) => (
                    <div className="movie-card" key={movie.id} onClick={openModal}> 
                       <img src={Imagpath+movie.poster_path} alt="Movie Poster" className="movie-poster" />
                        <h2 className="movie-title">{movie.title}</h2>
                        <h2 className="movie-rating">{movie.vote_average}</h2>
                    </div>

              ))}
              </div>
              )

          }
    
      </>
      {isModalOpen && (
        <div className="modal">
            <h2>ibnjaln lsdngr</h2>
            <h2>ibnjaln lsdngr</h2>
            <h2>ibnjaln lsdngr</h2>
            <h2>ibnjaln lsdngr</h2>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      )}
      <div className="footer">
        &copy; 2023 Movie Search App
      </div>
    </div>
  );
}

export default Moviesapp;