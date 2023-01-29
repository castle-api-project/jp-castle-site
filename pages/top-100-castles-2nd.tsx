import Layout from "@/component/layout";
import styles from "@/styles/top-100-castles.module.scss";
import { ReactElement } from "react";

type Top100castles = {
  region: string;
  prefs: {
    [index: string]: { name: string; link: string }[];
  };
}[];
const top100castles: Top100castles = [
  {
    region: "北海道・東北",
    prefs: {
      北海道: [
        { name: "志苔館", link: "" },
        { name: "上ノ国勝山館", link: "" },
      ],
      青森県: [{ name: "浪岡城", link: "" }],
      岩手県: [{ name: "九戸城", link: "" }],
      宮城県: [{ name: "白石城", link: "" }],
      秋田県: [
        { name: "脇本城", link: "" },
        { name: "秋田城", link: "" },
      ],
      山形県: [
        { name: "鶴ヶ岡城", link: "" },
        { name: "米沢城", link: "" },
      ],
      福島県: [
        { name: "三春城", link: "" },
        { name: "向羽黒山城", link: "" },
      ],
    },
  },
  {
    region: "関東・甲信越",
    prefs: {
      茨城県: [
        { name: "笠間城", link: "" },
        { name: "土浦城", link: "" },
      ],
      栃木県: [{ name: "唐沢山城", link: "" }],
      群馬県: [
        { name: "名胡桃城", link: "" },
        { name: "沼田城", link: "" },
        { name: "岩櫃城", link: "" },
      ],
      埼玉県: [
        { name: "忍城", link: "" },
        { name: "杉山城", link: "" },
        { name: "菅谷館", link: "" },
      ],
      千葉県: [
        { name: "本佐倉城", link: "" },
        { name: "大多喜城", link: "" },
      ],
      東京都: [
        { name: "滝山城", link: "" },
        { name: "品川台場", link: "" },
      ],
      神奈川: [
        { name: "小机城", link: "" },
        { name: "石垣山城", link: "" },
      ],
      山梨県: [
        { name: "新府城", link: "" },
        { name: "要害山城", link: "" },
      ],
      長野県: [
        { name: "龍岡城", link: "" },
        { name: "高島城", link: "" },
      ],
      新潟県: [
        { name: "村上城", link: "" },
        { name: "高田城", link: "" },
        { name: "鮫ケ尾城", link: "" },
      ],
    },
  },
  {
    region: "北陸・東海",
    prefs: {
      富山県: [
        { name: "富山城", link: "" },
        { name: "増山城", link: "" },
      ],
      石川県: [{ name: "鳥越城", link: "" }],
      福井県: [
        { name: "福井城", link: "" },
        { name: "越前大野城", link: "" },
        { name: "佐柿国吉城", link: "" },
        { name: "玄蕃尾城※", link: "" },
      ],
      岐阜県: [
        { name: "郡上八幡城", link: "" },
        { name: "苗木城", link: "" },
        { name: "美濃金山城", link: "" },
        { name: "大垣城", link: "" },
      ],
      静岡県: [
        { name: "興国寺城", link: "" },
        { name: "諏訪原城", link: "" },
        { name: "高天神城", link: "" },
        { name: "浜松城", link: "" },
      ],
      愛知県: [
        { name: "小牧山城", link: "" },
        { name: "古宮城", link: "" },
        { name: "吉田城", link: "" },
      ],
      三重県: [
        { name: "津城", link: "" },
        { name: "多気北畠氏城館", link: "" },
        { name: "田丸城", link: "" },
        { name: "赤木城", link: "" },
      ],
    },
  },
  {
    region: "近畿",
    prefs: {
      滋賀県: [
        { name: "鎌刃城", link: "" },
        { name: "玄蕃尾城※", link: "" },
        { name: "八幡山城", link: "" },
      ],
      京都府: [{ name: "福知山城", link: "" }],
      大阪府: [
        { name: "芥川山城", link: "" },
        { name: "飯盛城", link: "" },
        { name: "岸和田城", link: "" },
      ],
      兵庫県: [
        { name: "出石城・有子山城", link: "" },
        { name: "黒井城", link: "" },
        { name: "洲本城", link: "" },
      ],
      奈良県: [
        { name: "大和郡山城", link: "" },
        { name: "宇陀松山城", link: "" },
      ],
      和歌山県: [{ name: "新宮城", link: "" }],
    },
  },
  {
    region: "中国・四国",
    prefs: {
      鳥取県: [
        { name: "若桜鬼ケ城", link: "" },
        { name: "米子城", link: "" },
      ],
      島根県: [{ name: "浜田城", link: "" }],
      岡山県: [{ name: "備中高松城", link: "" }],
      広島県: [
        { name: "三原城", link: "" },
        { name: "新高山城", link: "" },
      ],
      山口県: [{ name: "大内氏館・高嶺城", link: "" }],
      徳島県: [
        { name: "勝瑞城", link: "" },
        { name: "一宮城", link: "" },
      ],
      香川県: [{ name: "引田城", link: "" }],
      愛媛県: [
        { name: "能島城", link: "" },
        { name: "河後森城", link: "" },
      ],
      高知県: [{ name: "岡豊城", link: "" }],
    },
  },
  {
    region: "九州・沖縄",
    prefs: {
      福岡県: [
        { name: "小倉城", link: "" },
        { name: "水城", link: "" },
        { name: "久留米城", link: "" },
        { name: "基肄城※", link: "" },
      ],
      佐賀県: [
        { name: "基肄城※", link: "" },
        { name: "唐津城", link: "" },
      ],
      長崎県: [
        { name: "金田城", link: "" },
        { name: "福江城", link: "" },
        { name: "原城", link: "" },
      ],
      熊本県: [
        { name: "鞠智城", link: "" },
        { name: "八代城", link: "" },
      ],
      大分県: [
        { name: "中津城", link: "" },
        { name: "角牟礼城", link: "" },
        { name: "臼杵城", link: "" },
        { name: "佐伯城", link: "" },
      ],
      宮崎県: [
        { name: "延岡城", link: "" },
        { name: "佐土原城", link: "" },
      ],
      鹿児島県: [
        { name: "志布志城", link: "" },
        { name: "知覧城", link: "" },
      ],
      沖縄県: [
        { name: "座喜味城", link: "" },
        { name: "勝連城", link: "" },
      ],
    },
  },
];

const Top100Castle = () => {
  return (
    <main className={styles.top_100_castles}>
      <p className={styles.pan_list}>
        <a href={"/"}>TOP</a>
        {" > "}
        <a href={"/top-100-castles"}>続日本100名城</a>
      </p>
      <h1>続日本100名城</h1>

      <div className={styles.container}>
        {top100castles.map((regionData, i) => {
          return (
            <div className={styles.region_panel} key={i}>
              <h3 className={styles.region_name}>{regionData.region}</h3>

              {Object.keys(regionData.prefs).map((pref, j) => {
                return (
                  <div className={styles.pref_panel} key={j}>
                    <div className={styles.pref_name}>{pref}</div>

                    <div className={styles.castle_panel}>
                      {regionData.prefs[pref].map((castle, k) => {
                        return (
                          <div className={styles.castle_name} key={k}>
                            {castle.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
};

Top100Castle.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Top100Castle;
