"use client";
import GoogleLogin from "../components/Auth/GoogleLogin";
import MailSignup from "../components/Auth/MailSignup";

const Signup = () => {
  return (
    <div
      style={{
        margin: "auto",
      }}
      className="h-screen w-screen flex justify-center items-center text-center"
    >
      <div className="card w-96  shadow-xl bg-base-100/75 navbar bg-clip-padding backdrop-filter backdrop-blur-md  z-5 drop-shadow-md ">
        <div className="card-body mx-auto">
          <h1 className="card-title mx-auto">Signup</h1>
          <div className="container mx-auto">
            <GoogleLogin />
            <div className="divider  border-gray-100">OR</div>
            <MailSignup />
          </div>
          <div className="flex items-center mx-auto">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <p className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                terms and conditions
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
