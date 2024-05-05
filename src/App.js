import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Loader from "./components/Loader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  hideLoading,
  setCourseData,
  setExperienceData,
  setPortfolioData,
  setProjectData,
  showLoading,
} from "./redux/rootSlice";
import Admin from "./pages/AdminPage";
function App() {
  const { loading, courseData } = useSelector((state) => state.root);

  const dispatch = useDispatch();

  useEffect(() => {
    const getPortfolioData = async () => {
      try {
        // showLoading();
        const adminResponse = await axios.get("/admin/");
        const courseResponse = await axios.get("/courses");
        const experienceResponse = await axios.get("/experience");
        const projectResponse = await axios.get("/project");

        dispatch(setPortfolioData(adminResponse.data));
        dispatch(setCourseData(courseResponse.data));
        dispatch(setExperienceData(experienceResponse.data));
        dispatch(setProjectData(projectResponse.data));
        // hideLoading()
      } catch (error) {
        console.log(error);
      }
    };
    getPortfolioData();
  }, []);

  useEffect(() => {
    console.log("course Data", courseData);
  }, [courseData]);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
