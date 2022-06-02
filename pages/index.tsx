import Head from "next/head";
import Header from "../components/Header";
import KnowMore from "../components/KnowMore";
import HeroPage from "../components/HeroPage";
import Interests from "../components/Interests";
import Skills from "../components/Skills";
import Background from "../components/Background";
import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  const page = "home";
  return (
    <>
      <div className="  container bg-black mx-auto h-screen">
        <Head>
          <title>You Found Dr. Cool</title>
        </Head>
        <Header page={page} />
        <HeroPage />
      </div>
      <div className="fixed bg-black  h-full ">
        <div className="block bg-red-400 w-[100vw] h-[100vh]">
          <Interests />
        </div>
      </div>
      <div className="block bg-red-400 w-[100vw] h-[100vh] mt-40">
        <Skills />
        <KnowMore />
      </div>
    </>
  );
}
export default Home;
