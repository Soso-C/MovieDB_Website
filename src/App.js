import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModalConnect from "./components/modalConnect/ModalConnect";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModalConnect />} />
      </Routes>
    </Router>
  );
};

export default App;
