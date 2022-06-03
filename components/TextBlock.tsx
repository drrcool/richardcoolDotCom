import * as React from "react";

interface PostItem {
  title: string;
  content: string;
}
interface ClassItem {
  titleClass: string;
  contentClass: string;
}

export default function TextBlock({
  data,
  classes,
}: {
  data: PostItem;
  classes: ClassItem;
}) {
  const title = (
    <div className={classes.titleClass}>
      <h3>{data.title}</h3>
    </div>
  );
  const content = (
    <div className={classes.contentClass}>
      <p>{data.content}</p>
    </div>
  );
  return (
    <>
      {title}
      {content}
    </>
  );
}
