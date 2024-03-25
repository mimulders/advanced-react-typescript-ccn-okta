// src/lib/theme.tsx
import { createContext, useState } from "react";

export type Theme = {
  fontFamily: string;
  colors: {
    backgroundColor: string;
    textColor: string;
    toolbarBackgroundColor: string;
  };
};

const initialTheme = {
  fontFamily: "sans-serif",
  colors: {
    backgroundColor: "white",
    textColor: "#00c",
    toolbarBackgroundColor: "#555",
  },
};

const darkTheme = {
  fontFamily: "sans-serif",
  colors: {
    backgroundColor: "black",
    textColor: "#00c",
    toolbarBackgroundColor: "#555",
  },
};

export const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({
  theme: initialTheme,
  toggle: () => {
    // noop
    //what to program here??
  },
});

export function ThemeProvider(props: { children?: React.ReactNode }) {
  const [theme, setTheme] = useState(initialTheme);

  // toggle function to switch between themes
  //The setTheme function is being called with a function as its argument.
  //It takes the current theme as its parameter and returns a new theme.
  //This is a common pattern when the new state depends on the previous state.

  const toggle = () => {
    setTheme((theme) => (theme === initialTheme ? darkTheme : initialTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
