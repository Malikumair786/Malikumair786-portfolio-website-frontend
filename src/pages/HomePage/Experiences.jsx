import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/Experiences";

const Experiences = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <>
      <SectionTitle title={"Experiences"} />

      <div className="flex py-10 sm:flex-col">
        {/* left side */}
        <div className="sm:mx-10 h-[30vh] overflow-x-hidden overflow-y-auto mr-40">
          <div className="w-44 flex flex-col gap-10 border-l-2 border-tertiary sm:flex-row sm:border-l-0">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                onClick={() => setSelectedItemIndex(index)}
                className="cursor-pointer"
              >
                <h1
                  className={`text-md px-5 ${
                    selectedItemIndex === index
                      ? "text-tertiary border-tertiary border-l-2 bg-[#1a5153] py-3"
                      : "text-white"
                  }`}
                >
                  {experience.startDate} - {experience.endDate}
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* right side */}

        <div className="w-[60vw] sm:mx-10 sm:w-[90vw]">
          <h1 className="text-secondary py-5 sm:text-center">
            {experiences[selectedItemIndex].company}
          </h1>
          <h2 className="text-tertiary text-xl py-3 sm:text-center">
            {experiences[selectedItemIndex].position}
          </h2>
          <div className="text-white sm:text-center">
            {experiences[selectedItemIndex].description}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiences;
