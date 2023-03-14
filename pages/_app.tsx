import Head from "next/head";
import Header from "../components/Header";
import "../styles/globals.css";
import "../styles/slick.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          content="initial-scale=1, minimum-scale=1, width=device-width"
          name="viewport"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
