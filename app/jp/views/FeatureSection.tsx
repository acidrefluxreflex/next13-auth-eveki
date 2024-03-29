import Image from "next/image";
import character from "../../../public/character.webp";
import chatImage from "../../../public/chat.webp";
import shareAI from "../../../public/shareAI.webp";
import WindowMockup from "../../components/WindowMockup";

export default function FeatureSection() {




  return (
    <div className="font-futura text-center p-9">
      <div className="">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-asagi from-botann">
            High Quality
          </span>{" "}
          Chat
        </h1>
        <h2 className="text-slate-400 m-3">
          いつでも質の高い自然な会話を
        </h2>
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-asagi from-botann">
            AI Personality
          </span>
        </h1>
        <h2 className="text-slate-400 m-3">
          個性や性格も思いのままに
        </h2>
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-asagi from-botann">
            Share Your AI
          </span>
        </h1>
        <h2 className="text-slate-400 m-3">
          AIは他の人にシェアすることも可能
        </h2>
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
