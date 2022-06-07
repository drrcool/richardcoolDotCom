import { getAllSlugs } from "../../lib/getAllFiles";
import { getPostById } from "../../lib/post";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { PostItem } from "../../lib/types";
import Head from "next/head";

// Setup getStaticPaths for dynamic routing
export async function getStaticPaths() {
  const paths = getAllSlugs("_experiences");
  return {
    paths,
    fallback: false,
  };
}

// Now get static props to get the post data
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const postData = getPostById("_experiences", params.slug);
  return {
    props: {
      postData,
    },
  };
}

const ExperienceDeepDive = ({ postData }: { postData: PostItem }) => {
  console.log(postData);
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1>{postData.title}</h1>
      <p>{postData.content}</p>
    </Layout>
  );
};
export default ExperienceDeepDive;
