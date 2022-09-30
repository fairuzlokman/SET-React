import ThemeContext from "../contexts/ThemeContext";
import theme from "../theme";

const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
export default ThemeProvider;