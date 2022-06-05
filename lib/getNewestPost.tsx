import { Dict } from "./types";

// For some pages, we expect there to only be one post.  It's the
// most the page can hold.  So if there are two, console out a
// alert but use the first entry as the newest.
export function getNewestPost(allPostsData: Dict<string>[]): Dict<string> {
  if (allPostsData.length > 1) {
    console.warn(
      "There are more than one post on this page.  Using the first one."
    );
  }
  return allPostsData[0];
}
