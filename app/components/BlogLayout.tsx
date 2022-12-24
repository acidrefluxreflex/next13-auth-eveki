import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./src/Navbar";
import Footer from "./src/Footer";

interface Props {
  children: ReactNode;
  title?: string;
}
const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={`flex  flex-col `}>
        <div className="flex-1 px-4 md:px-18 xl:px-36  blogContent">
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
