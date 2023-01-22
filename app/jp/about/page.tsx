import Footer from "../../components/src/Footer";

export default function About() {
  const font_h1 = "text-4xl font-bold mt-7 text-botann";

  const font_h2 = "text-3xl font-bold mt-7";

  const font_p = "mt-7";

  return (
    <div>
      <div className="container block  max-w-3xl p-0 xs:p-5 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <article
          id="ca6526d0-2c19-448b-9008-f48bd6a07f42"
          className="page sans"
        >
          <div className="page-body">
            <h1 id="48f5b1f0-915b-4e70-af7b-ad49a7a79fb6" className={font_h1}>
              私たちについて
            </h1>
            <p id="e9bd4acf-5490-4cd5-be03-12f7f347aa50" className={font_p}>
              私たちは精神的な向上に着目したソフトウェア開発を行っています。昨日よりもよりよい生き方を探す人々のためにメンタルヘルスや習慣継続支援のアプリなどをリリースしています。またこれらの活動を支援するための情報発信も同時に行っています。
            </p>
            <h1 id="8f9855c4-f8de-4ab0-991d-51604883b5df" className={font_h1}>
              プロダクト
            </h1>
            <h2 id="b7d7865f-6806-451f-bfee-b79ec5b0506c" className={font_h2}>
              Eveki
            </h2>
            <p id="68479dcc-caae-4220-952e-e9cb222cf5eb" className={font_p}>
              個性や人格を反映させることのできる会話AIです。従来のものと異なり、無機質ではない人間味のある会話をすることを重点において開発されています。また抽象的な質問だけでなく「疲れた」や「暇なんだよね」など明確な回答の存在しない発話に対しても応答可能です。
            </p>
            <p id="24fe3ec5-ddd3-4fd1-9480-442ff85455f9" className={font_p}>
              高齢者施設などでの孤独感の解消、キャラクターとしての広報活動などを行うことが可能です。
            </p>
            <h2 id="877da3ff-6944-4c0a-b5d4-a48799c2016c" className={font_h2}>
              Homer
            </h2>
            <p id="3f6a70ec-8bd1-4d89-9610-e5d306a2f2bb" className={font_p}>
              文章に対して文体や表現を検査することのできる人工知能です。その文が正式な文体として書かれているのか、公的には不適切な言葉が使われていないかを瞬時に判断します。またネット上において誤解や拡大解釈をされてしまうこと、いわゆる「炎上」の防止も行います。
            </p>
            <h2 id="9ebcd8db-b881-4d0b-aa45-0809d60e537c" className={font_h2}>
              Reboot
            </h2>
            <p id="6f6d6ec5-156e-4ba6-9bee-71b828c7ea7e" className={font_p}>
              性的コンテンツをフィルタリングすることのできるアプリです。これを使用することでページ内の過激な表現を避けてブラウジングすることが可能です。サイトだけでなく、その中の文章や広告までをもブロックすることができます。
            </p>
            <p id="1360d3b4-d48c-4039-9aff-3a44bb63993f" className={font_p}>
              宗教的な理由から性的コンテンツを避ける必要のある人々から多くの支持を得ており、特にサウジアラビアでは多数の導入実績があります。
            </p>
            <p id="8489ea7b-03ae-4f50-bb48-2eabab46bed7" className=""></p>
            <p id="4b8507cc-7f33-42cd-b328-4ce75cf12e4c" className=""></p>
          </div>
        </article>
      </div>

      <Footer></Footer>
    </div>
  );
}
