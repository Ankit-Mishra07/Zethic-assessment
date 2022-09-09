import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ReduxProvider> */}
      <App />
      {/* </ReduxProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
