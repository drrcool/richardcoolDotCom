import fs from "fs";
import path from "path";
import { postsDirectoryPath } from "./postsDirectoryPath";
import matter from "gray-matter";
import { Dict } from "./types";
import { getAllFiles } from "./getAllFiles";

function getPostByID(folder: string, filename: string, fields: string[] = []) {
  const fullPath = path.join(postsDirectoryPath(folder), filename);

  // Read in the markdown file into string
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // Read the grey matter
  const matterResult = matter(fileContents);

  type Items = Dict<string>;
  const items: Items = {};
  items.file = filename;
  fields.forEach((field) => {
    if (field === "content") {
      items[field] = matterResult.content;
    }
    if (field in matterResult.data) {
      items[field] = matterResult.data[field];
    }
  });

  return items;
}

export function getSortedPostData(folder: string, fields: string[] = []) {
  const files = getAllFiles(folder);
  return files
    .map((filename) => {
      return getPostByID(folder, filename, fields);
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
