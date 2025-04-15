import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./Pages/Privacy";
import Home from "./Pages/Home"; // Exemplo de página inicial

import "./App.css";

import Header from "./Components/1-Header";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
