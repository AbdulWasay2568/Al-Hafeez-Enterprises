import styles from "./pageComponents.module.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="my-8 ml-16 sm:ml-24 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:font-normal text-gray-500 text-xs lg:text-base">
        <div className="flex flex-col">
          <p className={`${styles.footerElems} font-bold hover:no-underline`}>
            Services
          </p>
          <button className={`${styles.footerElems}`}>
            <Link to={"/"}>Generative AI</Link>
          </button>
          <button className={`${styles.footerElems}`}>
            <Link to={"/"}>Full Stack Web Solutions</Link>
          </button>
          <button className={`${styles.footerElems}`}>
            <Link to={"/"}>Mobile App Development</Link>
          </button>
          <button className={`${styles.footerElems}`}>
            <Link to={"/"}>Cloud Computing</Link>
          </button>
        </div>
        <div className="flex flex-col">
          <p className={`${styles.footerElems} font-bold hover:no-underline`}>
            Career
          </p>
          <button className={`${styles.footerElems}`}>
            <Link to={"/careers"}>Life at Rhodium</Link>
          </button>
          <button className={`${styles.footerElems}`}>
            <Link to={"/careers"}>Job Openings</Link>
          </button>
          <button className={`${styles.footerElems}`}>
            <Link to={"/careers"}>Apply Now</Link>
          </button>
        </div>
        <div className="flex flex-col">
          <p className={`${styles.footerElems} font-bold hover:no-underline`}>
            Social
          </p>
          <button className={`${styles.footerElems}`}>
            <Link
              to="https://www.linkedin.com/company/rhodiumtech/"
              target="blank"
            >
              LinkedIn
            </Link>
          </button>
          <button className={`${styles.footerElems}`}>
            <Link
              to="https://www.facebook.com/rhodiumtech?mibextid=9R9pXO"
              target="blank"
            >
              Facebook
            </Link>
          </button>
          <button className={`${styles.footerElems}`}>
            <Link
              to="https://www.instagram.com/rhodiumtech/?igshid=NGVhN2U2NjQ0Yg%3D%3D"
              target="blank"
            >
              Instagram
            </Link>
          </button>
        </div>
        <div className="flex flex-col">
          <p className={`${styles.footerElems} font-bold hover:no-underline`}>
            Terms
          </p>
          <button className={`${styles.footerElems}`}>Privacy</button>
          <button className={`${styles.footerElems}`}>Cookies</button>
          <button className={`${styles.footerElems}`}>Licenses</button>
          <button className={`${styles.footerElems}`}>Settings</button>
          <button className={`${styles.footerElems}`}>Contact</button>
        </div>
        <div className="flex flex-col">
          <p className={`${styles.footerElems} font-bold hover:no-underline`}>
            About us
          </p>
          <button className={`${styles.footerElems}`}>
            <Link to={"/about-us"}>Mission</Link>
          </button>
          <button className={`${styles.footerElems}`}>
            <Link to={"/about-us"}>Vision</Link>
          </button>
          <button className={`${styles.footerElems}`}>
            <Link to={"/about-us"}>Values</Link>
          </button>
          <button className={`${styles.footerElems}`}>
            <Link to={"/about-us"}>Team</Link>
          </button>
          <button className={`${styles.footerElems}`}>
            <Link to={"/about-us"}>Contact</Link>
          </button>
        </div>
      </div>

      <hr />

      <div className="my-4 flex items-center w-full">
        <Link to="/">
          <img
            className="lg:ml-10 w-20 lg:h-20 lg:w-auto ml-4 cursor-pointer"
            src={logo}
            alt="Rhodium Logo"
          />
        </Link>
        <p className="ml-auto text-gray-500 mr-2 md:mr-6 lg:mr-6 text-xs lg:text-base">
          © 2024 Rhodium Tech. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
