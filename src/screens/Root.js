import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Users from "screens/Users";
import NewUser from "screens/NewUser";
import NotFound from "screens/NotFound";
import Header from "components/Header";

class Root extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Redirect exact path="/" to="/users" />
          <Route path="/users" component={Users} />
          <Route path="/newuser" component={NewUser} />
          <Route component={NotFound} />>
        </Switch>
      </div>
    );
  }
}

export default Root;
