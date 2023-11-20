import React from "react";
import MovieControl from "./MovieControl";

import "./MovieCard.css";

export default function MovieCard({ movie, type }) {
  return (
    <div className="movie-card col-lg-3 col">
      {movie.Poster ? (
        <img src={movie.Poster} alt="movie.Title"></img>
      ) : (
        <div className="filter-poster"></div>
      )}
      <MovieControl movie={movie} type={type} />
    </div>
  );
}
