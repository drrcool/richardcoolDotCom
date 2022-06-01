import type { HeaderItem, Dict } from "../types/commonTypes";
/* I thought about defining this using an array of each of the nav test entries
 where we construct the link reference using .lower().  My concern is that
 we may want to make the thoughts / blog section paginated.  So we will want
 to be able to access ~/thoughts/index.js and ~/thoughts/page1.js and ~/thoughts/page2.js etc.
 So this makes thoughts different than the other type, so it's probably easier to return a dict.  */

// This enum is what we will use to refer to our pages. This has some
// value as we can change the labels anytime we want and they will tie to
// the same enum.

export const HEADER_CONFIG: Dict<HeaderItem> = {
  home: { label: "Home", path: "/" },
  who_am_i: { label: "About Me", path: "/whoAmI" },
  experience: { label: "Experience", path: "/experience" },
  blog: { label: "Thoughts", path: "/thoughts" },
  contact: { label: "Contact", path: "/contactMe" },
};
