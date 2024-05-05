import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "../../components/Footer";
import Sider from "../../components/Sider";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";

const HomePage = () => {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <>
      {!portfolioData ? (
        <div className="flex items-center justify-center bg-primary w-screen h-screen">
          <Loader />
        </div>
      ) : (
        <div className="bg-primary px-[7vw] sm:px-5">
          <Header />

          <Intro />
          <About />
          <Experiences />
          <Projects />
          <Courses />
          <Contact />
          <Footer />
          <Sider />
        </div>
      )}
    </>
  );
};

export default HomePage;
