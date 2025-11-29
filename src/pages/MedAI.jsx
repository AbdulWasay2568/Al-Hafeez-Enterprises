// import styles from "./pages/MedAI/medai.module.css";
import img1 from "../assets/images/Pilot.png";
import img2 from "../assets/images/Get App.png";
import img6 from "../assets/images/Laptop.png";
import img8 from "../assets/images/snackout-product.png";
import Description from "../components/Products/Description.jsx";
import useScrollToTop from "../useScrollToTop.jsx";
import Card from "../components/Products/Card.jsx";
import { Link } from "react-router-dom";

// Resources imports
import figma from "../assets/images/figma.png";
import react from "../assets/images/react.png";
import python from "../assets/images/python.png";
import flask from "../assets/images/flask.png";
import aws from "../assets/images/aws.png";
import github from "../assets/images/github.png";
import gpt from "../assets/images/gpt.png";
import postgresql from "../assets/images/postgresql.png";
import Resources from "../components/Products/Resources.jsx";

// Card images import
import image1 from "../assets/images/iPhone.png";
import image2 from "../assets/images/iPhone.png";
import image3 from "../assets/images/iPhone.png";

function MedAI() {
  useScrollToTop();
  const introduction = {
    title: "Introduction",
    paragraph: `Discover MedAI, the advanced Electronic Health Record (EHR) solution revolutionizing healthcare. By automating tasks such as medical scribing, coding, and claims management, MedAI lightens the workload for medical staff. This ensures compliance with HIPAA regulations while enhancing efficiency and allowing more focus on patient care. Experience the future of healthcare with MedAI. Elevate patient outcomes, streamline operations, and embrace a new standard of healthcare excellence.
`,
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

  const usedResources = [
    figma,
    react,
    python,
    flask,
    aws,
    github,
    gpt,
    postgresql,
  ];

  const text = [
    {
      heading: "Revolutionizing Healthcare: The Journey MedAI",
      paragraph: `<b>Effortless Scribing:</b> Whether uploading pre-recorded sessions or recording in real-time, our system transcribes audio into text instantly. Say goodbye to manual notetaking and hello to seamless automation.</br></br>
      <b>Smart Form Filling:</b> The transcribed text is automatically populated into the Patient history form fed into the EHR, with every field editable for doctors to review and adjust. Streamline your workflow and ensure accuracy with minimal effort.</br></br>
      <b>Medical Coding Integration:</b> Once the transcription is reviewed, it is scrubbed for privacy, coded accurately for medical claims, and sent directly to claims management. Accelerate your administrative processes, reduce errors, and ensure compliance with HIPAA standards.
`,
      image: image2,
    },
    {
      heading: "Transform Patient Care with MedAI",
      paragraph: `<b>Intelligent Template Automation</b>
      Streamline documentation with precision using MedAI's intelligent template automation. Transcribed insights automatically populate editable templates, allowing doctors to review and refine details effortlessly, saving time and reducing errors.</br></br>
      <b>Enhance Efficiency, Elevate Care</b>
      Empower your team with MedAI's advanced technology. Save time on documentation and focus more on patient care. MedAI ensures accuracy and detail with every interaction, enhancing overall efficiency and elevating the quality of care.</br></br>
      <b>Join the Future of Healthcare</b>
      Discover how MedAI transforms your practice. Simplify workflows and elevate patient outcomes by embracing innovation and efficiency. Join the future of healthcare with MedAI—today and tomorrow.</br></br>

`,
      image: image3,
    },
    {
      heading: "Your Journey with MedAI: Effortless Appointment Booking",
      paragraph: `Imagine waking up and needing to schedule a check-up. Instead of dreading it, you open MedAI and tap Start. You log in easily, and if you're new, the sign-up is quick and straight forward.</br></br> 
      You can upload your medical history in seconds or retrieve it using your SSN and filling out the PHQ-9 form is effortless. You have the option to choose between an online or in-person appointment, whichever suits you best.</br></br> 
      Confirm your booking and receive immediate confirmation, with the entire process taking just a few minutes. With MedAI, booking a doctor's appointment is smooth and simple.</br></br> 
      Get the app now and simplify your healthcare experience!
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
          style="text-justify"
          color="text-[#4C93FF]"
        />
      </div>

      <img className="mt-20 lg:mt-56 w-full" src={img2} alt="Verte Charge" />

      <Resources usedResources={usedResources} />

      <Card
        text={text}
        cardGradient={styles.cardGradient}
        color_dark="bg-[#4C93FF]"
        color_light="bg-[#4c94ff67]"
        btn_hover="hover:bg-[#4C93FF]"
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
          color="text-[#4C93FF]"
        />
      </div>

      <div className="flex justify-center ">
        <img
          className="-mt-10 lg:-mt-28 xl:-mt-40 md:w-1/2"
          src={img6}
          alt="Verte Charge"
        />
      </div>

      <Link to="/snackout">
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

export default MedAI;
