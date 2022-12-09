"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

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
          className="input input-bordered w-full max-w-xs"
        />

      
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
            className="input input-bordered w-full max-w-xs"
          />
        
        <Button variant="primary" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
