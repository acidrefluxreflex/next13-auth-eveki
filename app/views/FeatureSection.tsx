import WindowMockup from "../components/WindowMockup";
import chatImage from "../../public/chat.webp";
import character from "../../public/character.webp";
import shareAI from "../../public/shareAI.webp";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <div className="text-center p-9">
      <div className="">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            High Quality
          </span>{" "}
          Chat
        </h1>
        <div className="text-slate-400 m-3">Our AI always provides quality conversations</div>
        <WindowMockup>
          <Image
            src={chatImage}
            alt="chatImage"
            width={900}
            height={720}
            style={{ borderRadius: "0px 0px 5px 5px", overflow: "hidden" }}
          />
        </WindowMockup>
      </div>
      <div className="my-14">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Generate{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            AI Personality
          </span>
        </h1>
        <div className="text-slate-400 m-3">Our AI always provides quality conversations</div>
        <WindowMockup>
          <Image
            src={character}
            alt="chatImage"
            width={900}
            height={720}
            style={{ borderRadius: "0px 0px 5px 5px", overflow: "hidden" }}
          />
        </WindowMockup>
      </div>
      <div className="my-14">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Let's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Share Your AI
          </span>
        </h1>
        <div className="text-slate-400 m-3">Our AI always provides quality conversations</div>
        <WindowMockup>
          <Image
            src={shareAI}
            alt="chatImage"
            width={900}
            height={720}
            style={{ borderRadius: "0px 0px 5px 5px", overflow: "hidden" }}
          />
        </WindowMockup>
      </div>
    </div>
  );
}
