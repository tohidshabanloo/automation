import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return <div>Hello</div>;
};

export async function getStaticProps() {
  return {
    redirect: {
      destination: "/firstPage",
      permanent: false,
      // statusCode: 301
    },
  };
}

export default Home;
