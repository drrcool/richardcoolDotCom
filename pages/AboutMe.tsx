import Head from "next/head";
import PhotoMosaic from "../components/PhotoMosaic";
import { getSortedPostData } from "../lib/post";
import { getPostDirectory } from "../lib/postsDirectoryPath";
import { PhotoItem, Dict } from "../lib/types";
import TextBlock from "../components/TextBlock";
import { getPhotoList } from "../lib/mosaic_pics";
import { getNewestPost } from "../lib/getNewestPost";
import Layout from "../components/layout";

// Set up data. Export getStaticProps to get data from the server
export async function getStaticProps() {
  const folder = "aboutme";
  // Declare the fields we want
  const allPostsData = getSortedPostData(getPostDirectory(folder));

  // Now get the image mosaic information
  const imageData: PhotoItem[] = getPhotoList();

  return {
    props: {
      allPostsData,
      imageData,
    },
  };
}

function AboutMe({
  allPostsData,
  imageData,
}: {
  allPostsData: Array<{ title: string; content: string; file: string }>;
  imageData: PhotoItem[];
}) {
  const page = "AboutMe";
  const { title, content } = getNewestPost(allPostsData);

  const titleClass = "text-5xl p-8"; //<div className="text-3xl" />;
  const contentClass = "p-8 text-xl0 row-span-2";

  return (
    <Layout className="flex flex-row static mt-[100px] h-[70%] place-items-center">
      <Head>
        <title>Paging Dr Cool...</title>
      </Head>
      <div className="lg:w-[768px] lg:h-[768px] xl:w-[960px] xl:h-[960px] 2xl:w-[1152px] 2xl:h-[1152px] grid bg-orange-500 basis-3/4 ">
        <PhotoMosaic imageData={imageData} />
      </div>
      <div className=" grid grid-rows-3 place-items-center m-5 h-1/2 basis-1/4 ">
        <TextBlock
          title={title}
          content={content}
          titleClass={titleClass}
          contentClass={contentClass}
        />
      </div>
    </Layout>
  );
}

export default AboutMe;
