"use client";
import React from "react";
import { useAuth } from "./context/AuthContext";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <button
      onClick={() => {
        logout();
        router.push("/login");
      }}
    >
      logout
    </button>
  );
}
