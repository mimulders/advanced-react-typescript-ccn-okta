import React, { useContext } from "react";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Routes, Route, Link as RouterLink } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import SignupPage from "./pages/auth/SignupPage";
import LoginPage from "./pages/auth/LoginPage";
import { ThemeContext } from "./lib/theme";
import { FetchDataCacheContext } from "./lib/fetchDataCache";

// import SunnyIcon from "@mui/icons/WbSunny";
// ^^ gives error: Cannot find module '@mui/icons/WbSunny' or its corresponding type declarations.
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function App() {
  const { theme, toggle } = useContext(ThemeContext);
  const { addItem, getResultsForUrl, cache } = useContext(
    FetchDataCacheContext
  );
  console.log("current cache:", cache);
  console.log("has item?:", getResultsForUrl("http://ab.cd"));

  // just attach this to any random element in the page for now ;)
  const onClickWhatever = () => {
    addItem("http://ab.cd", { answer: 42 });
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar
          style={{ backgroundColor: theme.colors.toolbarBackgroundColor }}
        >
          <IconButton
            component={RouterLink}
            to="/"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <HomeIcon />
          </IconButton>
          <IconButton
            onClick={toggle}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <WbSunnyIcon />
          </IconButton>
          <div style={{ flexGrow: 1 }} />
          <Button color="inherit" component={RouterLink} to="/signup">
            Signup
          </Button>
          <Button color="inherit" component={RouterLink} to="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <div style={{ height: "2rem" }}>
        <button onClick={onClickWhatever}>test adding item to cache</button>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
