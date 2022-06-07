import { getPhotoUrl } from "../lib/getPhotoUrl";
import { CardItem } from "../lib/types";
import { PostItem } from "../lib/types";
import Link from "next/link";
//* The input here could either be a path (the default) or an external URL
//* (we will look for http for that).
//* If  path is provided, we will want to trimp off [/]?public (the slash may or may not be there)
//* the final (local) path should be /image/<ASSET_PATH>/ and filename is the file in that directory
const getPhoto = (file: string): string => {
  if (file.startsWith("http")) {
    return file;
  }

  return getPhotoUrl({ path: file, file: "" });
};

const getTitle = (title: string): JSX.Element => {
  return <h4 className="blog-header-title">{title}</h4>;
};

const getDate = (date: string): JSX.Element => {
  return <p className="card-date">{date}</p>;
};

const getLink = (id: string): JSX.Element => {
  return <Link href={`/thoughts/${id}`}>Read More...</Link>;
};

const getContent = (content: string, id: string): JSX.Element => {
  //* Only keep the first paragraph
  const subContent = content.split("\r\n\r")[0];
  return (
    <div className="header-text-container">
      <p className="blog-header-content">{subContent}</p>;
      <p className="fade-text-out-read-more"> {getLink(id)} </p>
    </div>
  );
};

const BlogCard = (props: CardItem): JSX.Element => {
  //* Things of note when building this:
  //? The position of elements inside each card will be different  based on how
  //? In the previous parent. We may need to add logic there that helps us say isRightSide or
  //? isLeftSide.
  //? This will also have to be enabled only at large enough sizes. At small sizes a stack of them is fine
  //? How do we want to style the big cards for mobile. I'm thinking it just a preview pane, but thats very different

  // Get out inputs
  const { title, content, image, className, id } = props;

  //TODO Remember the basic layout is nearly full size thumbnail on left, then text with Title on top (as h4 probably) then the text
  //TODO under that.
  //TODO We need to add a date to the card.
  //TODO We need to add a read more button.

  return (
    <>
      {" "}
      <div className={className}>
        <div
          className="card-thumbnail"
          style={{ backgroundImage: getPhoto(image) }}
        />
      </div>
      {getTitle(title)}
      {getDate(content)}
      {getContent(content, id)}
    </>
  );
};

export default BlogCard;
