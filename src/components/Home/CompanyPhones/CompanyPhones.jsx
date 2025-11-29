import React, { useEffect, useState } from "react";
import styles from "./CompanyPhones.module.css";

const LogoSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    setScrolled(position > 50); // Adjust this value as needed
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.logoSection}>
      <section
        className={`${styles.scrollContainer} ${scrolled ? "scrolled" : ""}`}
        style={{
          transform: `translateY(-${scrollPosition * 0.5}px)`, // Adjust the multiplier as needed
        }}
      >
        <div className="container mx-auto text-left p-5">
          <div
            className={`${styles.logoText} ${
              scrolled ? "scrolled" : ""
            } text-6xl md:text-6xl lg:text-8xl xl:text-9xl`}
          >
            RHODIUM TECH
            {/* <br /> TECH */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoSection;
