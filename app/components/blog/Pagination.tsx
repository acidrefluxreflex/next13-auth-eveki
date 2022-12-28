import Link from "next/link";
import Router from 'next/router';


export const Pagination = ({ totalCount }: any) => {
  const PER_PAGE = 5;

  const range = (start: any, end: any) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={ `/blog/page/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};