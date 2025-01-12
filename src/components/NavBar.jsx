import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>Movie App</h1>
        </div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/favourites" className="nav-link">
            Favourites
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
