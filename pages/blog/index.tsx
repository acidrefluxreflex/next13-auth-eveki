import "../globals.css";
import Link from "next/link";
import type { InferGetStaticPropsType, NextPage } from "next";
import { client } from "../../lib/microClient";    // srcから見た絶対パスで指定
import type { Article } from "../../@types/Article";    // srcから見た絶対パスで指定
import styles from "../page.module.css";
import Navbar from "../../app/components/Navbar";
import Footer from "../../app/components/Footer";

// microCMSへAPIリクエスト
export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: "blog" });

  return {
    props: {
      blogs: blog.contents,
    },
  };
};

// Props（blogsとtags）の型
type Props = {
  blogs: Article[];
};




const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
    blogs,
  }: Props) => {
    return (
  
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
  
     
    )
  }

export default Home;