import Link from "next/link";
import { getPhotoUrl } from "../lib/getPhotoUrl";
import { PostItem } from "../lib/types";

const GridCard = ({post}: {post:PostItem}): JSX.Element => {
  return (
    <Link href={`/experience/${post.id}`}>
      <a className="experience-grid-card" id={post.id}>
        <div
          className="experience-card-content"
          style={{ backgroundImage: getPhotoUrl({ file: post.image }) }}
        >
          <p className="experience-grid-title">{post.title}</p>
        </div>
      </a>
    </Link>
  );
};

interface GridItem {
  [id: number]: JSX.Element;
}
const ExperienceGrid = ({ posts }: { posts: PostItem[] }): JSX.Element => {
  const gridEntries: GridItem = {};
  posts.forEach((d, ii) => {
    let index = ii;
    if (ii >= 7) index = ii + 1;

    gridEntries[index] = <GridCard post={d} key={ii} />
  });
  gridEntries[7] = (
    <div className="experience-card-content">
      <button>Press ME</button>
    </div>
  );

  const cards = Object.keys(gridEntries).map((key, index) => {
    return gridEntries[index];
  });
  return <div className="experience-grid-container">{cards}</div>;
};

export default ExperienceGrid;
