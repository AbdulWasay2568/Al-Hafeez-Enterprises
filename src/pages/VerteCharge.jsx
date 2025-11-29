// import styles from "./pages/VerteCharge/vertecharge.module.css";
import Pilot from "../assets/images/Pilot.png";
import GetApp from "../assets/images/Get App.png";
import Slogan from "../assets/images/Slogan.png";
import Laptop from "../assets/images/Laptop.png";
import NextProject from "../assets/images/med-ai-product.png";
import Description from "../components/Products/Description.jsx";
import useScrollToTop from "../useScrollToTop.jsx";
import Card from "../components/Products/Card.jsx";
import { Link } from "react-router-dom";

// Resources imports
import figma from "../assets/images/figma.png";
import react from "../assets/images/react.png";
import nodejs from "../assets/images/nodejs.png";
import express from "../assets/images/express.png";
import aws from "../assets/images/aws.png";
import github from "../assets/images/github.png";
import mongodb from "../assets/images/mongodb.png";
import Resources from "../components/Products/Resources.jsx";

// Card images import
import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";

function VerteCharge() {
  useScrollToTop();

  const introduction = {
    title: "Introduction",
    paragraph: `Welcome to Verte Charge – Where Powering Your EV is a Breeze! 
        Experience the convenience of seamless electric vehicle charging right at your
        fingertips. No more searching for stations or worrying about
        availability. With Verte Charge, you're in control of your journey.
        Discover a network of reliable charging stations, browse through user
        reviews, and effortlessly find and reserve your spot with just a few
        taps. Join the thousands of satisfied drivers who rely on Verte Charge
        to make their charging experience stress-free and efficient. Start your
        electric journey now – power up with Verte Charge!`,
  };

  const webApp = {
    title: "Web Application",
    paragraph: `Our user-friendly platform puts the power of reservation at your
        fingertips. Seamlessly browse through a curated selection of
        restaurants, effortlessly book, and indulge in culinary delights at
        top-notch restaurants with just a few clicks. Whether it's an intimate
        dinner for two or a gathering with friends, Snakemate simplifies the
        reservation process, ensuring a seamless experience from start to
        finish. Join us in savoring every moment.`,
  };

  const usedResources = [figma, react, nodejs, express, aws, github, mongodb];

  const text = [
    {
      heading: "Become your EV's master",
      paragraph: `Effortless station scouting: </br> </br>
      Vertecharge puts you in control of your EV charging with effortless station scouting. Find stations near you or along your route in seconds, then filter by charging speed or connector type to ensure a perfect fit for your EV. See real-time availability and pricing for each station, so you can make informed decisions and avoid surprises. Now, every charging stop is a breeze.
      </br></br>Skip the waiting game:</br></br>
      Vertecharge lets you reserve your charging slot in advance through our user-friendly app. No more waiting in line - simply arrive, plug in, and get back on the road faster. Our intuitive booking system ensures a smooth charging experience, giving you peace of mind knowing your EV will be fueled up and ready to go when you need it`,
      image: image1,
    },
    {
      heading: "Become your EV's master",
      paragraph: `Effortless station scouting: </br> </br>
      Vertecharge puts you in control of your EV charging with effortless station scouting. Find stations near you or along your route in seconds, then filter by charging speed or connector type to ensure a perfect fit for your EV. See real-time availability and pricing for each station, so you can make informed decisions and avoid surprises. Now, every charging stop is a breeze.
      </br></br>Skip the waiting game:</br></br>
      Vertecharge lets you reserve your charging slot in advance through our user-friendly app. No more waiting in line - simply arrive, plug in, and get back on the road faster. Our intuitive booking system ensures a smooth charging experience, giving you peace of mind knowing your EV will be fueled up and ready to go when you need it`,
      image: image2,
    },
    {
      heading: "Become your EV's master",
      paragraph: `Effortless station scouting: </br> </br>
      Vertecharge puts you in control of your EV charging with effortless station scouting. Find stations near you or along your route in seconds, then filter by charging speed or connector type to ensure a perfect fit for your EV. See real-time availability and pricing for each station, so you can make informed decisions and avoid surprises. Now, every charging stop is a breeze.
      </br></br>Skip the waiting game:</br></br>
      Vertecharge lets you reserve your charging slot in advance through our user-friendly app. No more waiting in line - simply arrive, plug in, and get back on the road faster. Our intuitive booking system ensures a smooth charging experience, giving you peace of mind knowing your EV will be fueled up and ready to go when you need it`,
      image: image3,
    },
    {
      heading: "Become your EV's master",
      paragraph: `Effortless station scouting: </br> </br>
      Vertecharge puts you in control of your EV charging with effortless station scouting. Find stations near you or along your route in seconds, then filter by charging speed or connector type to ensure a perfect fit for your EV. See real-time availability and pricing for each station, so you can make informed decisions and avoid surprises. Now, every charging stop is a breeze.
      </br></br>Skip the waiting game:</br></br>
      Vertecharge lets you reserve your charging slot in advance through our user-friendly app. No more waiting in line - simply arrive, plug in, and get back on the road faster. Our intuitive booking system ensures a smooth charging experience, giving you peace of mind knowing your EV will be fueled up and ready to go when you need it`,
      image: image4,
    },
  ];

  return (
    <>
      <img className="w-full mt-20" src={Pilot} alt="Verte Charge" />

      <div className="relative">
        <div
          className={`${styles.radialGradient} absolute top-[70%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
        ></div>
        <Description
          title={introduction.title}
          paragraph={introduction.paragraph}
          color="text-[#34B44A]"
        />
      </div>

      <img className="mt-20 lg:mt-56 w-full" src={GetApp} alt="Verte Charge" />

      <Resources usedResources={usedResources} />

      <img className="w-full" src={Slogan} alt="Verte Charge" />

      <Card
        text={text}
        cardGradient={styles.cardGradient}
        color_dark="bg-[#34B44A]"
        color_light="bg-[#34b44965]"
        btn_hover="hover:bg-[#34B44A]"
      />

      <div className="relative">
        <div
          className={`${styles.radialGradient} absolute top-[65%] left-[25%] -translate-x-1/2 -translate-y-1/2`}
        ></div>
        <div
          className={`hidden sm:block ${styles.radialGradient} absolute top-[90%] left-[80%] -translate-x-1/2 -translate-y-1/2`}
        ></div>
        <Description
          title={webApp.title}
          paragraph={webApp.paragraph}
          color="text-[#34B44A]"
        />
      </div>

      <div className="flex justify-center ">
        <img
          className="-mt-10 lg:-mt-28 xl:-mt-40 md:w-1/2"
          src={Laptop}
          alt="Verte Charge"
        />
      </div>

      <Link to="/medai">
        {" "}
        <img
          className="w-full cursor-pointer"
          src={NextProject}
          alt="Verte Charge"
        />{" "}
      </Link>
    </>
  );
}

export default VerteCharge;
