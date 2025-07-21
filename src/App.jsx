import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Movieprofile from "../src/Pages/Movie_profile/Movieprofile";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="">
        <Router>
          <Navbar />
          <Routes className="w-full h-screen">
            <Route path="/" element={<Home />} />
            <Route path="/movie/:title" element={<Movieprofile />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
