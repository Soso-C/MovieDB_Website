import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../../utils/firebase.config";
import { addDoc, collection } from "firebase/firestore";

function Signup() {
  const [formValues, setformValues] = useState({
    pseudo: "",
    email: "",
    password: "",
  });

  // Clear input values when form is submit
  const clearState = {
    pseudo: "",
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  // signup Firebase
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      auth
        .createUserWithEmailAndPassword(formValues.email, formValues.password)
        .then(async (userAuth) => {
          await userAuth.user.updateProfile({
            displayName: formValues.pseudo,
          });
          await addDoc(collection(db, "Users"), {
            userid: userAuth.user.uid,
            username: userAuth.user.displayName,
            email: userAuth.user.email,
            favoriteMovie: [],
          });
          setformValues(clearState);
          alert("Account created with success");
          navigate("/");
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen bg-slate-800 w-full pt-6 pb-2 px-4 flex flex-col md:py-12">
      <div
        className="bg-white rounded-[50%] w-32 h-32 flex flex-col items-center justify-center mx-auto cursor-pointer mb-8"
        onClick={() => navigate("/")}
      >
        <i className="fa-solid fa-film flex justify-center items-center text-2xl"></i>
        <h1 className="text-center text-2xl font-bold">SCMovie</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded-lg lg:w-1/3 md:w-1/2 w-[90%] p-6 md:p-8">
          <p className="text-2xl font-extrabold leading-6 text-gray-800">
            Create your account
          </p>
          <p className="text-sm mt-4 font-medium leading-none text-gray-500">
            Have an account?{" "}
            <Link
              to="/login"
              className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer hover:text-blue-800"
            >
              {" "}
              Sign in here
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mt-6 w-full">
              <label className="text-sm font-medium leading-none text-gray-800">
                Pseudo
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  type="text"
                  className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  value={formValues.pseudo}
                  onChange={(e) =>
                    setformValues({ ...formValues, pseudo: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="mt-3 w-full">
              <label className="text-sm font-medium leading-none text-gray-800">
                Email
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  type="email"
                  className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  value={formValues.email}
                  onChange={(e) =>
                    setformValues({ ...formValues, email: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="mt-3  w-full">
              <label className="text-sm font-medium leading-none text-gray-800">
                Password
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  type="password"
                  className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  value={formValues.password}
                  onChange={(e) =>
                    setformValues({ ...formValues, password: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="mt-8">
              <button className="text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
