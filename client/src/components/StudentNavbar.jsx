import { Link } from "react-router-dom";
const StudentNavbar = () => {
  // const location = useLocation();

  // Determine role from URL
  

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
                  to="/student"
                  className="text-gray-600 hover:text-[#008CFF] font-semibold py-2 px-4 transition-all duration-200"
                >
                  Home
                </Link>
                <Link
                  to="/student/community"
                  className="text-gray-600 hover:text-[#008CFF] font-semibold py-2 px-4 transition-all duration-200"
                >
                  Community
                </Link>
                <Link
                  to="/student/chat-ai"
                  className="text-gray-600 hover:text-[#008CFF] font-semibold py-2 px-4 transition-all duration-200"
                >
                  AI Assistance
                </Link>
                <Link
                  to="/student/learn"
                  className="text-gray-600 hover:text-[#008CFF] font-semibold py-2 px-4 transition-all duration-200"
                >
                  Learning and Practice
                </Link>
                <Link
                  to="/saved-notes"
                  className="text-gray-600 hover:text-[#008CFF] font-semibold py-2 px-4 transition-all duration-200"
                >
                  Tools and Resources
                </Link>
              </>
          </div>

          <div className="ml-auto">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full border mr-4 border-gray-300"
            />
          </div>
      </div>
    </nav>
  );
};

export default StudentNavbar;
