import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import CoursesPage from "./course/CoursesPage";
import ManageCoursePage from "./course/ManageCoursePage";

// export default (
//   <Route path="/" component={App}>
//     <IndexRoute component={HomePage} />
//     <Route path="about" component={AboutPage} />
//   </Route>
// );

const Routz = () => {
  return (
    <App>
      <Switch>
        {/* 'exact' prevents rendering homepage markup on sub-routes: */}
        <Route exact path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route exact path="/course" component={ManageCoursePage} />
        <Route
          path="/course/:id"
          render={props => <ManageCoursePage {...props} />}
        />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </App>
  );
};

export default Routz;
