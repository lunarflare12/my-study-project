import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContex";
import {useContext} from "react";

interface  UseThemeResult  {
  toggleTheme: () => void,
  theme: Theme
}

export const useTheme =():UseThemeResult=> {
  const {theme, setTheme} = useContext(ThemeContext)

  const toggleTheme = () => {
    const netTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(netTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, netTheme)
  }
  
  return {theme, toggleTheme}
}