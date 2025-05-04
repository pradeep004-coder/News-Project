import React from 'react';
import { Link } from 'react-router-dom';

export default function NewsNavbar(props) {
  const categories = ["general", "politics", "economics", "technology", "entertainment"];

  return (
    <div className="bg-light">
      <nav className={`navbar navbar-expand-md ${props.mode === "Dark" ? "navbar-dark" : "navbar-light"}`} style={{ backgroundColor: props.mode === "Dark" ? "#666" : "#e4dfff" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: props.mode === "Light" ? "#000" : "#fff" }}>
            NewsApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                categories.map((val, i) => (
                  <li className="nav-item" key={i}>
                    <Link className="nav-link" to={val} style={{ color: props.mode === "Light" ? "#000" : "#ccc" }}>
                      {val}
                    </Link>
                  </li>
                ))
              }
            </ul>
            <button
              className="btn btn-outline-success ms-lg-2"
              onClick={props.onModeChange}
              type="button"
            >
              Go {props.mode === "Dark" ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
