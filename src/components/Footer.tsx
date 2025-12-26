import logo from "../assets/images/logo.jpeg";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Social",
      items: [
        { label: "LinkedIn", path: null},
        { label: "Facebook", path: null},
        { label: "Instagram", path: null},
      ],
    },
    {
      title: "Terms",
      items: [
        { label: "Privacy", path: null },
        { label: "Cookies", path: null },
        { label: "Licenses", path: null },
        { label: "Settings", path: null },
        { label: "Contact", path: null },
      ],
    },
    
  ];

  return (
    <>
      <div className="my-8 ml-16 sm:ml-24 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:font-normal text-gray-500 text-xs lg:text-base">
        {/* {footerSections.map((section) => (
          <div key={section.title} className="flex flex-col">
            <p className="text-left hover:underline my-1 font-bold">
              {section.title}
            </p>
            {section.items.map((item, index) => (
              <button key={index} className="text-left hover:underline my-1">
                {item.path ? (
                  <Link to={item.path} target={item ? "blank" : undefined}>
                    {item.label}
                  </Link>
                ) : (
                  item.label
                )}
              </button>
            ))}
          </div>
        ))} */}
      </div>

      <hr />

      <div className="my-4 flex items-center w-full">
        <Link to="/">
          <img
            className="lg:ml-10 w-20 lg:h-24 lg:w-auto ml-4 cursor-pointer"
            src={logo}
            alt="Al Hafeez Enterprises Logo"
          />
        </Link>
        <p className="ml-auto text-gray-500 mr-2 md:mr-6 lg:mr-6 text-xs lg:text-base">
          © 2025 Al Hafeez Enterprises. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
