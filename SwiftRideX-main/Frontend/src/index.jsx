import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserDataProvider } from "./Context/UserContext";

ReactDOM.render(
  <UserDataProvider>
    <App />
  </UserDataProvider>,
  document.getElementById("root")
);
