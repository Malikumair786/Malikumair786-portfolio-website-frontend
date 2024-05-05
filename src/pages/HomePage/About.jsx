import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const About = () => {
  const { portfolioData } = useSelector((state) => state.root);
  // Check if portfolioData array has any items
  const intro = portfolioData.length > 0 ? portfolioData[0] : null;

  // Destructure intro object if it exists
  const { aboutMe, imageUrl, technologies } = intro || {};

  // const skills = [
  //   "React",
  //   "Node",
  //   "MongoDB",
  //   "Express",
  //   "MySQL",
  //   "JavaScript",
  //   "HTML",
  //   "CSS",
  //   "Java",
  //   "MUI",
  //   "TailwindCSS",
  // ];
  return (
    <>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src={imageUrl}
            // src="https://lottie.host/0a5c80b2-0528-45a9-97b8-3361f7465ab0/7zBJsBzWdn.json"
            background="transparent"
            speed="1"
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est
            aspernatur velit vitae rerum fugiat sapiente necessitatibus fuga
            voluptatibus maiores? Ipsum, mollitia nemo? Quae optio corporis
            expedita alias totam sed. */}
            {aboutMe}
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam
            dolorum inventore tenetur assumenda! Hic aliquid ratione ipsam ea
            voluptatibus necessitatibus in laudantium voluptatum consequuntur
            cupiditate excepturi, praesentium aspernatur et asperiores. Nisi
            ipsa, vero autem quia suscipit quod deleniti quidem!
          </p>
        </div>
      </div>

      {/* skills */}
      <div>
        <h1 className="text-tertiary py-4">
          Here are a few technologies I've been working with recently:
        </h1>

        <div className="flex flex-wrap justify-start gap-x-10">
          {technologies.map((skill) => (
            <div
              key={skill}
              className="flex flex-row justify-evenly border-2 border-tertiary text-tertiary rounded w-[20vh] my-3 py-3 px-1 sm:w-25 sm:px-2 sm:mx-2"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
