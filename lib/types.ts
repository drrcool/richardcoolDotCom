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
  file: string;
  id: string;
  image: string;
  icon: string;
  date: string;
}

export interface PhotoItem {
  file: string;
  path: string;
  isTall: boolean;
  isWide: boolean;
}

export type CardItem = PostItem & { className?: string };

export interface SlugItem {
  params: { slug: string };
}
