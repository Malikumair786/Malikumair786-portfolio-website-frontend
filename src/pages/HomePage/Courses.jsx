import React, { useState, useEffect } from "react";
import SectionTitle from "../../components/SectionTitle";
// import { courses } from "../../resources/Courses";

import axios from "axios";

const Courses = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        const response = await axios.get("/courses");
        setCourseData(response.data);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };
    fetchAllCourses();
  }, []);

  return (
    <>
      <SectionTitle title={"Courses"} />

      <div className="flex py-10 sm:flex-col">
        {/* left side */}
        <div className="w-[20vw] h-[70vh] overflow-auto sm:mx-10">
          <div
            // ref={containerRef}
            className="w-[18vw] flex flex-col gap-5 border-l-2 border-tertiary sm:border-l-0"
          >
            {courseData.map((course, index) => (
              <div
                key={course._id}
                onClick={() => setSelectedItemIndex(index)}
                className="cursor-pointer"
              >
                <h1
                  className={`text-md px-5 ${
                    selectedItemIndex === index
                      ? "text-tertiary border-tertiary border-l-2 py-3 bg-[#1a5153]"
                      : "text-white bg-transparent"
                  }`}
                >
                  {course.title}
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* right side */}

        <div className="w-[60vw] sm:mx-10 sm:w-[90vw] flex mt-20 ml-20">
          {/* description */}
          <div className="mt-5">
            <h1 className="text-secondary py-5 sm:text-center">
              {courseData[selectedItemIndex]?.title}
            </h1>
            <div className="text-white sm:text-center w-[30vw]">
              {courseData[selectedItemIndex]?.description}
            </div>
          </div>

          {/* Image */}
          <div className="mr-10 pr-10">
            <dotlottie-player
              src="https://lottie.host/d7418b11-d0e0-4735-aa3b-062ca4ad762c/nIksXbgfb7.json"
              background="transparent"
              speed="1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
