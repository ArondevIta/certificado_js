import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Dashboard/Students";
import Certificates from "./pages/Dashboard/Certificates";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/certificates" exact component={Certificates} />
        <Route path="/dashboard/students" exact component={Students} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
