import Layout from "../../components/layout";
import Head from "next/head";
import { getAllSlugs } from "../../lib/getAllFiles";
import { getPostById } from "../../lib/post";
import { PostItem } from "../../lib/types";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const paths = getAllSlugs("_posts");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const postData = getPostById("_posts", params.slug);
  return {
    props: {
      postData,
    },
  };
}

export default function BlogPost({ postData }: { postData: PostItem }) {
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
}
