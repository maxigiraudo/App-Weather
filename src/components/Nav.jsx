import React from "react";
import Logo from "../img/logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav>
      <div className="navbarr">
        <Link className="logoA" to="/">
          <h4 className="logo">MG Weather</h4>
        </Link>
        <Link className="abA" to="/about">
          <h4 className="ab">PROYECTO</h4>
        </Link>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default Nav;
