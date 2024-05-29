import WatchedMovie from "./WatchedMovie";

function WatchedMovieList({ watched,onSeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie key={movie.title} movie={movie} onSeleteWatched={onSeleteWatched} />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
