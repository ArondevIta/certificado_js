import React from "react";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DashboardStudent from "./pages/DashboardStudent";
import Students from "./pages/Dashboard/Students";
import Certificates from "./pages/Dashboard/Certificates";
import EditCertificate from "./pages/Dashboard/Certificates/EditCertificate";
import StudentCertificate from "./pages/DashboardStudent/Certificates";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <PrivateRoute
          path="/dashboard/certificates"
          exact
          component={Certificates}
        />
        <PrivateRoute
          path="/dashboard/certificates/edit"
          exact
          component={EditCertificate}
        />
        <PrivateRoute path="/dashboard/students" exact component={Students} />
        <PrivateRoute path="/student" exact component={DashboardStudent} />
        <PrivateRoute
          path="/student/certificates"
          exact
          component={StudentCertificate}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
