import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider as ReduxProvider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ReduxProvider> */}
    <App />
    {/* </ReduxProvider> */}
  </React.StrictMode>
);
