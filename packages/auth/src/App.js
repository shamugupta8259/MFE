import React from "react";

import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default function App({ memoryHistory, onSignIn }) {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={memoryHistory}>
        <Switch>
          <Route path="/auth/signin/">
            <SignIn onSignIn={onSignIn} />
          </Route>
          <Route path="/auth/signup/">
            <SignUp onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
}
