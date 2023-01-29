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

      <div className={styles.main}>
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
            <Link href={"/prefs/北海道"} className={styles.pref_name}>
              北海道
            </Link>
            <Link href={"/prefs/青森県"} className={styles.pref_name}>
              青森県
            </Link>
            <Link href={"/prefs/岩手県"} className={styles.pref_name}>
              岩手県
            </Link>
            <Link href={"/prefs/宮城県"} className={styles.pref_name}>
              宮城県
            </Link>
            <Link href={"/prefs/秋田県"} className={styles.pref_name}>
              秋田県
            </Link>
            <Link href={"/prefs/山形県"} className={styles.pref_name}>
              山形県
            </Link>
            <Link href={"/prefs/福島県"} className={styles.pref_name}>
              福島県
            </Link>
          </div>

          <div className={styles.region_panel}>
            <p className={styles.region_name}>関東</p>
            <Link href={"/prefs/茨城県"} className={styles.pref_name}>茨城県</Link>
            <Link href={"/prefs/栃木県"} className={styles.pref_name}>栃木県</Link>
            <Link href={"/prefs/群馬県"} className={styles.pref_name}>群馬県</Link>
            <Link href={"/prefs/埼玉県"} className={styles.pref_name}>埼玉県</Link>
            <Link href={"/prefs/千葉県"} className={styles.pref_name}>千葉県</Link>
            <Link href={"/prefs/東京県"} className={styles.pref_name}>東京県</Link>
            <Link href={"/prefs/神奈川県"} className={styles.pref_name}>神奈川県</Link>
          </div>

          <div className={styles.region_panel}>
            <p className={styles.region_name}>甲信越</p>
            <Link href={"/prefs/新潟県"} className={styles.pref_name}>新潟県</Link>
            <Link href={"/prefs/山梨県"} className={styles.pref_name}>山梨県</Link>
            <Link href={"/prefs/長野県"} className={styles.pref_name}>長野県</Link>
          </div>

          <div className={styles.region_panel}>
            <p className={styles.region_name}>北陸</p>
            <Link href={"/prefs/富山県"} className={styles.pref_name}>富山県</Link>
            <Link href={"/prefs/石川県"} className={styles.pref_name}>石川県</Link>
            <Link href={"/prefs/福井県"} className={styles.pref_name}>福井県</Link>
          </div>

          <div className={styles.region_panel}>
            <p className={styles.region_name}>東海</p>
            <Link href={"/prefs/静岡県"} className={styles.pref_name}>静岡県</Link>
            <Link href={"/prefs/岐阜県"} className={styles.pref_name}>岐阜県</Link>
            <Link href={"/prefs/愛知県"} className={styles.pref_name}>愛知県</Link>
            <Link href={"/prefs/三重県"} className={styles.pref_name}>三重県</Link>
          </div>

          <div className={styles.region_panel}>
            <p className={styles.region_name}>近畿</p>
            <Link href={"/prefs/滋賀県"} className={styles.pref_name}>滋賀県</Link>
            <Link href={"/prefs/京都府"} className={styles.pref_name}>京都府</Link>
            <Link href={"/prefs/大阪府"} className={styles.pref_name}>大阪府</Link>
            <Link href={"/prefs/兵庫県"} className={styles.pref_name}>兵庫県</Link>
            <Link href={"/prefs/奈良県"} className={styles.pref_name}>奈良県</Link>
            <Link href={"/prefs/和歌山県"} className={styles.pref_name}>和歌山県</Link>
          </div>

          <div className={styles.region_panel}>
            <p className={styles.region_name}>中国</p>
            <Link href={"/prefs/鳥取県"} className={styles.pref_name}>鳥取県</Link>
            <Link href={"/prefs/島根県"} className={styles.pref_name}>島根県</Link>
            <Link href={"/prefs/岡山県"} className={styles.pref_name}>岡山県</Link>
            <Link href={"/prefs/広島県"} className={styles.pref_name}>広島県</Link>
            <Link href={"/prefs/山口県"} className={styles.pref_name}>山口県</Link>
          </div>

          <div className={styles.region_panel}>
            <p className={styles.region_name}>四国</p>
            <Link href={"/prefs/徳島県"} className={styles.pref_name}>徳島県</Link>
            <Link href={"/prefs/香川県"} className={styles.pref_name}>香川県</Link>
            <Link href={"/prefs/愛媛県"} className={styles.pref_name}>愛媛県</Link>
            <Link href={"/prefs/高知県"} className={styles.pref_name}>高知県</Link>
          </div>

          <div className={styles.region_panel}>
            <p className={styles.region_name}>九州</p>
            <Link href={"/prefs/福岡県"} className={styles.pref_name}>福岡県</Link>
            <Link href={"/prefs/佐賀県"} className={styles.pref_name}>佐賀県</Link>
            <Link href={"/prefs/長崎県"} className={styles.pref_name}>長崎県</Link>
            <Link href={"/prefs/熊本県"} className={styles.pref_name}>熊本県</Link>
            <Link href={"/prefs/大分県"} className={styles.pref_name}>大分県</Link>
            <Link href={"/prefs/鹿児島県"} className={styles.pref_name}>鹿児島県</Link>
            <Link href={"/prefs/沖縄県"} className={styles.pref_name}>沖縄県</Link>
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
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
