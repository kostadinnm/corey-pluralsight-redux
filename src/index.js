// credits: https://github.com/ReactTraining/react-router/blob/25776d4dc89b8fb2f575884749766355992116b5/packages/react-router/docs/guides/migrating.md#the-router

import React from "react";
// import ReactDOM from "react-dom";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
// import App from "./components/App";
// import HomePage from "./components/home/HomePage";
// import AboutPage from "./components/about/AboutPage";
import Routz from "./components/routes";
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import configStore from "./store/configureStore";

import {loadCourses} from "./actions/courseActions";
import {loadAuthors} from "./actions/authorActions";

// RactDOM.render(<App />, document.getElementById("root"));
// render(
//     <Router history={browserHistory} routes={routes} />, document.getElementById("root")
// );

const store = configStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router>
      <Routz />
    </Router>
    {/* <Router>
      <App>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </App>
    </Router> */}
  </Provider>,
  document.getElementById("root")
);
