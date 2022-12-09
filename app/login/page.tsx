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
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <GoogleLogin />
          <MailLogin />
          <div className="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <p  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</p>
</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
