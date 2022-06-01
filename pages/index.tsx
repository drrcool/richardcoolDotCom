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
      <Head>
        <title>You Found Dr. Cool</title>
      </Head>
      <Background />
      <Header page={page} />

      <HeroPage />

      <Interests />

      <Skills />

      <KnowMore />
    </>
  );
}
export default Home;
