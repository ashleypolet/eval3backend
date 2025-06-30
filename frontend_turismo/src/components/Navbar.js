import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Turismo</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/zonas">Zonas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/guias">Guías</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tours">Tours</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;