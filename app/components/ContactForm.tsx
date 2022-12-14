export default function ContactForm() {
  return (
    <div>
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSc0pehYPSOLaLLxvHgjmG5LbkfDewtrb8-63uvxJSoX6DvnAg/formResponse"
        id="form"
        method="post"
        target="hidden_iframe"
      >
        <div className="label">お名前</div>
        <input
          id="name"
          name="entry.2005620554"
          placeholder="Name"
          required
          type="text"
        />

        <div className="label">メールアドレス</div>
        <input
          id="email"
          name="entry.1045781291"
          placeholder="メールアドレス"
          required
          type="text"
        />

        <div className="label">メッセージ本文</div>
        <textarea
          id="msg"
          name="entry.839337160"
          placeholder="メッセージ"
          required
        ></textarea>

        <div>
          <input id="button" name="button" type="submit" value="送 信" />
        </div>
      </form>
    </div>
  );
}
