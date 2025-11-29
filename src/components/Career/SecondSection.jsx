import groupPhoto from "../../assets/images/groupPhoto.png";

const SecondSection = () => {
  return (
    <section className="mt-56 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center lg:space-y-6 ">
        <p className="font-inter-700 text-[36px] font-extrabold text-center text-[#101828]">
          We’re looking for talented people
        </p>
        <p className="font-inter-700 mt-8 lg:mt-0 lg:text-[20px] mx-8 lg:mx-0 text-center text-[#667085]">
          "We're on the lookout for exceptional talent to join our dynamic team
          and drive innovation forward."
        </p>
      </div>
      <img
        className="w-[90%] mt-24"
        src={groupPhoto}
        alt="Team Picture"
      />
    </section>
  );
};
export default SecondSection;
