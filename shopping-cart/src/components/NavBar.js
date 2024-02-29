import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <p>My Cart</p>
      <div>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/cart">Cart Page</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
