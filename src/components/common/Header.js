import React from "react";
// import {Link, IndexLink }
import { Link, NavLink } from "react-router-dom";
// import PropTypes from "prop-types";

const Header = () => {
  return (
    <nav>
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
      {" | "}
      <Link to="/courses" activeClassName="active">
        Courses
      </Link>
      {" | "}
      <Link to="/about" activeClassName="active">
        About
      </Link>
    </nav>
  );
};

export default Header;
