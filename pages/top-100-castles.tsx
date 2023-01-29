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
        { name: "根室チャシ跡群", link: "" },
        { name: "五稜郭", link: "" },
        { name: "松前城", link: "" },
      ],
      青森県: [
        { name: "弘前城", link: "" },
        { name: "根城", link: "" },
      ],
      岩手県: [{ name: "盛岡城", link: "" }],
      宮城県: [
        { name: "多賀城", link: "" },
        { name: "仙台城", link: "" },
      ],
      秋田県: [{ name: "久保田城", link: "" }],
      山形県: [{ name: "山形城", link: "" }],
      福島県: [
        { name: "二本松城", link: "" },
        { name: "会津若松城", link: "" },
        { name: "白河小峰城", link: "" },
      ],
    },
  },
  {
    region: "関東・甲信越",
    prefs: {
      茨城県: [{ name: "水戸城", link: "" }],
      栃木県: [{ name: "足利氏館", link: "" }],
      群馬県: [
        { name: "箕輪城　", link: "" },
        { name: "金山城　", link: "" },
      ],
      埼玉県: [
        { name: "川越城　", link: "" },
        { name: "鉢形城　", link: "" },
      ],
      千葉県: [{ name: "佐倉城", link: "" }],
      東京都: [
        { name: "江戸城　", link: "" },
        { name: "八王子城　", link: "" },
      ],
      神奈川: [{ name: "小田原城", link: "" }],
      山梨県: [
        { name: "武田氏館", link: "" },
        { name: "甲府城", link: "" },
      ],
      長野県: [
        { name: "松代城　", link: "" },
        { name: "上田城　", link: "" },
        { name: "小諸城　", link: "" },
        { name: "松本城　", link: "" },
        { name: "高遠城　", link: "" },
      ],
      新潟県: [
        { name: "新発田城", link: "" },
        { name: "春日山城", link: "" },
      ],
    },
  },
  {
    region: "北陸・東海",
    prefs: {
      富山県: [{ name: "高岡城", link: "" }],
      石川県: [
        { name: "七尾城", link: "" },
        { name: "金沢城", link: "" },
      ],
      福井県: [
        { name: "丸岡城", link: "" },
        { name: "一乗谷城", link: "" },
      ],
      岐阜県: [
        { name: "岩村城", link: "" },
        { name: "岐阜城", link: "" },
      ],
      静岡県: [
        { name: "山中城", link: "" },
        { name: "駿府城", link: "" },
        { name: "掛川城", link: "" },
      ],
      愛知県: [
        { name: "犬山城", link: "" },
        { name: "名古屋城", link: "" },
        { name: "岡崎城", link: "" },
        { name: "長篠城", link: "" },
      ],
      三重県: [
        { name: "伊賀上野城", link: "" },
        { name: "松阪城", link: "" },
      ],
    },
  },
  {
    region: "近畿",
    prefs: {
      滋賀県: [
        { name: "小谷城", link: "" },
        { name: "彦根城", link: "" },
        { name: "安土城", link: "" },
        { name: "観音寺城", link: "" },
      ],
      京都府: [{ name: "二条城", link: "" }],
      大阪府: [
        { name: "大阪城", link: "" },
        { name: "千早城", link: "" },
      ],
      兵庫県: [
        { name: "竹田城", link: "" },
        { name: "篠山城", link: "" },
        { name: "明石城", link: "" },
        { name: "姫路城", link: "" },
        { name: "赤穂城", link: "" },
      ],
      奈良県: [{ name: "高取城", link: "" }],
      和歌山県: [{ name: "和歌山城", link: "" }],
    },
  },
  {
    region: "中国・四国",
    prefs: {
      鳥取県: [{ name: "鳥取城", link: "" }],
      島根県: [
        { name: "松江城", link: "" },
        { name: "月山富田城", link: "" },
        { name: "津和野城", link: "" },
      ],
      岡山県: [
        { name: "津山城", link: "" },
        { name: "備中松山城", link: "" },
        { name: "鬼ノ城", link: "" },
        { name: "岡山城", link: "" },
      ],
      広島県: [
        { name: "福山城", link: "" },
        { name: "郡山城", link: "" },
        { name: "広島城", link: "" },
      ],
      山口県: [
        { name: "岩国城", link: "" },
        { name: "萩城", link: "" },
      ],
      徳島県: [{ name: "徳島城", link: "" }],
      香川県: [
        { name: "高松城", link: "" },
        { name: "丸亀城", link: "" },
      ],
      愛媛県: [
        { name: "今治城", link: "" },
        { name: "湯築城", link: "" },
        { name: "松山城", link: "" },
        { name: "大洲城", link: "" },
        { name: "宇和島城", link: "" },
      ],
      高知県: [{ name: "高知城", link: "" }],
    },
  },
  {
    region: "九州・沖縄",
    prefs: {
      福岡県: [
        { name: "福岡城", link: "" },
        { name: "大野城", link: "" },
      ],
      佐賀県: [
        { name: "名護屋城", link: "" },
        { name: "吉野ヶ里", link: "" },
        { name: "佐賀城", link: "" },
      ],
      長崎県: [
        { name: "平戸城", link: "" },
        { name: "島原城", link: "" },
      ],
      熊本県: [
        { name: "熊本城", link: "" },
        { name: "人吉城", link: "" },
      ],
      大分県: [
        { name: "大分府内城", link: "" },
        { name: "岡城", link: "" },
      ],
      宮崎県: [
        { name: "飫肥城", link: "" },
      ],
      鹿児島県: [
        { name: "鹿児島城", link: "" },
      ],
      沖縄県: [
        { name: "今帰仁城", link: "" },
        { name: "中城城", link: "" },
        { name: "首里城", link: "" },
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
        <a href={"/top-100-castles"}>日本100名城</a>
      </p>
      <h1>日本100名城</h1>

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
