import Head from "next/head";
import Header from "../components/Header";
import PhotoMosaic from "../components/PhotoMosaic";
import { getSortedPostData } from "../lib/post";
import { getPostDirectory } from "../lib/postsDirectoryPath";
import { PhotoItem, Dict } from "../lib/types";
import TextBlock from "../components/TextBlock";
import { getPhotoList } from "../lib/mosaic_pics";

// Set up data. Export getStaticProps to get data from the server
export async function getStaticProps() {
  const folder = "aboutme";
  // Declare the fields we want
  const fields = ["title", "content"];
  const allPostsData: Dict<string>[] = getSortedPostData(
    getPostDirectory(folder),
    fields
  );

  // Now get the image mosaic information
  const imageData: PhotoItem[] = getPhotoList();

  return {
    props: {
      allPostsData,
      imageData,
    },
  };
}

// For this page, we expect there to only be one post.  It's the
// most the page can hold.  So if there are two, console out a
// alert but use the first entry as the newest.
function getNewestPost(allPostsData: Dict<string>[]): Dict<string> {
  if (allPostsData.length > 1) {
    console.warn(
      "There are more than one post on this page.  Using the first one."
    );
  }
  return allPostsData[0];
}

function AboutMe({
  allPostsData,
  imageData,
}: {
  allPostsData: Array<{ title: string; content: string; file: string }>;
  imageData: PhotoItem[];
}) {
  const page = "AboutMe";
  const post = getNewestPost(allPostsData);
  const data = {
    title: post.title,
    content: post.content,
  };

  const titleClass = "text-5xl p-8"; //<div className="text-3xl" />;
  const contentClass = "p-8 text-xl0 row-span-2";
  const classes = { titleClass, contentClass };

  return (
    <div className="container bg-black mx-auto h-screen z-[-50]">
      <Head>
        <title> Meet Dr. Cool</title>
      </Head>
      <Header page={page} />
      <div className="flex flex-row static mt-[100px] h-[70%] place-items-center">
        <div className="lg:w-[768px] lg:h-[768px] xl:w-[960px] xl:h-[960px] 2xl:w-[1152px] 2xl:h-[1152px] grid bg-orange-500 basis-3/4 ">
          <PhotoMosaic imageData={imageData} />
        </div>
        <div className=" grid grid-rows-3 place-items-center m-5 h-1/2 basis-1/4 ">
          <TextBlock data={data} classes={classes} />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
