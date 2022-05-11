import React from "react";
import { Route } from "react-router-dom";
import Users from "./Users";
import users from "./data.json";
import User from "./User";

function App() {
  //passed in users from the data.json as props instead of making a users State here
  //The Home Route will render `Users` to contain the list of users.
  //The `Users` component will make a section with a table containing users,
  //plus the `Link` will link `to` the Route contains the `path` that matches.
  //The `User` component 
  return (
    <div className="App">
      <Route exact={true} path="/">
        <Users users={users} />
      </Route>
      <Route path="/users/:userId">
        <User users={users} />
      </Route>
    </div>
  );
}

export default App;
