import { useState, useEffect } from "react";

const Card = ({ text, cardGradient, color_dark, color_light, btn_hover }) => {
  const [cardNum, setCardNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCardNum((prevCardNum) => (prevCardNum + 1) % text.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-white mt-24 font-inter">
      <div
        className={`relative h-auto w-[90%] lg:h-[600px] lg:w-[1100px] rounded-[25px] lg:rounded-[50px] ${cardGradient} p-2 lg:p-16 lg:pr-[27rem]`}
      >
        <img
          src={text[cardNum].image}
          className="absolute -top-10 right-0 mr-4 lg:mr-16 h-auto w-[8rem] lg:w-[20rem]"
          alt="iPhone"
        />
        <h1 className="font-semibold lg:text-4xl mr-40 lg:mr-0">
          {text[cardNum].heading}
        </h1>
        <br />
        <p
          className="lg:leading-5 text-xs lg:text-base mr-40 lg:mr-0"
          dangerouslySetInnerHTML={{ __html: text[cardNum].paragraph }}
        />
        <button
          className={`border-2 border-white rounded-2xl px-6 py-2 lg:px-0 lg:py-0 lg:h-[65px] lg:w-[200px] mt-6 ${btn_hover}`}
        >
          Get App
        </button>
      </div>
      <div className="flex space-x-4 mt-6">
        {text.map((_, index) => (
          <button
            key={index}
            onClick={() => setCardNum(index)}
            className={`w-6 h-1 lg:w-12 lg:h-2 mx-1 rounded-full ${
              cardNum === index ? `${color_dark}` : `${color_light}`
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
