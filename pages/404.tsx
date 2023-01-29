import { ReactElement } from "react";
import Link from "next/link";
import Layout from "@/component/layout";
import styles from "@/styles/404.module.scss";

const NotFound = () => {

  return (
    <div className={styles.not_found}>
      <h1>404 Not Found!</h1>
      <p>The requested URL was not found on this server.</p>

      <Link href={"/"} className={styles.to_top}>
        TOPページへ
      </Link>
    </div>
  );
};

NotFound.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default NotFound;
