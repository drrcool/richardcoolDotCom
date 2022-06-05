interface TextBoxItem {
  title: string;
  content: string;
  titleClass: string;
  contentClass: string;
}

export default function TextBlock(props: TextBoxItem) {
  const { title, titleClass, content, contentClass } = props;

  const titleElement = (
    <div className={titleClass}>
      <h3>{title}</h3>
    </div>
  );
  const contentElement = (
    <div className={contentClass}>
      <p>{content}</p>
    </div>
  );
  return (
    <>
      {title}
      {content}
    </>
  );
}
