import {
    GetStaticPaths,
    GetStaticProps,
    InferGetStaticPropsType,
    NextPage,
  } from "next";
import type { Article } from "../../../@types/Article";

import Link from "next/link";
import { client } from "../../../lib/microClient";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function CategoryId({ blogs } : Props) {
    // カテゴリーに紐付いたコンテンツがない場合に表示
    if (blogs.length === 0) {
      return <div>ブログコンテンツがありません</div>;
    }
    return (
      <div>
        <ul>
          {blogs.map((blog: any) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  // 静的生成のためのパスを指定します
  export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const data = await client.get({ endpoint: "categories" });
  
    const paths = data.contents.map((content: any) => `/blog/category/${content.id}`);
    return { paths, fallback: false };
  };
  
  type Props = {
    blogs: Article[];
  };

  // データをテンプレートに受け渡す部分の処理を記述します
  export const getStaticProps = async () => {
    const blog = await client.get({ endpoint: "blog" });
  
    return {
      props: {
        blogs: blog.contents,
      },
    };
  };