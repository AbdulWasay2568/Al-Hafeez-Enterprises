import React, { useRef, useState, useEffect, useContext } from "react";
import Form from "../components/Home/form";
import SuccessStories from "../components/Home/SuccessStories";
import Expertise from "../components/Home/Expertise";
import OurPartners from "../components/Home/partnersnew";
import ServicesShowcase from "../components/Home/ServicesShowcase.jsx";
import Company from "../components/Home/CompanyAnimation.jsx";
import TrustSection from "../components/Home/Business";
import useScrollToTop from "../useScrollToTop";
import Customer from "../components/Home/customer";
import Video from "../components/Home/VideoSection/VideoSection.jsx";
import Workwithus from "../components/Home/whyworkwithus";
import { ScrollContext } from "../ScrollContext";

const Home = () => {
  useScrollToTop();

  const formRef = useRef(null);
  const { scrollToForm, setScrollToForm } = useContext(ScrollContext);

  useEffect(() => {
    if (scrollToForm) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollToForm(false);
    }
  }, [scrollToForm, setScrollToForm]);

  return (
    <div className="App">
      {/* <NavBar /> */}
      <Video />
      <ServicesShowcase />
      {/* <Customer /> */}
      <SuccessStories />
      <Workwithus />
      <Form formRef={formRef} />
    </div>
  );
};
export default Home;
