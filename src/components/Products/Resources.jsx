const Resources = ({ usedResources }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 my-32">
      <h1 className="font-inter font-semibold text-[#667085] text-xl lg:text-4xl">
        Resources
      </h1>
      <div className="flex flex-wrap justify-center gap-2 lg:gap-8">
        {usedResources.map((logo) => (
          <img key={logo} src={logo} className="h-12 w-12 lg:h-24 lg:w-24" />
        ))}
      </div>
    </div>
  );
};

export default Resources;
