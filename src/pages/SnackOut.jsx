// import styles from "./pages/SnackOut/snackout.module.css";
import img1 from "../assets/images/Pilot.png";
import img2 from "../assets/images/Get App.png";
import img6 from "../assets/images/Laptop.png";
import img8 from "../assets/images/verte-charge-product.png";
import Description from "../components/Products/Description.jsx";
import useScrollToTop from "../useScrollToTop.jsx";
import Card from "../components/Products/Card.jsx";
import { Link } from "react-router-dom";

// Resources imports
import figma from "../assets/images/figma.png";
import react from "../assets/images/react.png";
import nodejs from "../assets/images/nodejs.png";
import postgresql from "../assets/images/postgresql.png";
import express from "../assets/images/express.png";
import pyramid from "../assets/images/pyramid.png";
import aws from "../assets/images/aws.png";
import github from "../assets/images/github.png";
import elephant from "../assets/images/elephant.png";
import Resources from "../components/Products/Resources.jsx";

// Card images imports
import image1 from "../assets/images/iPhone.png";
import image2 from "../assets/images/iphone2.jpg";
import image3 from "../assets/images/iphone3.jpg";

function SnackOut() {
  useScrollToTop();
  const introduction = {
    title: "Introduction",
    paragraph: `Discover the future of dining with SnackOut, the ultimate app for seamless restaurant reservations, online ordering, food delivery, and takeaway. Effortlessly book tables, receive personalized recommendations, and check real-time availability—all from the palm of your hand. Say goodbye to waiting in lines and booking hassles.`,
  };
  const webApp = {
    title: "Web Application",
    paragraph: `Discover a dining revolution with SnackOut, the app designed to elevate the experience for both restaurant vendors and customers. For vendors, SnackOut streamlines operations with features like real-time table tracking, dynamic menu updates, and seamless customer feedback, allowing you to focus on delivering exceptional service. Customers enjoy unparalleled convenience, from instant reservations and personalized recommendations to pre-ordering favourite dishes and discovering trending spots effortlessly. SnackOut turns dining into a delightful, hassle-free adventure, ensuring every meal is a memorable experience. Welcome to the future of dining with SnackOut, where every interaction is a step towards culinary excellence.`,
  };

  const usedResources = [
    figma,
    react,
    nodejs,
    postgresql,
    express,
    pyramid,
    aws,
    github,
    elephant,
  ];

  const text = [
    {
      heading: "Party Mode",
      paragraph: `<b>Introducing SnackOut's Party Mode</b>
      Elevate your group dining experience with SnackOut's innovative Party Mode. Perfect for office gatherings, university hangouts, sleepovers, and more, Party Mode makes ordering for a group effortless and fun.</br> </br>
      <b>Effortless Group Ordering</b>
      Host a party and add your friends to the event. Each person can order for themselves, with the flexibility to pay individually or have the host cover the bill. Perfect for offices, universities, sleepovers, and any group gathering, Party Mode eliminates the hassle of one person managing all the orders.</br> </br>
      <b>Simplify Your Group Dining</b>
      No more hassle of managing everyone's orders. Simplify group dining and make every occasion a breeze with SnackOut. Download now and transform your dining experience!</br> </br>`,
      image: image2,
    },
    {
      heading: "Event",
      paragraph: `Make Every Occasion Special with SnackOut.</br> </br>
      <b>Event Planning</b></br> </br>
      Effortlessly plan birthdays, anniversaries, and special events with our intuitive event management tools. Simplify every detail and enjoy the celebration!</br> </br>
      <b>Social Integration</b></br> </br>
      Share your dining plans and experiences directly to social media. Let your friends and followers join in on your culinary adventures.</br> </br>
      <b>Get the App</b></br> </br>
      Transform your dining experience. Download SnackOut now and make every meal memorable!
`,
      image: image3,
    },
    {
      heading: "Why Choose SnackOut?",
      paragraph: `Experience Dining Like Never Before with SnackOut</br> </br>
      <b>Instant Table Bookings</b> Effortlessly secure your spot at top restaurants with just a few taps. No more waiting, no more hassle.</br> </br>
      <b>Personalized Recommendations</b> Enjoy dining suggestions crafted just for you, based on your tastes, preferences, and past orders. Your perfect meal is just a recommendation away!</br> </br>
      <b>Real-Time Availability</b> Avoid long waits and last-minute disappointments by checking real-time table availability. See which spots are ready to welcome you right now.</br> </br>
      <b>Geolocation</b> Discover the best dining spots nearby with our location-based recommendations. Wherever you are, find great food in an instant.</br> </br>
      Elevate your dining experience with SnackOut—download now and make every meal an unforgettable one!
`,
      image: image1,
    },
  ];

  return (
    <>
      <img className="w-full mt-20" src={img1} alt="Verte Charge" />

      <div className="relative">
        <div
          className={`${styles.radialGradient} absolute top-[70%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
        ></div>
        <Description
          title={introduction.title}
          paragraph={introduction.paragraph}
          color="text-[#A796E4]"
        />
      </div>

      <img className="mt-20 lg:mt-56 w-full" src={img2} alt="Verte Charge" />

      <Resources usedResources={usedResources} />

      <Card
        text={text}
        cardGradient={styles.cardGradient}
        color_dark="bg-[#A796E4]"
        color_light="bg-[#A796E475]"
        btn_hover="hover:bg-[#A796E4]"
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
          color="text-[#A796E4]"
        />
      </div>

      <div className="flex justify-center ">
        <img
          className="-mt-10 lg:-mt-28 xl:-mt-40 md:w-1/2 mb-20"
          src={img6}
          alt="Verte Charge"
        />
      </div>
      <Link to="/verte-charge">
        {" "}
        <img
          className="w-full cursor-pointer"
          src={img8}
          alt="Verte Charge"
        />{" "}
      </Link>
    </>
  );
}

export default SnackOut;
