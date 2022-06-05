import { Dict } from "../lib/types";
import BlogCard from "./BlogCard";
import { CardItem } from "../lib/types";
import React from "react";

// Add any tags we need to add to the className to
// Setup the class for master cards
const MasterCardClass = () => {
  return;
};

const constructCard = (cardEntry: CardItem, blogIndex: number): JSX.Element => {
  return <BlogCard {...cardEntry} key={`blog-card-${blogIndex}`} />;
};

interface PreviewItems {
  blogData: Dict<string>[];
  nCards?: number;
  nMasterCards?: number;
}

// Since the index is 0 indexed, index needs to be under the total # of master
const determineMasterCard = (cardIndex: number, nMasterCards: number) => {
  return cardIndex < nMasterCards;
};

const buildCardClassName = (isMasterCard: boolean): string => {
  const masterCardClass = "big-card";
  return `blog-card ${isMasterCard ? masterCardClass : ""}`;
};

const buildCardInputs = (
  blogEntry: Dict<string>,
  isMasterCard: boolean
): CardItem => {
  return {
    title: blogEntry.title,
    content: blogEntry.content,
    thumbnail: blogEntry.image,
    className: buildCardClassName(isMasterCard),
  };
};

const buildCardItem = (
  blogEntry: Dict<string>,
  blogIndex: number,
  nMasterCards: number
): JSX.Element => {
  const isMasterCard = determineMasterCard(blogIndex, nMasterCards);
  return constructCard(buildCardInputs(blogEntry, isMasterCard), blogIndex);
};

const BlogPreviewGrid = (props: PreviewItems): JSX.Element => {
  // Check for some option inputs
  const { blogData } = props;
  const nCards = props?.nCards || 3;
  const nMasterCards = props?.nMasterCards || 1;

  //* Note: slice is safe in that if you ask for N but
  //* there are less than N, it will just return the
  //* available number of items.
  const cardEntries = blogData.slice(0, nCards).map((blogEntry, blogIndex) => {
    return buildCardItem(blogEntry, blogIndex, nMasterCards);
  });

  return <div className="blog-grid">{cardEntries}</div>;
};

export default BlogPreviewGrid;

const blogItem = {
  title: "tZest",
  content: "hello",
  image: "test.png",
};

const blogEntry = [blogItem, blogItem];
const test = BlogPreviewGrid({ ...{ blogData: blogEntry } });
console.log(test);
