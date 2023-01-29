import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Layout from "@/component/layout";
import { ReactElement } from "react";

const Home = () => {
  return (
    <>
      <Head>
        <title>日本の城データストア</title>
      </Head>

      <main className={styles.main}>
        メイン
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
