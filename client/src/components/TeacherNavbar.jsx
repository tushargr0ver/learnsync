import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import ProfilePopover from "./Popover";

const TeacherNavbar = () => {
  // const location = useLocation();

 

  return (
    <nav className="bg-[#F8F9FA] py-4 w-full">
      <div className="max-w-full mx-auto px-6 flex justify-between items-center">
        {/* Left Section - EduMorph Brand */}
        <a href="/">
        <h1 className="text-3xl font-bold text-black/90">
          Learn
          <span className="text-[#008CFF]">Sync</span>
        </h1>
        </a>
        <div className="flex space-x-3 mx-auto">       
              <>
              <Link
                  to="/teacher"
                  className="text-gray-600 hover:text-[#008CFF] font-semibold py-2 px-4 transition-all duration-200"
                >
                  Home
                </Link>
                <Link
                  to="/teacher/study-material"
                  className="text-gray-600 hover:text-[#008CFF] font-semibold py-2 px-4 transition-all duration-200"
                >
                  Study Material
                </Link>
                <Link
                  to="/live-sessions"
                  className="text-gray-600 hover:text-[#008CFF] font-semibold py-2 px-4 transition-all duration-200"
                >
                  Live Sessions
                </Link>
                <Link
                  to="/teacher/assessments"
                  className="text-gray-600 hover:text-[#008CFF] font-semibold py-2 px-4 transition-all duration-200"
                >
                  Assessments
                </Link>
                <Link
                  to="/student-progress"
                  className="text-gray-600 hover:text-[#008CFF] font-semibold py-2 px-4 transition-all duration-200"
                >
                  Student Progress
                </Link>
              </>
          </div>

          <div className="ml-auto">
            {/* <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full border mr-4 border-gray-300"
            /> */}
            <ProfilePopover/>
          </div>
          </div>
    </nav>
  );
};

export default TeacherNavbar;
