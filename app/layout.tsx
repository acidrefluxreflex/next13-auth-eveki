"use client";
import "../styles/globals.css";
import styles from "./page.module.css";
import Navbar from "./components/src/Navbar";
import AnnounncementBanner from "./components/src/AnnouncementBanner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const url = new URL(location.href);

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        {url.pathname != "/jp" && <AnnounncementBanner />}

        <Navbar />

        {children}
      </body>
    </html>
  );
}
