const Description = ({ title, paragraph, style, color }) => {
  return (
    <>
      <h1
        className={`relative z-20 text-2xl lg:text-4xl text-center ${color} pt-20 lg:pt-40 mb-6 font-inter font-inter-600`}
      >
        {title}
      </h1>
      <p
        className={`relative z-20 mx-10 md:mx-28 lg:-mx-32 xl:mx-0 lg:px-80 text-sm lg:text-xl text-[#7D7D7D] font-inter font-inter-400 text-justify`}
        dangerouslySetInnerHTML={{ __html: paragraph }}
        style={{ textAlignLast: "center" }}
      />
    </>
  );
};

export default Description;
