import { client } from '../../lib/microClient';
import Link from 'next/link';
import type { Article, Tag } from "../../@types/Article";

type Props = {
    blogs: Article[];
    tags: Tag[];
  };

export default function Blog(){
    return (
      <div>
        <ul>
         momo
        </ul>
      </div>
    );
  }
  
  // データをテンプレートに受け渡す部分の処理を記述します




