import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/Projects";

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <>
      <SectionTitle title={"Projects"} />

      <div className="flex py-10 sm:flex-col">
        {/* left side sm:mx-10 h-[30vh] overflow-x-hidden overflow-y-auto mr-40 */}
        <div className="mr-32 overflow-x-hidden overflow-y-auto h-[30vh] sm:mx-10">
          <div className="w-44 flex flex-col gap-10 border-l-2 border-tertiary sm:flex-row sm:border-l-0">
            {projects.map((project, index) => (
              <div
                key={project.id}
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
                  {project.title}
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* right side */}

        {/* Image */}
        <div className="w-[60vw] sm:mx-10 sm:w-[90vw] flex pr-10">
          <div className="mr-10 pr-10 h-[40vh] w-[40vw] sm:w-full">
            <dotlottie-player
              src="https://lottie.host/d7418b11-d0e0-4735-aa3b-062ca4ad762c/nIksXbgfb7.json"
              background="transparent"
              speed="1"
            />
          </div>

          {/* description */}
          <div className="mt-5">
            <h1 className="text-secondary py-5 sm:text-center">
              {projects[selectedItemIndex].title}
            </h1>
            <div className="text-white sm:text-center">
              {projects[selectedItemIndex].description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
