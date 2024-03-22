import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "./lib/theme";

import axios from "axios";

declare global {
  interface Window {
    axios: any;
  }
}

window.axios = axios;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* wrap the whole app with BrowserRouter */}
    <BrowserRouter>
      {/* wrap the whole app with the ThemeContext */}
      <ThemeContext.Provider
        value={{
          fontFamily: "Arial",
          colors: {
            backgroundColor: "white",
            textColor: "#c00",
            toolbarBackgroundColor: "#555",
          },
        }}
      >
        <App />
      </ThemeContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
