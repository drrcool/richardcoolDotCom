import { PostItem } from "../lib/types";
import ReactMarkdown from "react-markdown";

const skillCard = (postData: PostItem) => {
  return (
    <div className="skill-card" key={`${postData.title}-card`}>
      <h4>{postData.title}</h4>
      <ReactMarkdown>{postData.content}</ReactMarkdown>
    </div>
  );
};
export default function Skills({
  skillData,
}: {
  skillData: PostItem[];
}): JSX.Element {
  const skills = skillData.map((postData) => skillCard(postData));
  return <div className={"skill-grid"}>{skills}</div>;
}
