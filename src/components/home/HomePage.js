import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsigth Administration</h1>
        <p>
          React, Redux and React router in ES6 for ultra-responsive web apps.
        </p>
        {/* <Link to="/" className="btn btn-primary btn-lg">
          Home
        </Link>{" "}
        |{" "} */}
        <Link to="about" className="btn btn-primary btn-lg">
          Learn more
        </Link>
      </div>
    );
  }
}

export default HomePage;
