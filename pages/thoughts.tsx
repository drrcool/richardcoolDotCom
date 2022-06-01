import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Thoughts: NextPage = () => {
  const page = "thoughts";
  return (
    <div>
      <Head>
        <title>Paging Dr Cool...</title>
      </Head>

      <Header page={page} />
    </div>
  );
};
export default Thoughts;
