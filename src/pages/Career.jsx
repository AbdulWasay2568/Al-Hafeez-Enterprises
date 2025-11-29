import React from "react";
// import "./pages/Career/App.css";
import FirstSection from "../components/Career/FirstSection";
import SecondSection from "../components/Career/SecondSection";
import ThirdSection from "../components/Career/ThirdSection";
import FourthSection from "../components/Career/FourthSection";
import useScrollToTop from "../useScrollToTop";

function Career() {
  useScrollToTop();
  return (
    <div>
      <main className="font-inter">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </main>
    </div>
  );
}

export default Career;
