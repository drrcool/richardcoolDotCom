export type BaseThemeConfig = {
  bgPrimary: string;
  sectionBackground: string;
  accent1: string;
  accent2: string;
  accent3: string;
  textPrimary: string;
};

export enum Fonts {
  Lato = "Lato; sans-serif",
  Raleway = "Raleway; sans-serif",
  Poppins = "Poppins; sans-serif",
  Roboto = "Roboto; sans-serif",
  Montserrat = "Montserrat; sans-serif",
  OpenSans = '"Open Sans"; sans-serif',
  SpaceGrotesk = '"Space Grotesk"; sans-serif',
  Amaranth = "Amaranth; sans-serif",
  Dosis = "Dosis; sans-serif",
  FiraSans = '"Fira Sans"; sans-serif',
  Inter = "Inter; sans-serif",
  MontserratAlternatives = '"Montserrat Alternates"; sans-serif',
  FjallaOne = '"Fjalla One"; sans-serif',
  DynaPuff = '"DynaPuff"; sans-serif',
  Inconsolata = "Inconsolata; sans-serif",
  PermanentMarker = '"Permanent Marker"; sans-serif',
}
export type FontName = keyof typeof Fonts;

const dark = {
  bgPrimary: "#000000",
  sectionBackground: "#24201F",
  accent1: "#F00380",
  accent2: "#FA682C",
  accent3: "#56A3C5",
  textPrimary: "#E0E0E1",
};

const light = {
  bgPrimary: "#FFFFFF",
  sectionBackground: "#f5f5ce",
  accent1: "#70f",
  accent2: "#FA682C",
  accent3: "#131ac5",
  textPrimary: "#000000",
};

export type ThemeConfig = {
  textPrimary: string;
  bgPrimary: string;
  sectionBackground: string;
  activeNavLink: string;
  navLink: string;
  hoverNavLink: string;
  headerUtilityButtonPrimary: string;
  headerUtilityButtonSecondary: string;
};

const colorTable = (theme: BaseThemeConfig): ThemeConfig => ({
  textPrimary: theme.textPrimary,
  bgPrimary: theme.bgPrimary,
  sectionBackground: theme.sectionBackground,
  activeNavLink: theme.accent3,
  navLink: theme.textPrimary,
  hoverNavLink: theme.accent2,
  headerUtilityButtonPrimary: theme.accent3,
  headerUtilityButtonSecondary: theme.accent2,
});

const enum ThemeNames {
  dark,
  light,
}
export type ThemeName = keyof typeof ThemeNames;

const themeLookup: { [key: string]: BaseThemeConfig } = { dark, light };

const getColorTheme = (themeName: string) => {
  const baseTheme = themeLookup[themeName];
  return colorTable(baseTheme);
};
export default getColorTheme;
