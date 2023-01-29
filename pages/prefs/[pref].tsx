import Layout from "@/component/layout";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import styles from "@/styles/prefs/pref.module.scss";

const Pref = () => {
  const router = useRouter();
  const { pref } = router.query;

  return (
    <div className={styles.pref_container}>
      <p className={styles.pan_list}>
        <a href={"/"}>TOP</a>
        {" > "}
        <span>prefs</span>
        {" > "}
        <a href={"/top-100-castles"}>{pref}</a>
      </p>

      <h1>{pref}</h1>
    </div>
  );
};

Pref.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Pref;
