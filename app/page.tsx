"use client";
import styles from "./page.module.css";
import Link from "next/link";
import HeroSection from "./views/HeroSection";
import FeatureSection from "./views/FeatureSection";
import DetailSection from "./views/DetailSection";

import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <main className={styles.main}>
        <FeatureSection />
        <DetailSection />
      </main>

      <Footer />
    </div>
  );
}
