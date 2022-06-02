import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const AboutMe: NextPage = () => {
  const page = "aboutMe";
  return (
    <div>
      <Head>
        <title>Who Is Dr Cool...</title>
      </Head>

      <Header page={page} />
    </div>
  );
};
export default AboutMe;
