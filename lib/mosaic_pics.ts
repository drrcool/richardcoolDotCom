import { PhotoItem } from "./types";
import { getAllFiles } from "./getAllFiles";
import path from "path";

// Parse out if the file is wide or tall
function determineIfPhotoIsWide(file: string): boolean {
  // If we added wide or tall to the file name, then it is wide
  if (file.startsWith("wide") || file.startsWith("big")) {
    return true;
  }
  return false;
}

// Create the same logic for tallness
function determineIfPhotoIsTall(file: string): boolean {
  // Same as above, if tall or big, then its tall
  if (file.startsWith("tall") || file.startsWith("big")) {
    return true;
  }
  return false;
}

// Parse the list of photo images and store if they are tall or wide
// and return all attributes to the page
export function getPhotoList(): PhotoItem[] {
  // Iterate through the photo list, check their dimensions and store them in a props object
  const path_to_images = "public/image/portraitMosaic/";

  // Get the list of images
  const images = getAllFiles(path_to_images)
    .filter((d) => {
      return d.endsWith("jpeg") || d.endsWith("jpg") || d.endsWith("png");
    })
    .map((file) => {
      return {
        file,
        path: path_to_images,
        isWide: determineIfPhotoIsWide(file),
        isTall: determineIfPhotoIsTall(file),
      };
    });

  return images;
}

const test = getPhotoList();
