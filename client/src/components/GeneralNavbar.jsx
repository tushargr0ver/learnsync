import { Link } from 'react-router-dom';

function GeneralNavBar() {
    return (
        <nav className="bg-[#F8F9FA] shadow-md py-4 w-full">
            <div className="max-w-full mx-auto px-6 flex justify-between items-center">
                {/* Left Section - EduMorph */}
                <h1 className="text-3xl font-bold text-black/90">
                    Edu
                    <span className="text-[#008CFF]">Morph</span>
                </h1>

                {/* Center Section - Important Links */}
                <div className="flex space-x-3 mx-auto">
                    <Link to="/" className="text-gray-600 hover:text-[#008CFF] font-semibold py-2 px-4 transition-all duration-200">
                        Home
                    </Link>
                    <Link to="/ai-powered-learning" className="text-gray-600 hover:text-[#008CFF] font-semibold py-2 px-4 transition-all duration-200">
                        AI-Powered Learning
                    </Link>
                    <Link to="/live-classes" className="text-gray-600 hover:text-[#008CFF] font-semibold py-2 px-4 transition-all duration-200">
                        Live Classes
                    </Link>
                    <Link to="/study" className="text-gray-600 hover:text-[#008CFF] font-semibold py-2 px-4 transition-all duration-200">
                        Study Materials
                    </Link>
                    <Link to="/contact" className="text-gray-600 hover:text-[#008CFF] font-semibold py-2 px-4 transition-all duration-200">
                        Contact Us
                    </Link>

                </div>

                {/* Right Section - Signin Links */}
                <div className="space-x-4">
                    <Link to="/teacher-login">
                        <button className="border text-black/90 border-[#e2e2e2] font-medium py-2 px-4 rounded-lg transition-all duration-200">
                            Login as Teacher
                        </button>
                    </Link>
                    <Link to="/student-login">
                        <button className="bg-[#008CFF] text-white py-2 px-4 font-medium rounded-lg transition-all duration-200 hover:bg-[#0066CC]">
                            Login as Student
                        </button>
                    </Link>


                </div>
            </div>
        </nav>
    );
}

export default GeneralNavBar;
