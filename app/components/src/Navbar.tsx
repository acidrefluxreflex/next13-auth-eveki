import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-edo-purple navbar bg-clip-padding backdrop-filter backdrop-blur-md  z-50 drop-shadow-md ">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <Image
            src="/EvekiTypo.png"
            alt="Vercel Logo"
            width={92}
            height={16}
          />
        </Link>
      </div>
      <div className="flex-none text-white">
        <Link href="/about" className="btn btn-ghost normal-case">About</Link>

          <Link href="/blog" className="btn btn-ghost normal-case" >Blog</Link>
      
      </div>
    </nav>
  );
}
