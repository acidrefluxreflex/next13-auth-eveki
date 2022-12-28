import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  blogPageInfo?: {
    categoryId: string;
    categoryName: string;
    blogTitle: string;
  };
  pageTitle?: string;
}

const Breadcrumb: React.FC<Props> = ({ blogPageInfo, pageTitle }) => {
  const router = useRouter();
  const path = router.asPath;


  return (
    <nav  aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
      <div>
        <Link href="/blog">blog</Link>
      </div>
      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>

      <>
   
          <Link
            href="/blog/category/[id]"
            as={`/blog/category/${blogPageInfo?.categoryId}`}
          >
            {blogPageInfo?.categoryName}
          </Link>
          <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>

      
        <div>{blogPageInfo?.blogTitle}</div>
      </>
      </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
