import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Movieprofile from "../src/Pages/Movie_profile/Movieprofile";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Terms from "./Pages/T&C/Terms";
import AboutSection from "./Pages/AboutUs/AboutSection";
import Disclaimer from "./Pages/Disclaimer/Disclaimer";
import DMCA from "./Pages/DMCA_Policy/DMCA";
import BollywoodMovies from "./Pages/Movie_type/Bollywood/BollywoodMovies";
import Animation from "./Pages/Movie_type/Animation/Animation";
import HollywoodMovies from "./Pages/Movie_type/Hollywood/HollywoodMovies";
import Southndian from "./Pages/Movie_type/SouthIndian/SouthIndian";
import SouthIndian from "./Pages/Movie_type/SouthIndian/SouthIndian";

function App() {
  return (
    <>
      <div className="">
        <Router>
          <Navbar />
          <Routes className="w-full h-screen">
            <Route path="/" element={<Home />} />
            <Route path="/movie/:title" element={<Movieprofile />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/terms_and_conditions" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/dmca" element={<DMCA />} />
            <Route path="/bollywood" element={<BollywoodMovies />} />
            <Route path="/animation" element={<Animation />} />
            <Route path="/hollywood" element={<HollywoodMovies />} />
            <Route path="/southindian" element={<SouthIndian />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
