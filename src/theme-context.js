import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black"
  };

  const changeTheme = () => {
    setTheme((theme) => !theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, styling, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
