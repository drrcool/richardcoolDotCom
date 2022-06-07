import type { NextPage } from "next";
import Head from "next/head";
import ExperienceGrid from "../components/ExperienceGrid";
import Header from "../components/Header";
import Layout from "../components/layout";
import TextBlock from "../components/TextBlock";
import { getSortedPostData } from "../lib/post";
import { GetStaticProps } from "next";
import { PostItem } from "../lib/types";
import { getNewestPost } from "../lib/getNewestPost";

export const getStaticProps: GetStaticProps = async () => {
  const postData = getSortedPostData("_experienceHeader");
  const experiencePosts = getSortedPostData("_experiences");
  return {
    props: {
      postData,
      experiencePosts,
    },
  };
};

const Experience = ({
  postData,
  experiencePosts,
}: {
  postData: PostItem[];
  experiencePosts: PostItem[];
}) => {
  const headerPost = getNewestPost(postData);
  const { title, content } = headerPost;
  console.log(experiencePosts);
  return (
    <Layout>
      <Head>
        <title>Paging Dr Cool...</title>
      </Head>

      <div className="experience-header">
        <h2 className="experience-header-title">{title}</h2>
        <p className="experience-header-content">{content}</p>
      </div>
      <ExperienceGrid posts={experiencePosts} />
    </Layout>
  );
};
export default Experience;
