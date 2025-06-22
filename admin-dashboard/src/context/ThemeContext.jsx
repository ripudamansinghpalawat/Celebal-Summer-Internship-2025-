// src/context/ThemeContext.jsx
import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <div className={dark ? "dark" : ""}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
