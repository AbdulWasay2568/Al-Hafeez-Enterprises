import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { RxArrowTopRight } from "react-icons/rx";

const FourthSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("View all");

  const categories = [
    "View all",
    "Design",
    "Software Engineering",
    "Customer Success",
    "Sales",
    "Marketing",
  ];

  const jobs = [
    {
      title: "Design",
      position: "Product Designer",
      location: "Lahore",
      time: "Full-time",
    },
    {
      title: "Software Engineering",
      position: "Engineering Manager",
      location: "Lahore",
      time: "Full-time",
    },
    {
      title: "Customer Success",
      position: "Customer Success Manager",
      location: "Lahore",
      time: "Full-time",
    },
    {
      title: "Sales",
      position: "Account Executive",
      location: "Lahore",
      time: "Full-time",
    },
    {
      title: "Marketing",
      position: "SEO Marketing Manager",
      location: "Lahore",
      time: "Full-time",
    },
  ];

  const handleCategory = (event) => {
    const category = event.target.textContent;
    setSelectedCategory(category);
  };

  const filteredJobs =
    selectedCategory === "View all"
      ? jobs
      : jobs.filter((job) => job.title === selectedCategory);

  return (
    <div className="mb-20">
      <div className="flex flex-wrap justify-center my-14 text-xs lg:text-base gap-4 font-inter-500 text-[#667085] px-2">
        {categories.map((item) => (
          <p
            key={item}
            className={`${
              item === selectedCategory && "bg-[#F9F5FF] text-[#289997]"
            } p-2 lg:p-3 rounded-md cursor-pointer`}
            onClick={handleCategory}
          >
            {item}
          </p>
        ))}
      </div>
      {filteredJobs.map((item) => (
        <div key={item.position} className="flex justify-center mb-6 lg:mx-16">
          <div className="border rounded-2xl border-[#EAECF0] p-2 lg:p-6 w-8/12">
            <div className="flex justify-between">
              <p className="text-[#289997] font-inter-600 text-sm">
                {item.title}
              </p>
              <p className="flex items-center gap-2 text-[#289997] font-inter-600 text-base cursor-pointer">
                View job
                <RxArrowTopRight />
              </p>
            </div>
            <p className="font-inter-500 text-lg mt-1">{item.position}</p>

            <div className="flex flex-row justify-start font-inter-500 text-base text-[#667085] gap-6 mt-4">
              <p className="flex items-center gap-2">
                <CiLocationOn size="22px" />
                {item.location}
              </p>
              <p className="flex items-center gap-2">
                <IoTimeOutline size="22px" />
                {item.time}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FourthSection;
