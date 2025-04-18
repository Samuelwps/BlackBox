import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./Pages/Privacy";
import Home from "./Pages/Home"; // Exemplo de página inicial

import "./App.css";

import Header from "./Components/1-Header";

<<<<<<< HEAD
import HeroSection from "./Components/2-Hero Section";

import WhoAre from "./Components/3-WhoAre";

import Reviews from "./Components/4-Reviews";

import SlideBar from "./Components/5-SlideBar";

import Home from "./Components/6-Home";

import Questions from "./Components/7-Questions";

import Copyright from "./Components/Copyright";

import PromotionalBanner from "./Components/8-Amazon";

import FreeReading from "./Components/FreeReading";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhoAre />
      <Reviews />
      <SlideBar />
      <Home />
      <Questions />
      <FreeReading />
      <Copyright />
      <PromotionalBanner />
    </>
=======
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
>>>>>>> 482102598fb8e8f7507026428f028c6b27b21604
  );
};

export default App;
