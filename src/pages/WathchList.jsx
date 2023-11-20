import React from "react";
import "./WathchList.css";

import { useMovieContext } from "../components/context/GlobalContext";
import MovieCard from "../components/MovieCard";

export default function WathchList() {
  const MovieContext = useMovieContext();
  return (
    <div className="watch-list">
      <div className="container">
        <div className="main-heading">
          <h2>WathchList</h2>
          <span className="movies-count d-flex gap-1">
            <span>{MovieContext.watchList.length}</span>
            <span>
              {MovieContext.watchList.length === 1 ? "Movie" : "Movies"}
            </span>
          </span>
        </div>
        <div className="card-poster">
          {MovieContext.watchList.length > 0 ? (
            <div className="row">
              {MovieContext.watchList.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />
              ))}
            </div>
          ) : (
            <h2 className="embty">No Movie in your list</h2>
          )}
        </div>
      </div>
    </div>
  );
}
