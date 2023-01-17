import AppStoreButton from "../../components/src/AppStoreButton";
import TypingText from "../../components/TypingText";

export default function HeroSection() {
  return (
    <div
      className="hero min-h-screen items-center"
      style={{ backgroundImage: `url(unsplash.webp)` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center items-center  text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-7xl font-bold block">
            <p>Eveki</p>
            <p></p>
          </h1>
          <TypingText />
          <p className="mb-5">
            「Eveki」は自然な対話が可能なAIキャラクターを生成することができます。設定や口調といった細かい部分もプログラミングなしで自由に設定可能です。
          </p>
          <div></div>
          <AppStoreButton width={200} />
        </div>
      </div>
    </div>
  );
}
