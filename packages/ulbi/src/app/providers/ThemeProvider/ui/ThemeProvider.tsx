import React, { type FC, useMemo, useState } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "../lib/ThemeContex";

const getDefaultTheme = (): Theme => {
  const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
  if (storedTheme && Object.values(Theme).includes(storedTheme as Theme)) {
    return storedTheme as Theme;
  }
  return Theme.LIGHT;
};

const defaultTheme = getDefaultTheme();

export const ThemeProvider: FC<{ children: React.ReactNode; }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
