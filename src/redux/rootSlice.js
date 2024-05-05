import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    loading: false,
    portfolioData: null,
    courseData: null,
    experienceData: null,
    projectData: null,
  },
  reducers: {
    showLoading: (state, action) => {
      state.loading = true;
    },
    hideLoading: (state, action) => {
      state.loading = false;
    },
    setPortfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
    setCourseData: (state, action) => {
      state.courseData = action.payload;
    },
    setExperienceData: (state, action) => {
      state.experienceData = action.payload;
    },
    setProjectData: (state, action) => {
      state.projectData = action.payload;
    },
  },
});

export default rootSlice.reducer;
export const {
  showLoading,
  hideLoading,
  setPortfolioData,
  setCourseData,
  setExperienceData,
  setProjectData,
} = rootSlice.actions;
