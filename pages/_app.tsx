import "../styles/globals.css";
import styles from "./page.module.css";
import type { AppProps } from "next/app";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
