import { Link } from "react-router-dom";

const Animation = ({ direction, heading, paragraph, link, image }) => {
  return (
    <div
      className={`w-full flex justify-center ${
        direction === "right"
          ? `md:justify-end md:pr-10`
          : `md:justify-start md:pl-10`
      }`}
    >
      <div className="w-[80%] bg-[#289997] rounded-[25px] flex justify-center items-center mb-[140%] animate-rotate-90 md:w-[40%] md:mb-[30%]">
        <div className="flex justify-center items-center">
          <img
            className="transform -rotate-90 animate-img opacity-0 max-w-[110%]"
            src={image}
            alt="Product Image"
          />
        </div>
      </div>
      <div
        className={`absolute w-[85%] animate-text-bottom ${
          direction === "right" ? `animate-text-left` : `animate-text-right`
        } md:w-[45%]`}
      >
        <h1 className="text-2xl lg:text-7xl heading text-[#858585] md:mb-4">
          {heading}
        </h1>
        <p className="lg:text-base text-[#858585] leading-[19.36px] text-justify">
          {paragraph}
        </p>
        <Link to={link}>
          <button className="text-white text-xs lg:text-base border rounded-md px-2 py-1 lg:px-4 lg:py-2 mt-6 bg-[#289997] hover:border-[#289997] hover:bg-white hover:text-[#289997]">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Animation;
