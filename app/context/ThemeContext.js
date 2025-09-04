"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

    useEffect(() => {
        // On mount, set theme from localStorage if it exists
        const saved = localStorage.getItem("theme");
        if (saved === "dark") setDark(true);
        if (saved === "light") setDark(false);
    }, []);

    useEffect(() => {
     localStorage.setItem("theme", dark ? "dark" : "light"); 
    }, [dark]);

    useEffect(() => {
        const root = document.documentElement;
        if (dark) {
        root.classList.add("dark");
        } else {
        root.classList.remove("dark");
        }
    }, [dark]);


  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}