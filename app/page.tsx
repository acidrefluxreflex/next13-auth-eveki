"use client";
import styles from "./page.module.css";
import Link from "next/link";
import HeroSection from "./views/HeroSection";
import FeatureSection from "./views/FeatureSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <main className={styles.main}>
        <FeatureSection />
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>
        <>
          <Link href="/signup">signup</Link>
          <Link href="/login">login</Link>
        </>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>app/page.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://beta.nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js 13</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>Deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
