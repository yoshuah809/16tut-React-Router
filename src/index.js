import ReactDom from "react-dom";
import React from "react";
import "./styles.css";
import App from "./App";

import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDom.render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </React.StrictMode>,
  document.getElementById("app")
);
