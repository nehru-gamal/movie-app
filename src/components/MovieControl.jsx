import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { useMovieContext } from "./context/GlobalContext";
import * as actions from "./context/ActionsTypes";

import "../pages/WathchList.css";

export default function MovieControl({ movie, type }) {
  const MovieContext = useMovieContext();
  return (
    <div className="button">
      {type === "watchlist" && (
        <>
          <button
            onClick={() =>
              MovieContext.moviesDispatch({
                type: actions.ADD_WATCHED,
                pyload: movie,
              })
            }
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button
            onClick={() =>
              MovieContext.moviesDispatch({
                type: actions.REMOVE_WATCHLIST,
                pyload: movie.imdbID,
              })
            }
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            onClick={() =>
              MovieContext.moviesDispatch({
                type: actions.MOVE_WATCHLIST,
                pyload: movie,
              })
            }
          >
            <FontAwesomeIcon icon={faEyeSlash} />
          </button>
          <button
            onClick={() =>
              MovieContext.moviesDispatch({
                type: actions.REMOVE_WATCHED,
                pyload: movie.imdbID,
              })
            }
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </>
      )}
    </div>
  );
}
