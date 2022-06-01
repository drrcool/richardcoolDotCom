import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { POST_CONFIG } from "../config/postConfig";
import type { Dict } from "../types/commonTypes";

const getPostDirectory = (postType: string): string => {
  let postDirectoryName: string = "";
  try {
    postDirectoryName = POST_CONFIG[postType];
  } catch (error) {
    console.error("The key for this type of post is not found");
    console.error(error);
  }

  return postDirectoryName;
};
const postsDirectoryPath = (postType: string): string => {
  return path.join(process.cwd(), getPostDirectory(postType));
};

function getPostByID(
  postType: string,
  filename: string,
  fields: string[] = []
) {
  const fullPath = path.join(postsDirectoryPath(postType), filename);

  // Read in the markdown file into string
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Read the grey matter
  const matterResult = matter(fileContents);

  type Items = {
    [key: string]: string;
  };
  const items: Items = {};

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

function getAllPosts(postType: string): string[] {
  // Get all the files
  return fs.readdirSync(postsDirectoryPath(postType));
}

export function getSortedPostData(postType: string, fields: string[] = []) {
  const files = getAllPosts(postType);
  const posts = files
    .map((filename) => {
      return getPostByID(postType, filename, fields);
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
