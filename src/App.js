import React, { useState } from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext();
function App() {
  const [theme, setTheme] = useState("green");
  return (
    <>
      <ThemeContext.Provider value={{ backgroundColor: theme }}>
        Class Counter
        <Counter initialCount={4} />
        Function Counter
        <CounterHooks initialCount={4} />
        <button
          onClick={() =>
            setTheme((prevTheme) => {
              return prevTheme === "green" ? "blue" : "green";
            })
          }
        >
          Toggle Theme
        </button>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
