import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DashboardStudent from "./pages/DashboardStudent";
import Students from "./pages/Dashboard/Students";
import Certificates from "./pages/Dashboard/Certificates";
import EditCertificate from "./pages/Dashboard/Certificates/EditCertificate";
import StudentCertificate from "./pages/DashboardStudent/Certificates";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/certificates" exact component={Certificates} />
        <Route
          path="/dashboard/certificates/edit"
          exact
          component={EditCertificate}
        />
        <Route path="/dashboard/students" exact component={Students} />
        <Route path="/student" exact component={DashboardStudent} />
        <Route
          path="/student/certificates"
          exact
          component={StudentCertificate}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
