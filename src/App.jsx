import { useState } from "react";
import Box from "./components/Box";
import ThemeContext from "./Contexts/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState(() => {
    const storageTheme = localStorage.getItem("theme");

    return storageTheme || "light";
  });

  const handleThemeChange = ({ target }) => {
    const newTheme = target.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <main className={theme}>
        <h3>Troca de tema Reactjs</h3>
        <Box />
        <label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={handleThemeChange}
          />
          Modo Escuro
        </label>
      </main>
    </ThemeContext.Provider>
  );
};

export default App;
