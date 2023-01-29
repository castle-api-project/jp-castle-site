import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.scss";
import Layout from "@/component/layout";
import { ReactElement } from "react";

const Home = () => {
  return (
    <>
      <Head>
        <title>城郭データストア</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.top_castle_container}>
          <Link href={"/top-100-castles"} className={styles.top_castle}>
            日本100名城
          </Link>
          <Link href={"/top-100-castles-2nd"} className={styles.top_castle}>
            続日本100名城
          </Link>
        </div>

        <div className={styles.prefs_container}>
          <div className={styles.region_panel}>
            <p className={styles.region_name}>北海道・東北</p>
            <p className={styles.pref_name}>北海道</p>
            <p className={styles.pref_name}>青森県</p>
            <p className={styles.pref_name}>岩手県</p>
            <p className={styles.pref_name}>宮城県</p>
            <p className={styles.pref_name}>秋田県</p>
            <p className={styles.pref_name}>山形県</p>
            <p className={styles.pref_name}>福島県</p>
          </div>

          <div className={styles.region_panel}>
            <p className={styles.region_name}>関東</p>
            <p className={styles.pref_name}>茨城県</p>
            <p className={styles.pref_name}>栃木県</p>
            <p className={styles.pref_name}>群馬県</p>
            <p className={styles.pref_name}>埼玉県</p>
            <p className={styles.pref_name}>千葉県</p>
            <p className={styles.pref_name}>東京県</p>
            <p className={styles.pref_name}>神奈川県</p>
          </div>

          <div className={styles.region_panel}>
            <p className={styles.region_name}>甲信越</p>
            <p className={styles.pref_name}>新潟県</p>
            <p className={styles.pref_name}>山梨県</p>
            <p className={styles.pref_name}>長野県</p>
          </div>

          <div className={styles.region_panel}>
            <p className={styles.region_name}>北陸</p>
            <p className={styles.pref_name}>富山県</p>
            <p className={styles.pref_name}>石川県</p>
            <p className={styles.pref_name}>福井県</p>
          </div>

          <div className={styles.region_panel}>
            <p className={styles.region_name}>東海</p>
            <p className={styles.pref_name}>静岡県</p>
            <p className={styles.pref_name}>岐阜県</p>
            <p className={styles.pref_name}>愛知県</p>
            <p className={styles.pref_name}>三重県</p>
          </div>

          <div className={styles.region_panel}>
            <p className={styles.region_name}>近畿</p>
            <p className={styles.pref_name}>滋賀県</p>
            <p className={styles.pref_name}>京都府</p>
            <p className={styles.pref_name}>大阪府</p>
            <p className={styles.pref_name}>兵庫県</p>
            <p className={styles.pref_name}>奈良県</p>
            <p className={styles.pref_name}>和歌山県</p>
          </div>

          <div className={styles.region_panel}>
            <p className={styles.region_name}>中国</p>
            <p className={styles.pref_name}>鳥取県</p>
            <p className={styles.pref_name}>島根県</p>
            <p className={styles.pref_name}>岡山県</p>
            <p className={styles.pref_name}>広島県</p>
            <p className={styles.pref_name}>山口県</p>
          </div>

          <div className={styles.region_panel}>
            <p className={styles.region_name}>四国</p>
            <p className={styles.pref_name}>徳島県</p>
            <p className={styles.pref_name}>香川県</p>
            <p className={styles.pref_name}>愛媛県</p>
            <p className={styles.pref_name}>高知県</p>
          </div>

          <div className={styles.region_panel}>
            <p className={styles.region_name}>九州</p>
            <p className={styles.pref_name}>福岡県</p>
            <p className={styles.pref_name}>佐賀県</p>
            <p className={styles.pref_name}>長崎県</p>
            <p className={styles.pref_name}>熊本県</p>
            <p className={styles.pref_name}>大分県</p>
            <p className={styles.pref_name}>鹿児島県</p>
            <p className={styles.pref_name}>沖縄県</p>
          </div>
        </div>

        <div className={styles.about_container}>
          <p className={styles.title}>このサイトについて</p>
          <p className={styles.about}>
            日本の城の情報を簡単に得られるようにする事を目的として、管理者(
            <a
              href="https://satooru.me"
              target={"_blank"}
              rel={"noreferrer"}
              className={styles.link}
            >
              SatooRu
            </a>
            )が制作したサイトです。
            管理者が公開している日本の城APIの情報を表示しています。追加や修正があれば
            <a
              href="https://castle-api-app.vercel.app/"
              target={"_blank"}
              rel={"noreferrer"}
              className={styles.link}
            >
              こちら
            </a>
            からご協力お願いします。
            このサイト上の画像・動画・情報その他の利用は営利・非営利問わず可能です。
            日本の城APIについては
            <a
              href="https://github.com/SatooRu65536/jp-castle-api"
              target={"_blank"}
              rel={"noreferrer"}
              className={styles.link}
            >
              こちら
            </a>
            をご覧ください。
          </p>
        </div>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
