import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { auth } from "./utils/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { getUserInfo } from "./features/user.slice";

const App = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    dispatch(getUserInfo(currentUser));
    setUser(currentUser);
  });
  return (
    <div className="bg-slate-700">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
};

export default App;
