import { useState } from "react";
import Box from "./components/Box";
import ThemeContext from "./Contexts/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = ({ target }) => {
    setTheme(target.checked ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <main className={theme}>
        {/* <p>Texto</p> */}
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
