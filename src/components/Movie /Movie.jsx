function Movie({movie,onSelectMovie}) {
  return (
    <li key={movie.imdbID} onClick={()=>onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.imdbID} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
