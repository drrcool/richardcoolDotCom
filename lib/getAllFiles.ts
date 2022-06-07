import fs from "fs";
import { postsDirectoryPath } from "./postsDirectoryPath";
import { SlugItem } from "./types";
export function getAllFiles(folder: string): string[] {
  // Get all the files
  return fs.readdirSync(postsDirectoryPath(folder));
}

// Similar to the above, but now we're getting the root names of the
// files to be using in dynamically generating the navigation.
export function getAllSlugs(folder: string): SlugItem[] {
  const files = getAllFiles(folder);
  return files.map((file) => {
    return {
      params: {
        slug: file.replace(/\.md$/, ""),
      },
    };
  });
}
