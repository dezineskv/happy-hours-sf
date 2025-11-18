// components/ThemeToggle.jsx (or .tsx)
import React, { useState, useEffect } from "react";
import { SunMedium, Moon } from "lucide-react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light"); // Initial theme

  useEffect(() => {
    // Set initial theme based on local storage or system preference if desired
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
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
    <label className="swap rounded-md swap-rotate bg-gray-200">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <div className="swap-on text-black dark:text-white">
        <Moon />
      </div>
      {/* Dark mode icon */}
      <div className="swap-off bg-gray-200 text-black dark:text-white ">
        <SunMedium className="text-black dark:text-white" />
      </div>
      {/* Light mode icon */}
    </label>
  );
}

export default ThemeToggle;
