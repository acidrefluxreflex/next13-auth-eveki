// pages/blog/[id].tsx

import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage
} from "next";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import type { Article } from "../../@types/Article";
import Layout from "../../app/components/BlogLayout";
import { client } from "../../lib/microClient";
import "./globals.css";
import styles from "./page.module.css";

// APIリクエストを行うパスを指定
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// microCMSへAPIリクエスト
export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const id = context.params?.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
      content: data,
    },
  };
};

// Props（blog）の型
type Props = {
  blog: Article;
  content: string;
};

const BlogId: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blog,
  content,
}: Props) => {
  return (
    <Layout title={blog.title}  >
      <div className={styles.main} >
        <img
          src={blog.eyecatch.url}
          width={800}
          height={540}
          alt={blog.title}
          className={styles.blogContentImg}
        />
        <h1 className="text-lg">{blog.title}</h1>
        {blog.tags.map((tag) => (
          <li key={tag.id}>#{tag.tag}</li>
        ))}
        <div className="blog_content">
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.content}`,
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default BlogId;
