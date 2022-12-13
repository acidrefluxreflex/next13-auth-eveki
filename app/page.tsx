"use client";
import styles from "./page.module.css";
import AOS from "aos";
import HeroSection from "./views/HeroSection";
import FeatureSection from "./views/FeatureSection";
import DetailSection from "./views/DetailSection";
import { useDarkMode, useEffectOnce } from "usehooks-ts";

import Footer from "./components/Footer";

export default function Home() {
  useEffectOnce(() => {
    AOS.init({
      once: true,
      // Animations always disabled in dev mode; disabled on phones in prod
      disable: process.env.NODE_ENV === "development" ? true : "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

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
