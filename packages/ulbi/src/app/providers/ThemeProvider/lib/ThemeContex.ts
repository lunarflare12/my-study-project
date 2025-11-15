import { createContext } from "react";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}
interface IThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

const ThemeContext = createContext<IThemeContextProps>({});

const LOCAL_STORAGE_THEME_KEY = "theme";

export type { IThemeContextProps };

export { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY };
