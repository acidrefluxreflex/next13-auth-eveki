import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  link: string;
  src: string;
}

export default function BlogCard({ title, link, src }: Props) {
  return (
    <div>
      <div className="max-w-lg mx-auto">
        <div className=" bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
          <Link href={link}>
            <img
              className="rounded-t-lg"
              src={src}
              alt=""
              width={400}
              height={200}
            />
          </Link>
          <div className="p-5">
            <a href={link}>
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                {title}
              </h5>
            </a>
            <p className="font-normal text-gray-700 mb-3">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Link
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href={link}
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
