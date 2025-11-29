import Animation from "./Animation";

const FirstSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between ml-6 mt-16 lg:ml-20 lg:mt-40 mt-40">
      <div className="flex flex-col pl-0 ml-0 lg:w-[580px] lg:gap-[24px]">
        <h1 className="font-inter-700 text-4xl leading-[50px] lg:leading-[70px] lg:text-[56px] text-[#289997]">
          Where tech talent thrives, Join the Rhodium Tech revolution.
        </h1>
        <p className="text-[#33333380] lg:text-[21px] leading-[25.41px] font-inter-700 text-left lg:mt-0 mt-6 lg:mr-2 mr-6">
          Be part of a team that values innovation and teamwork.
        </p>
      </div>

      <Animation />
    </section>
  );
};

export default FirstSection;
