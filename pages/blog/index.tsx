import type { InferGetStaticPropsType, NextPage } from "next";
import type { Article } from "../../@types/Article";
import BlogCard from "../../app/components/blog/BlogCard"; // srcから見た絶対パスで指定
import { client } from "../../lib/microClient"; // srcから見た絶対パスで指定
import "../globals.css";

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
    <ul className="flex">
      {blogs.map((blog) => (
        <li key={blog.id}>
          <BlogCard
            title={blog.title}
            src={blog.eyecatch.url}
            link={`/blog/${blog.id}`}
          ></BlogCard>
        </li>
      ))}
    </ul>
  );
};

export default Home;
