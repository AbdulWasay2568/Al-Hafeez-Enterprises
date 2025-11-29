// import "./pages/Products/App.css";
import useScrollToTop from "../useScrollToTop.jsx";
import Animation from "../components/Products/Animation.jsx";
import snackOutImg from "../assets/images/snackout.png";
import VerteChargeImg from "../assets/images/verteCharge.png";
import medAIImg from "../assets/images/medai.png";

const heading = ["SNACKOUT", "VERTE CHARGE", "MED AI"];

const paragraph = [
  "Say goodbye to dining hassles with SnackOut. Effortlessly find restaurants, book tables, and manage large gatherings with personalized recommendations and real-time updates. Simplify your dining experience with SnackOut, the smarter way to enjoy your favorite restaurants.",
  "Embrace the future of driving with electric vehicles! EVs are not only environmentally friendly but also offer a smooth and silent driving experience. However, finding charging stations and managing charging sessions can sometimes be a hassle. This is where our app comes in! We provide a user-friendly app that simplifies EV charging for everyone. With our app, you can easily find charging stations, book charging sessions in advance, and view all the necessary information about your electric vehicle in one place.",
  "MedAI is an integrated Electronic Health Record (EHR) solution that revolutionizes healthcare documentation through AI-powered automation. MedAI enhances accuracy, ensures regulatory compliance with HIPAA, and improves operational efficiency for healthcare providers by streamlining medical scribing, coding, scrubbing, and claims management.",
];

const link = ["/snackout", "/verte-charge", "/medai"];

function Products() {
  useScrollToTop();
  return (
    <div className="font-inter my-24 mt-40">
      <Animation
        direction="left"
        heading={heading[0]}
        paragraph={paragraph[0]}
        link={link[0]}
        image={snackOutImg}
      />
      <Animation
        direction="right"
        heading={heading[1]}
        paragraph={paragraph[1]}
        link={link[1]}
        image={VerteChargeImg}
      />
      <Animation
        direction="left"
        heading={heading[2]}
        paragraph={paragraph[2]}
        link={link[2]}
        image={medAIImg}
      />
    </div>
  );
}

export default Products;
