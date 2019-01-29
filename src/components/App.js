// import React, { PropTypes } from "react";
import React from "react";
import PropTypes from "prop-types";
import Header from "./common/Header";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.protoTypes = {
  children: PropTypes.object.isRequired
};

export default App;
