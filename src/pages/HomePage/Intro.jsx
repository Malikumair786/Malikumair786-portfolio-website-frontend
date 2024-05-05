// import React from "react";
// // import UmairImage from "../../assets/UmairImage.jpeg";
// import { useSelector } from "react-redux";

// const Intro = (props) => {
//   const { loading, portfolioData } = useSelector((state) => state.root);
//   const { intro } = portfolioData.loading > 0 ? portfolioData[0] : null;
//   console.log("POrtfolioirjeirjeiorj", portfolioData);
//   const { greetings, name, shortTitles, description } = intro || {};

//   return (
//     <div className="flex">
//       <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
//         <h1 className="text-white">
//           {/* Hi, I am */}
//           {/* {props.greetings} */}
//           {greetings}
//         </h1>
//         <h1 className="text-5xl sm:text-3xl text-secondary font-semibold">
//           {/* Umair Malik */}
//           {props.name}
//         </h1>
//         <h1 className="text-5xl sm:text-3xl text-white font-semibold">
//           {/* I build things for the web */}
//           {props.shortTitle}
//         </h1>
//         <p className="text-white w-2/3 sm:text-sm">
//           {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
//           possimus necessitatibus excepturi. Excepturi fuga iusto esse error at
//           ad provident dignissimos illum totam tenetur earum rerum consequatur
//           quibusdam, ipsum quod? */}
//           {props.description}
//         </p>
//         <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
//           Get Starter
//         </button>
//       </div>

//       {/* <div>
//         <image src={UmairImage} alt="UmairImage" />
//       </div> */}
//     </div>
//   );
// };

// export default Intro;

import React from "react";
import { useSelector } from "react-redux";

const Intro = () => {
  const { portfolioData } = useSelector((state) => state.root);
  // Check if portfolioData array has any items
  const intro = portfolioData.length > 0 ? portfolioData[0] : null;

  // Destructure intro object if it exists
  const { greetings, name, shortTitles, description } = intro || {};

  return (
    <div className="flex">
      <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
        <h1 className="text-white">{greetings}</h1>
        <h1 className="text-5xl sm:text-3xl text-secondary font-semibold">
          {name}
        </h1>
        <h1 className="text-5xl sm:text-3xl text-white font-semibold">
          {shortTitles}
        </h1>
        <p className="text-white w-2/3 sm:text-sm">{description}</p>
        <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Intro;
