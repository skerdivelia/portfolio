"use client";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { dark, setDark } = useTheme();

  return (
    <button
      className="theme-toggle-btn"
      aria-label="Toggle dark mode"
      onClick={() => setDark((prev) => !prev)}
    >
      <span className="theme-toggle-icon" aria-hidden>
        {dark ? (
          <span className="sun">🌞</span>
        ) : (
          <span className="moon">🌙</span>
        )}
      </span>
      {dark ? "Light" : "Dark"}
    </button>
  );
}