"use client";
import styles from "./page.module.css";

import HeroSection from "./views/HeroSection";
import FeatureSection from "./views/FeatureSection";
import DetailSection from "./views/DetailSection";
import { motion, useScroll, useTransform } from "framer-motion";

import Footer from "./components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div className={styles.container}>
      <HeroSection />
      <main className={styles.main}>
        <FeatureSection />
        <DetailSection />
        <div className="wrapper"></div>
      </main>

      <Footer />
    </div>
  );
}
