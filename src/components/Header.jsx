import React, { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const color = useContext(ThemeContext);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <h1 style={{ color }}>Hook APP</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "DARK MODE" : "LIGHT MODE"}
      </button>
    </div>
  );
};

export default Header;
