// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const AdminCourses = () => {
//   const [selectedItemIndex, setSelectedItemIndex] = useState(0);
//   const [courseData, setCourseData] = useState([]);

//   useEffect(() => {
//     const fetchAllCourses = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_API_URL}/courses`
//         );
//         setCourseData(response.data);
//       } catch (error) {
//         console.error("Error fetching admin data:", error);
//       }
//     };
//     fetchAllCourses();
//   }, []);

//   return (
//     <div className="flex flex-wrap justify-start">
//       {courseData.map((course, index) => (
//         <Link
//           to={`${process.env.REACT_APP_API_URL}/course/${course._id}`}
//           key={course._id}
//           className="cursor-pointer"
//         >
//           <div className="max-w-sm p-6 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
//               {course.title}
//             </h5>
//             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden">
//               {course.description}
//             </p>
//             <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//               Read more
//               <svg
//                 className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 14 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 5h12m0 0L9 1m4 4L9 9"
//                 />
//               </svg>
//             </button>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default AdminCourses;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminCourses = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [courseData, setCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        setIsLoading(true); // Start loading before fetching data
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/courses`
        );
        setCourseData(response.data);
      } catch (error) {
        console.error("Error fetching courses data:", error);
      } finally {
        setIsLoading(false); // End loading after fetching data
      }
    };
    fetchAllCourses();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Loading indicator
  }

  return (
    <div className="flex flex-wrap justify-start">
      {courseData.map((course, index) => (
        <Link
          to={`/course/${course._id}`} // Updated Link to use client-side routing path
          key={course._id}
          className="cursor-pointer"
        >
          <div className="max-w-sm p-6 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
              {course.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden">
              {course.description}
            </p>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AdminCourses;
