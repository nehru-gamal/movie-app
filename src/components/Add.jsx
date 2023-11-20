import React, { useEffect, useState } from "react";

import "./Add.css";
import axios from "axios";
import Result from "./Result";

export default function Add() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${searchValue}&apikey=60edb9a7`)
      .then((response) => {
        if (response.data.Search) {
          setMovies(response.data.Search);
        }
      })
      .catch((error) => console.log(error));
  }, [searchValue]);

  return (
    <div>
      <div className="add-page">
        <div className="container">
          <div className="row">

            <input
              className="input col-12"
              type="text"
              placeholder="Search for a movie"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {movies.length > 0 && (
              <ul className="result">
                {movies.map((movie) => (
                  <li key={movie.imdbID}>{<Result movie={movie} />}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
