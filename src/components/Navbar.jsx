import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar is-primary">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          Luqman's Portfolio
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item" to="/about">About</Link>
          <Link className="navbar-item" to="/skills">Skills</Link>
          <Link className="navbar-item" to="/projects">Projects</Link>
          <Link className="navbar-item" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;