"use client";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
 const onSubmit = () => {

 }

  return (
    <div>
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSc0pehYPSOLaLLxvHgjmG5LbkfDewtrb8-63uvxJSoX6DvnAg/formResponse"
        id="form"
        method="post"
        target="hidden_iframe"
        onSubmit={onSubmit}
      >
        <div className="label">Name</div>
        <input
          id="name"
          name="entry.2005620554"
          placeholder="required"
          required
          type="text"
          className="input input-bordered w-full max-w-xs"
        />

        <div className="label">E-Mail</div>
        <input
          id="email"
          name="entry.1045781291"
          placeholder="required"
          className="input input-bordered w-full max-w-xs"
          required
          type="email"
        />

        <div className="label">Message</div>
        <textarea
          id="msg"
          name="entry.839337160"
          placeholder="Message"
          required
          rows={4}
          className="textarea textarea-bordered mt-1 block w-full"
        ></textarea>

        <div>
          <button
            id="button"
            name="button"
            type="submit"
            value="Send"
            className="btn my-9"
          >
            send
          </button>
        </div>
      </form>
    </div>
  );
}
