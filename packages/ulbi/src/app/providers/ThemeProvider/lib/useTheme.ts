import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContex";

interface IUseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

const useTheme = (): IUseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const currentTheme = theme ?? Theme.LIGHT;
    const netTheme = currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme?.(netTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, String(netTheme));
  };

  return { theme: theme ?? Theme.LIGHT, toggleTheme };
};

export { useTheme };
