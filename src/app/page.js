import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 data-sel="title">Welcome</h1>
        <p>to the jungle</p>


        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href=""
            target="_blank"
            rel="noopener noreferrer"
            data-sel="go"
          >
            Go have fun!
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eat
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sleep
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play
        </a>
      </footer>
    </div>
  );
}
