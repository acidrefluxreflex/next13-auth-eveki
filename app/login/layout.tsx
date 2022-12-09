//"use client";
import "../../styles/globals.css";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <div><div 
  className="hero min-h-screen"
  style={{
   
    backgroundImage: `url(cyber.webp)`
  }}>{children}</div>
<Footer />
  </div>);
}
