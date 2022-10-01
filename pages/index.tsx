import Head from "next/head";
import { useState } from "react";
import HeroPage from "../components/HeroPage";
import Interests from "../components/Interests";
import KnowMore from "../components/KnowMore";
import Layout from "../components/layout";
import Skills from "../components/Skills";
import { getSortedPostData } from "../lib/post";
import { PostItem } from "../lib/types";

export async function getStaticProps() {
  const interestData = getSortedPostData("_interests");
  const skillData = getSortedPostData("_skills");
  return {
    props: {
      interestData,
      skillData,
    },
  };
}

function Home({
  interestData,
  skillData,
}: {
  interestData: PostItem[];
  skillData: PostItem[];
}) {
  const [count, setCount] = useState(0);

  const page = "home";
  return (
    <Layout>
      <div className="  container bg-black mx-auto h-screen">
        <Head>
          <title>You Found Dr. Cool</title>
        </Head>

        <HeroPage />
      </div>
      <div className="fixed bg-black  h-full ">
        <div className="block bg-red-400 w-[100vw] h-[100vh]">
          <Interests interestData={interestData} />
        </div>
      </div>
      <div className="block bg-red-400 w-[100vw] h-[100vh] mt-40">
        <Skills skillData={skillData} />
        <KnowMore />
      </div>
    </Layout>
  );
}
export default Home;
