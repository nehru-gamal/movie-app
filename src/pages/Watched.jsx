import React from "react";
import "./Watched.css";

import { useMovieContext } from "../components/context/GlobalContext";
import MovieCard from "../components/MovieCard";

export default function Watched() {
  const MovieContext = useMovieContext();

  return (
    <div className="watched">
      <div className="container">
        <div className="main-heading">
          <h2>Movie your Watched</h2>
          <span className="movies-count d-flex gap-1">
            <span>{MovieContext.watched.length}</span>
            <span>
              {MovieContext.watched.length === 1 ? "Movie" : "Movies"}
            </span>
          </span>
        </div>
        <div className="card-poster">
          {MovieContext.watched.length > 0 ? (
            <div className="row">
              {MovieContext.watched.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} type="watched" />
              ))}
            </div>
          ) : (
            <h2 className="embty">No Movie your watched</h2>
          )}
        </div>
      </div>
    </div>
  );
}
