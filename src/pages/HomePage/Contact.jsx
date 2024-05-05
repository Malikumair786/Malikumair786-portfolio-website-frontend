import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const Contact = () => {
  const { portfolioData } = useSelector((state) => state.root);
  // Check if portfolioData array has any items
  const intro = portfolioData.length > 0 ? portfolioData[0] : null;

  // Destructure intro object if it exists
  const { name, phone, age, gender, email, country } = intro || {};

  const contactInfo = {
    name: name,
    age: age,
    gender: gender,
    email: email,
    phone: phone,
    country: country,
  };

  return (
    <>
      <SectionTitle title={"Say Hello"} />

      <div className="flex sm:flex-col">
        {/* left side */}
        <div className="text-tertiary text-sm flex-col mr-4 w-[40vw] sm:w-[100vw] mt-16">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(contactInfo).map((key) => (
            <p key={key} className="text-tertiary">
              "{key}" : "{contactInfo[key]}"
            </p>
          ))}
          <p className="text-tertiary">{"}"}</p>
        </div>

        {/* right side */}
        <div className="w-[30vw] h-[50vh] sm:w-[80vw]">
          <dotlottie-player
            src="https://lottie.host/57cd1e68-179a-4f96-b607-1cc3c9d01fc0/9PLVRPj0TX.json"
            background="transparent"
            // style={{ width: "300px", height: "300px" }} // Adjust width and height as desired
          ></dotlottie-player>
        </div>
      </div>
    </>
  );
};

export default Contact;
