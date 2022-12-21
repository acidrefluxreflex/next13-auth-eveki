//"use client";
import "../styles/globals.css";
import { AuthContextProvider } from "./components/context/AuthContext";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <AuthContextProvider>
          <Navbar />

          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
