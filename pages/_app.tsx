import "../styles/globals.scss";
import Layout from "../components/Layout";
import Image from "next/image";
import youtubeImg from "../public/youtube.png";
import Head from "next/head";
import React from "react";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <Image
        src={youtubeImg}
        width={750}
        height={350}
        alt="youtube"
        placeholder="blur"
      />
    </Layout>
  );
}
