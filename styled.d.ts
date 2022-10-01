import { FontName, ThemeConfig, ThemeName } from "config/themeConfig";
import "styled-components";
// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: ThemeConfig;
    fontFamily: FontName;
    setFontFamily: (a: FontName) => void;
    setTheme: (a: ThemeName) => void;
    theme: ThemeName;
  }
}
