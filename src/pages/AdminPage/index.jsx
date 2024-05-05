import React, { useState } from "react";
import Header from "../../components/Header";
import AdminMain from "./AdminMain";
import AdminExperience from "./AdminExperience";
import AdminProjects from "./AdminProjects";
import AdminCourses from "./AdminCourses";

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState("profile");

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <>
      <Header />

      <div>
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="default-tab"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  selectedTab === "profile" ? "border-tertiary" : ""
                }`}
                id="profile-tab"
                onClick={() => handleTabClick("profile")}
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected={selectedTab === "profile"}
              >
                Profile
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  selectedTab === "dashboard" ? "border-tertiary" : ""
                }`}
                id="dashboard-tab"
                onClick={() => handleTabClick("dashboard")}
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected={selectedTab === "dashboard"}
              >
                Experience
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  selectedTab === "settings" ? "border-tertiary" : ""
                }`}
                id="settings-tab"
                onClick={() => handleTabClick("settings")}
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected={selectedTab === "settings"}
              >
                Projects
              </button>
            </li>
            <li role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  selectedTab === "contacts" ? "border-tertiary" : ""
                }`}
                id="contacts-tab"
                onClick={() => handleTabClick("contacts")}
                type="button"
                role="tab"
                aria-controls="contacts"
                aria-selected={selectedTab === "contacts"}
              >
                Courses
              </button>
            </li>
          </ul>
        </div>
        <div id="default-tab-content">
          <div
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
              selectedTab === "profile" ? "" : "hidden"
            }`}
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <AdminMain />
            </p>
          </div>
          <div
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
              selectedTab === "dashboard" ? "" : "hidden"
            }`}
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <AdminExperience />
            </p>
          </div>
          <div
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
              selectedTab === "settings" ? "" : "hidden"
            }`}
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <AdminProjects />
            </p>
          </div>
          <div
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
              selectedTab === "contacts" ? "" : "hidden"
            }`}
            id="contacts"
            role="tabpanel"
            aria-labelledby="contacts-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <AdminCourses />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
