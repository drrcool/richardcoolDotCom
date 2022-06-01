import type { NextPage } from "next";
import { useThemeContext } from "../context/theme";
import Head from "next/head";
import Header from "../components/Header";
import { updateDoc } from "../utils/applyTheme";
import { useEffect } from "react";

const AboutMe: NextPage = () => {
  const [theme, setTheme] = useThemeContext();
  useEffect(() => {
    updateDoc(document, theme);
  });
  const page = "contact";
  return (
    <div>
      <Head>
        <title>Paging Dr Cool...</title>
      </Head>

      <Header page={page} />
    </div>
  );
};
export default AboutMe;
