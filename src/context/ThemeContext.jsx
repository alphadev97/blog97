"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  const value = localStorage.getItem("theme");
  return value || "light";
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};
