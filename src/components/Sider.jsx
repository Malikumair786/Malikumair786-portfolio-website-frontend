import React from "react";

const Sider = () => {
  return (
    <div className="fixed left-0 bottom-0 px-7 sm:static sm:pb-5">
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a href="https://www.facebook.com/MalikUmairAwan160/">
          <i className="ri-facebook-circle-fill text-gray-600"></i>
        </a>

        <a href="mailto:malikumairawan160@gmail.com">
          <i className="ri-mail-line text-gray-600"></i>
        </a>

        <a href="https://www.instagram.com/innoxent_umair786?igsh=MTgybnF4YWo2aWd0Mw==">
          <i className="ri-instagram-fill text-gray-600"></i>
        </a>

        <a href="https://www.linkedin.com/in/umair-malik-709a99240/">
          <i className="ri-linkedin-box-fill  text-gray-600"></i>
        </a>

        <a href="https://github.com/Malikumair786">
          <i className="ri-github-fill  text-gray-600"></i>
        </a>

        <div className="w-[1px] h-32  bg-[#173c72] sm:hidden" />
      </div>
    </div>
  );
};

export default Sider;
