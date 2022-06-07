import Head from "next/head";
import Link from "next/link";
import Header from "./Header";

const Layout = ({
  children,
  className = "",
}: {
  children: JSX.Element[];
  className?: string;
}) => {
  return (
    <div className="page-foundation">
      <Head>
        <title> Meet Dr. Cool</title>
      </Head>
      <Header />
      <main className={className}>{children}</main>
    </div>
  );
};

export default Layout;
