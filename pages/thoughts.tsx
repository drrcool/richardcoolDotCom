import Head from "next/head";
import BlogPreviewGrid from "../components/ BlogPreviewGrid";
import Header from "../components/Header";
import TextBlock from "../components/TextBlock";
import { getNewestPost } from "../lib/getNewestPost";
import { getSortedPostData } from "../lib/post";
import { Dict, PostItem } from "../lib/types";
import Layout from "../components/layout";

// Our getStaticProps will need to do two parts
// get the blogHeader and get the Blog
export async function getStaticProps() {
  // Get the Header
  const blogHeaderFolder = "_blogHeader";
  const blogHeaderData = getSortedPostData(blogHeaderFolder);

  // Now the blog ∂posts
  const blogFolder = "_posts";
  const blogData = getSortedPostData(blogFolder);

  return {
    props: {
      blogHeaderData,
      blogData,
    },
  };
}

const Thoughts = ({
  blogData,
  blogHeaderData,
}: {
  blogData: PostItem[];
  blogHeaderData: PostItem[];
}) => {
  const header = getNewestPost(blogHeaderData);
  const titleClass = "blog-header-title page-title";
  const contentClass = "blog-header-text";
  const headerData = {
    title: header.title,
    content: header.content,
    contentClass,
    titleClass,
  };

  return (
    <Layout>
      <section className="blog-header-section">
        <TextBlock {...headerData} />
      </section>
      {/* And a grid for the 3 blot posts (1 newest, two older) */}
      <section className="blog-entry-grid-section">
        {/* <BlogPreviewGrid /> */}
        <BlogPreviewGrid {...{ blogData: blogData }} />
      </section>
    </Layout>
  );
};
export default Thoughts;
