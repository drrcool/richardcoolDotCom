import path from "path";
import { POST_CONFIG } from "../config/postConfig";

export const getPostDirectory = (folder: string): string => {
  let postDirectoryName: string = "";
  try {
    postDirectoryName = POST_CONFIG[folder];
  } catch (error) {
    console.error("The key for this type of post is not found");
    console.error(error);
  }

  return postDirectoryName;
};

export const postsDirectoryPath = (folder: string): string => {
  return path.join(process.cwd(), folder);
};
