import { useState } from "react";

import "./App.css";

import Header from "./Components/1-Header";

import HeroSection from "./Components/2-Hero Section";

import WhoAre from "./Components/3-WhoAre";

import Reviews from "./Components/4-Reviews";

import SlideBar from "./Components/5-SlideBar";

import Home from "./Components/6-Home";

import Questions from "./Components/7-Questions";

import Copyright from "./Components/Copyright";

import PromotionalBanner from "./Components/8-Amazon";

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
      <Copyright />
      <PromotionalBanner />
    </>
  );
}

export default App;
