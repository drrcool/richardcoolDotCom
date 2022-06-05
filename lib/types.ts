//* Generics *//
export interface Dict<Type> {
  [key: string]: Type;
}
export interface HeaderItem {
  label: string;
  path: string;
}

export interface PostItem {
  title: string;
  content: string;
  image?: string;
  icon?: string;
  date?: string;
  titleElement?: string;
}

export interface PhotoItem {
  file: string;
  path: string;
  isTall: boolean;
  isWide: boolean;
}

export interface CardItem {
  title: string;
  content: string;
  thumbnail: string;
  className?: string;
}
