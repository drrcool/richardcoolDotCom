import fs from "fs";
import path from "path";
import { postsDirectoryPath } from "./postsDirectoryPath";
import matter from "gray-matter";

import { getAllFiles } from "./getAllFiles";
import { PostItem } from "./types";
export function getPostById(folder: string, slug: string): PostItem {
  console.log(folder, slug);
  const filename = `${slug}.md`;
  return getPostByFilename(folder, filename);
}

function dateToString(inDate: string) {
  if (inDate) {
    const date = new Date(inDate);
    return date.toISOString().split("T")[0];
  }
  return "";
}

function getPostByFilename(folder: string, filename: string) {
  const fullPath = path.join(postsDirectoryPath(folder), filename);

  // Read in the markdown file into string
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // Read the grey matter
  const matterResult = matter(fileContents);

  const items: PostItem = {
    id: filename.replace(/\.md$/, ""),
    file: filename,
    title: matterResult.data.title || "",
    content: matterResult.content || "",
    image: matterResult.data.image || "",
    date: dateToString(matterResult.data.date) || "",
    icon: matterResult.data.icon || "",
  };

  return items;
}

export function getSortedPostData(folder: string) {
  const files = getAllFiles(folder);

  return files
    .map((filename) => {
      return getPostByFilename(folder, filename);
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
