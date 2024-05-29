import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import NumResult from "./components/NumResult";
import Box from "./components/Box";
import MovieList from "./components/Movie /MovieList";
import WatchedSummary from "./components/Watched/WatchedSummary";
import WatchedMovieList from "./components/Watched/WatchedMovieList";
import Loader from "./components/Loader";
import MovieDetails from "./components/Movie /MovieDetails";
import ErrorMessage from "./components/ErrorMessage";
import { useMovies } from "./hooks/useMovies";
import { useLocalStorage } from "./hooks/useLocalStorage";



function Appv2() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const{movies,isLoading,error}=useMovies(query)
  const [watched,setWatched]=useLocalStorage([],"watched")



  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }
  function handleCloseMovie() {
    setSelectedId(null);
  }
  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }
  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }


  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </NavBar>

      <Main>
        <Box movies={movies}>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onSeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}


export default Appv2;
