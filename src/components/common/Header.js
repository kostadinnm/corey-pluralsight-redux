import React from "react";
// import {Link, IndexLink }
import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";

const Header = () => {
  return (
    <nav>
      {/* TODO: deactivate for sub-routes */}
      <NavLink to="/" activeClassName="active">
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
