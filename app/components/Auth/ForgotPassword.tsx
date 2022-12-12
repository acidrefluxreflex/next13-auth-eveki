"use client";

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function ForgetPassword() {
  const { user, resetPassWord } = useAuth();
  const [email, setEmail] = useState("");

  const reset = async (e: any) => {
    try {
      resetPassWord(email);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        margin: "auto",
      }}
      className="cantainer p-5"
    >
      <form onSubmit={reset}>
        <input
          onChange={(e) =>
            setEmail(e.target.value)
          }
          type="email"
          value={email}
          required
          placeholder="Enter email"
          className="input input-bordered w-full max-w-xs my-2 p-5 "
        />
        <button
          type="submit"
          className="text-white bg-[#4285F4] px-5 py-2.5 hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm p-5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 m-5 "
        >
          Send
        </button>
      </form>
    </div>
  );
}
