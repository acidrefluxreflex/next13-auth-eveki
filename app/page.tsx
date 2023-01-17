"use client";
import styles from "./page.module.css";

import HeroSection from "./views/HeroSection";
import FeatureSection from "./views/FeatureSection";
import DetailSection from "./views/DetailSection";
import {  useScroll, useTransform } from "framer-motion";
import ContactSection from "./views/ContactSection";
import Footer from "./components/src/Footer";

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
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
