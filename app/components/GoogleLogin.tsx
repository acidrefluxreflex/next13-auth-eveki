"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function GoogleLogin()  {
    const router = useRouter();
    const { user, googleLogin } = useAuth();
    const handleLogin = async (e: any) => {
        e.preventDefault();
    
        console.log(user);
        try {
          await googleLogin();
          router.push("/dashboard");
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <div>
            <button onClick={handleLogin}></button>
        </div>
    )
}