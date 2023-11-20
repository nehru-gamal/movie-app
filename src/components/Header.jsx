import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-5">
            <Link to="/">
              <h2>mOVies</h2>
            </Link>
          </div>
          <div className="link col-md-7 d-flex justify-content-end">
            <ul className="d-flex gap-3 align-items-center mb-auto">
              <li>
                <Link to="/watchlist">Watch List</Link>
              </li>
              <li>
                <Link to="/watch">Watched</Link>
              </li>
              <li>
                <Link to="/add">
                  <button className="btn">ADD</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
