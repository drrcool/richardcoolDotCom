import type { NextPage } from "next";
import { useThemeContext } from "../context/theme";
import Head from "next/head";
import Header from "../components/Header";
import { updateDoc } from "../utils/applyTheme";
import { useEffect } from "react";
import Interests from "../components/Interests";
import Skills from "../components/Skills";
import KnowMore from "../components/KnowMore";

const AboutMe: NextPage = () => {
  const [theme, setTheme] = useThemeContext();
  useEffect(() => {
    updateDoc(document, theme);
  });
  const page = "who_am_i";
  return (
    <div>
      <Head>
        <title>Who Is Dr Cool...</title>
      </Head>

      <Header page={page} />
      <Interests />
      <Skills />
      <KnowMore />
    </div>
  );
};
export default AboutMe;
