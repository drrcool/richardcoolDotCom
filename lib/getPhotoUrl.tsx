import { PhotoItem } from "../lib/types";

export function getPhotoUrl(photo: { file: string; path?: string }): string {
  //* Note that file is simply appended at the end, but users
  //* may have the full path to filename. If that's the case,
  //* we will read the path as the filename
  const { file } = photo;
  let { path } = photo;
  path = path ? `${path}${file}` : file;
  //* This removes either public or /public from the string.
  const pattern_string = /[\/]?(public)/g;
  path = path.replace(pattern_string, "");
  const leadingSlash = path.startsWith("/") ? "" : "/";
  return `url(${leadingSlash}${path})`;
}
