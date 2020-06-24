import React from 'react';
import '../App.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';

function Nav() {

  const navStyle = {
    color: 'white'
  };

  return (
    <Router>
      <nav>
        <ul className="nav-links">
          <Link style={navStyle} to="/people">
            <li>Here will be Nav</li>
          </Link>
        </ul>
      </nav>
    </Router>
  );
}

export default Nav;
