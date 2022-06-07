import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="theme-1 font-theme-1">
      <Head>
        <meta
          name="description"
          content="Personal website of Dr. Richard Cool"
        />
        <link rel="icon" href="/image/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main />
      <body>
        <NextScript />
      </body>
    </Html>
  );
}

Document();
