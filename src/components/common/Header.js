import React from "react";
// import {Link, IndexLink }
import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";

const Header = () => {
  return (
    <nav>
<<<<<<< HEAD
      <NavLink exact to="/" activeClassName="active">
=======
      {/* TODO: deactivate for sub-routes */}
      <NavLink to="/" activeClassName="active">
>>>>>>> 12e18d5016ccfe8840fa7b2d84c8963cb05470e2
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeClassName="active">
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
    </nav>
  );
};

export default Header;
