"use client";
import GoogleLogin from "../components/GoogleLogin";
import MailLogin from "../components/MailLogin";


const Login = () => {
 

  return (
    <div
      style={{
        width: "40%",
        margin: "auto",
      }}
    >
        <GoogleLogin />
      <MailLogin />

    </div>
  );
};

export default Login;
