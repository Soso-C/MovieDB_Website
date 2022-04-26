import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen bg-slate-700 w-full py-12 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded-lg lg:w-1/3 md:w-1/2 w-[90%] p-8 absolute top-[25%] left-1/2 -translate-x-1/2">
          <p className="text-2xl font-extrabold leading-6 text-gray-800">
            Login to your account
          </p>
          <p className="text-sm mt-4 font-medium leading-none text-gray-500">
            Dont have account?{" "}
            <Link
              className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer hover:text-blue-800"
              to={"/register"}
            >
              {" "}
              Sign up here
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mt-6">
              <label className="text-sm font-medium leading-none text-gray-800">
                Email
              </label>
              <input
                type="email"
                className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-3  w-full">
              <label className="text-sm font-medium leading-none text-gray-800">
                Password
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  type="password"
                  className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mt-8">
              <button className="text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
