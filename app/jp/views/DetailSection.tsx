import {
  ChatIcon,
  CreateIcon,
  MobileIcon,
  ShareIcon,
  ShieldIcon,
  SmileIcon,
} from "../../components/src/Icons";

export default function DetailSection() {
  const iconSize = 30;

  const subTitleClassName = "ml-4 text-3xl lg:text-4x";
  const bodyTextClassName =
    "leading-loose font-verdana text-gray-500 dark:text-custom-gray text-sm";

  return (
    <div className="container   max-w-4xl">
      <h1 className="mb-4 text-4xl  text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r  to-asagi from-botann">
          Features
        </span>
      </h1>
      <div className="flex flex-wrap my-12 dark:text-white">
        <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 text-white bg-edo-purple rounded-md">
              <ChatIcon width={iconSize} height={iconSize} />
            </div>
            <div className={subTitleClassName}>Chat</div>
          </div>
          <p className={bodyTextClassName}>
            Receive more sales by selling across multple sales channels instead
            of just having a single point of entry.
          </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 text-white bg-edo-purple rounded-md">
              <CreateIcon width={iconSize} height={iconSize} />
            </div>
            <div className={subTitleClassName}>カンタン作成</div>
          </div>
          <p className={bodyTextClassName}>
            ただ質問に答えるだけで対話AIを作成することができます。プログラミングの知識はもちろん不要です。
          </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 text-white bg-edo-purple rounded-md">
              <ShieldIcon width={iconSize} height={iconSize} />
            </div>
            <div className={subTitleClassName}>安全性</div>
          </div>
          <p className={bodyTextClassName}>
            表現をフィルタリングする機能により、AIからの過激な言葉や差別的発言を防止します。
          </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 text-white bg-edo-purple rounded-md">
              <ShareIcon width={iconSize} height={iconSize} />
            </div>
            <div className={subTitleClassName}>シェア</div>
          </div>
          <p className={bodyTextClassName}>
            作成したAIは簡単かつ軽量に他の人へ共有することができます。会話文を文章として出力することも可能です。
          </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 text-white bg-edo-purple rounded-md">
              <MobileIcon width={iconSize} height={iconSize} />
            </div>
            <div className={subTitleClassName}>Mobile</div>
          </div>
          <p className={bodyTextClassName}>
            Modify products with extra properties and achieve the maximum output
            for each installed sales channel.
          </p>
        </div>
        <div className="w-full p-8 md:w-1/2 lg:w-1/3">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 text-white bg-edo-purple rounded-md">
              <SmileIcon width={iconSize} height={iconSize} />
            </div>
            <div className={subTitleClassName}>Custom</div>
          </div>
          <p className={bodyTextClassName}>
            Build unique product titles and descriptions instead of spending
            days manually editing each product.
          </p>
        </div>
      </div>
    </div>
  );
}
