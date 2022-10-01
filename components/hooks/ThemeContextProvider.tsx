import React, { useMemo } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import getColorTheme, { Fonts, ThemeName } from "../../config/themeConfig";
import { GlobalStyle } from "../../styles/app_styling";
import useLocalStorage from "../hooks/useLocalStorage";
const LOCAL_STORAGE_KEY = 2; // always increment when implementing a new change that will break backward compat

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const DEFAULT_THEME = "dark";
  const DEFAULT_FONT = Fonts.DynaPuff;
  const [theme, setTheme] = useLocalStorage<ThemeName>(
    `rcooldotcom-themeName-${LOCAL_STORAGE_KEY}`,
    DEFAULT_THEME
  );
  const [fontFamily, setFontFamily] = useLocalStorage<string>(
    `rcooldotcom-fontFamily-${LOCAL_STORAGE_KEY}`,
    DEFAULT_FONT
  );
  console.log(getColorTheme(theme));
  const themeValue: DefaultTheme = useMemo(
    () => ({
      colors: getColorTheme(theme),
      fontFamily,
      setFontFamily,
      setTheme,
      theme,
    }),
    [theme, setTheme, fontFamily, setFontFamily]
  );
  return (
    <ThemeProvider theme={themeValue}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
export default ThemeContextProvider;
