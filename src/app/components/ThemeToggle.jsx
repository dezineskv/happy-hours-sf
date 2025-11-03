// components/ThemeToggle.jsx (or .tsx)
import React, { useState, useEffect } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light"); // Initial theme

  useEffect(() => {
    // Set initial theme based on local storage or system preference if desired
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Persist theme in local storage
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <div className="swap-on">🌙</div> {/* Dark mode icon */}
      <div className="swap-off">☀️</div> {/* Light mode icon */}
    </label>
  );
}

export default ThemeToggle;
