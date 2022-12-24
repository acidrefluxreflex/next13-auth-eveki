import "../styles/globals.css";
import styles from "./page.module.css";
import type { AppProps } from "next/app";
import Navbar from "../app/components/src/Navbar";
import Footer from "../app/components/src/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
