import React from "react";

import "./Result.css";
import { useMovieContext } from "./context/GlobalContext";

import * as actions from "./context/ActionsTypes";

export default function Result({ movie }) {
  const MovieContext = useMovieContext();
  const storeMovie = MovieContext.watchList.find(
    (o) => o.imdbID === movie.imdbID
  );
  const storeMovieWatched = MovieContext.watched.find(
    (o) => o.imdbID === movie.imdbID
  );

  const watchMovieDisabled = storeMovie
    ? true
    : storeMovieWatched
    ? true
    : false;

  const watchedDisabled = storeMovieWatched ? true : false;

  return (
    <div className="result">
      <div className="container">
        <div className="row">
          <div
            className="movie d-flex gap-3 col-12
          "
          >
            <div className="poster">
              {movie.Poster ? (
                <img src={movie.Poster} alt={movie.Title} />
              ) : (
                <div className="filter-poster"></div>
              )}
            </div>
            <div className="info">
              <h4>{movie.Title}</h4>
              <h6>{movie.Year}</h6>

              <div className="button d-flex gap-3">
                <button
                  onClick={() =>
                    MovieContext.moviesDispatch({
                      type: actions.ADD_WATCHLIST,
                      pyload: movie,
                    })
                  }
                  className="btn"
                  disabled={watchMovieDisabled}
                >
                  Add to Watch list
                </button>
                <button
                  onClick={() =>
                    MovieContext.moviesDispatch({
                      type: actions.ADD_WATCHED,
                      pyload: movie,
                    })
                  }
                  className="btn"
                  disabled={watchedDisabled}
                >
                  Add to Watched
                </button>
              </div>
            </div>
          </div>
        </div>
        {console.log(movie)}
      </div>
    </div>
  );
}
