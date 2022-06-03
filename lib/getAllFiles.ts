import fs from "fs";
import { postsDirectoryPath } from "./postsDirectoryPath";

export function getAllFiles(folder: string): string[] {
  // Get all the files
  return fs.readdirSync(postsDirectoryPath(folder));
}
