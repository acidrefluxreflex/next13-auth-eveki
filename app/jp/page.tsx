"use client";
import Link from "next/link";
import HeroSection from "./views/HeroSection";
import styles from ".././page.module.css";
import FeatureSection from "./views/FeatureSection";
import DetailSection from "./views/DetailSection";
import ContactSection from "./views/ContactSection";
import QuestionsSection from "./views/QuestionsSection";
export default function JapanesePage() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <main className={styles.main}>
        <FeatureSection />
        <DetailSection />
        <div className="wrapper"></div>
        <QuestionsSection />
        <ContactSection />
      </main>
    </div>
  );
}
