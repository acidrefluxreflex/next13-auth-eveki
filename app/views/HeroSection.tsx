import Link from "next/link";
import AppStoreButton from "../components/AppStoreButton";
import TypingText from "../components/TypingText";

export default function HeroSection() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(unsplash.webp)` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-7xl font-bold">Chat AI Mimics</h1>
          <TypingText />
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <button className="btn btn-primary">
            <Link href="/dashboard">Get Started</Link>
          </button>
          <AppStoreButton />
        </div>
      </div>
    </div>
  );
}
