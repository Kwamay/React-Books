import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/nav.css';
import { BsFillPersonFill } from 'react-icons/bs';

const Nav = () => (
  <nav className="nav-container">
    <ul className="nav-ul">
      <h2 className="nav-logo">Bookstore CMS</h2>
      <li className="nav-li">
        <Link className="nav-link" to="/">BOOKS</Link>
      </li>
      <li className="nav-li">
        <Link className="nav-link" to="/categories">CATEGORIES</Link>
      </li>
    </ul>
    <BsFillPersonFill />
  </nav>
);

export default Nav;
