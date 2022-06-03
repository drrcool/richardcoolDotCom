export type PageListString = keyof typeof PageList;
export interface HeaderItem {
  label: string;
  path: string;
}
export enum PageList {
  home = "home",
  aboutme = "aboutmeP",
  blog = "blog",
  contact = "contact",
  experience = "experience",
}

export interface Dict<Type> {
  [key: string]: Type;
}

export interface ButtonProps {
  theme: string;
  setTheme: Function;
  toggleButton: Function;
}

export interface PostItem {
  title: string;
  content: string;
  image?: string;
  icon?: string;
  date?: string;
}

export interface PhotoItem {
  file: string;
  path: string;
  isTall: boolean;
  isWide: boolean;
}
