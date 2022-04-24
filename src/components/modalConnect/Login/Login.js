import React, { useState } from "react";

function Login({ toggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen bg-black w-full py-12 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded-lg lg:w-1/3 md:w-1/2 w-[90%] p-10 absolute top-[25%] left-1/2 -translate-x-1/2">
          <p className="text-2xl font-extrabold leading-6 text-gray-800">
            Login to your account
          </p>
          <p className="text-sm mt-4 font-medium leading-none text-gray-500">
            Dont have account?{" "}
            <span
              className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer hover:text-blue-800"
              onClick={toggle}
            >
              {" "}
              Sign up here
            </span>
          </p>
          <div className="mt-6">
            <label className="text-sm font-medium leading-none text-gray-800">
              Email
            </label>
            <input
              type="email"
              className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6  w-full">
            <label className="text-sm font-medium leading-none text-gray-800">
              Password
            </label>
            <div className="relative flex items-center justify-center">
              <input
                aria-label="enter Password"
                type="password"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
          </div>
          <div className="mt-8">
            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
