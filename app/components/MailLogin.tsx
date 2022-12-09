"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useAuth } from "./context/AuthContext";

export default function MailLogin() {
  const router = useRouter();
  const { user, login } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();

    console.log(user);
    try {
      await login(data.email, data.password);
      router.push("/dashboard");
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
      <form onSubmit={handleLogin}>
        <input
          onChange={(e: any) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }
          type="email"
          value={data.email}
          required
          placeholder="Enter email"
          className="input input-bordered w-full max-w-xs my-2 p-5 "
        />
<div className="my-3">
        <input
          onChange={(e: any) =>
            setData({
              ...data,
              password: e.target.value,
            })
          }
          value={data.password}
          required
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs p-5  inline-flex items-center "
        />
</div>
        <button
          type="submit"
          className="text-white bg-[#4285F4] px-5 py-2.5 hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm p-5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 m-5 "
        >
          Login
        </button>
      </form>
    </div>
  );
}
