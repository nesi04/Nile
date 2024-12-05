import React from "react";
import {Link} from "react-router-dom"
import "./navBar.css"

const NavBar = () => {
  return (
    <nav className="navWrapper">
      <div className="container">
        <Link to="/" className="brandName">
          NILE
        </Link>
        <ul className="rightSide">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="material-icons">shopping_cart</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
