import React from "react";

const Header = () => {
  return (
    <div className="px-10 py-5 bg-primary flex justify-between sticky top-0 left-0 w-full z-10">
      <h1 className="text-secondary text-2xl sm:text-2xl font-semibold">
        Projects
      </h1>
      <h1 className="text-white text-2xl sm:text-xl font-semibold">Home</h1>
      <h1 className="text-tertiary text-2xl sm:text-xl font-semibold">
        Contact
      </h1>
    </div>
  );
};

export default Header;
