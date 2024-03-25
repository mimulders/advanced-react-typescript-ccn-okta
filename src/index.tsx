import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./lib/theme";

import axios from "axios";
import { FetchDataCacheProvider } from "./lib/fetchDataCache";

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
      {/* wrap the whole app with the ThemeProvider */}
      <ThemeProvider>
        {/* wrap the App component with the FetchDataCacheProvider */}
        <FetchDataCacheProvider>
          <App />
        </FetchDataCacheProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
