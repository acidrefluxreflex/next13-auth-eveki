import WindowMockup from "../components/WindowMockup";
import chatImage from "../../public/chat.webp";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <div className="text-center">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          High Quality
        </span>{" "}
        Chat
      </h1>
      <WindowMockup>
        <Image src={chatImage} alt="chatImage" width={700} height={600} style={{borderRadius: '5px', overflow: 'hidden'}}/>
      </WindowMockup>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Generate{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          AI Personality
        </span>
      </h1>


      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Let's{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Share Your AI
        </span>
      </h1>
    </div>
  );
}
