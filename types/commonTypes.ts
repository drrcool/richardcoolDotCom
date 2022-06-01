export type PageListString = keyof typeof PageList;
export interface HeaderItem {
  label: string;
  path: string;
}
export enum PageList {
  home = "home",
  who_am_i = "who_am_i",
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
