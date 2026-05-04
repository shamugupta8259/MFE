import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (el, { onNavigate, onSignIn, defaultHistory, initialPath }) => {
  const memoryHistory =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    memoryHistory.listen(onNavigate);
  }

  ReactDOM.render(
    <App memoryHistory={memoryHistory} onSignIn={onSignIn} />,
    el,
  );
  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname: currentPathname } = memoryHistory.location;
      if (currentPathname !== nextPathname) {
        memoryHistory.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_auth-dev-root");
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
