import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import VerteCharge from "./pages/VerteCharge.jsx";
import MedAI from "./pages/MedAI.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Career from "./pages/Career.jsx";
import SnackOut from "./pages/SnackOut.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Loader from "./pages/Loader.jsx";
import ScrollToTop from "./useScrollToTop.jsx";
import NavBar from "./components/Shared/NavBar.jsx";
import Footer from "./components/Shared/Footer.jsx";
import { ScrollProvider } from "./ScrollContext.jsx";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [firstTimeLoading, setfirstTimeLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setfirstTimeLoading(false);
    }, 5000);
  }, []);

  return (
    <ScrollProvider>
      <BrowserRouter>
        <ScrollToTop />

        <div style={{ position: "relative" }}>
          <div
            className={
              !isLoading
                ? firstTimeLoading
                  ? "transition-opacity duration-700 ease-in opacity-[0.80]"
                  : "hidden"
                : "block"
            }
          >
            <Loader loading={isLoading} />
          </div>
          <div
            className={
              isLoading
                ? "hidden"
                : firstTimeLoading
                ? "transition-opacity duration-700 ease-in opacity-100 block"
                : "block"
            }
          >
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/verte-charge" element={<VerteCharge />} />
              <Route path="/snackout" element={<SnackOut />} />
              <Route path="/medai" element={<MedAI />} />
              <Route path="/careers" element={<Career />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </ScrollProvider>
  );
}

export default App;
