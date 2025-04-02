import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TeacherHomePage = () => {

    const [quizName, setQuizName] = useState("");

    const navigate = useNavigate();


    const { id } = useParams();
    console.log({ id });


    const [isUploadOpen, setIsUploadOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === "application/pdf") {
            setSelectedFile(file);
        } else {
            alert("Please upload a valid PDF file.");
            setSelectedFile(null);
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            alert(`"${selectedFile.name}" uploaded successfully!`);
            setSelectedFile(null);
            setIsUploadOpen(false);
        }
    };

   

    const location = useLocation()
    const name = location.state?.user.user_metadata.full_name

    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-6 py-8 bg-[#F8F9FA]">

                {/* Header */}
                <h1 className="text-3xl font-semibold text-gray-900">Welcome, Professor {name}!</h1>
                <p className="text-gray-700 text-lg mt-1">
                    You have <span className="text-blue-500 font-medium">2 lectures</span> and
                    <span className="text-blue-500 font-medium"> 4 assignments</span> to review today.
                </p>

                {/* Schedule */}
                <section className="my-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Today's Schedule</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-medium text-gray-900">Algorithms Lecture</h3>
                                <p className="text-gray-600">10:00 AM - 11:30 AM</p>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                Start Class
                            </button>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-medium text-gray-900">Software Engineering</h3>
                                <p className="text-gray-600">2:00 PM - 3:30 PM</p>
                            </div>
                            <button className="bg-gray-100 text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200">
                                Set Reminder
                            </button>
                        </div>
                    </div>
                </section>

                {/* Pending Tasks */}
                <section className="my-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Pending Tasks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-medium text-gray-900">Assignment Reviews</h3>
                                <p className="text-gray-600">6 Pending Submissions</p>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                Review
                            </button>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-medium text-gray-900">Student Queries</h3>
                                <p className="text-gray-600">3 Unanswered Questions</p>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                Respond
                            </button>
                        </div>
                    </div>
                </section>

                {/* Quick Actions */}
                <section className="my-6 flex flex-row  justify-start items-center gap-4">
                    <h2 className="text-2xl w-full font-semibold text-gray-900">Quick Actions</h2>
                    <div className="flex w-full gap-4 mt-4">
                        <button
                            className="bg-blue-500 w-full text-white px-4 py-3 rounded-md flex-1 hover:bg-blue-600"
                            onClick={() => setIsUploadOpen(true)}
                        >
                            Upload Study Material
                        </button>
                        <button className="bg-blue-500 w-full text-white px-4 py-3 rounded-md flex-1 hover:bg-blue-600">
                            Schedule Live Session
                        </button>
                    </div>
                </section>

                {/* Upload Study Material Modal */}
                {isUploadOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                            <h2 className="text-xl font-semibold text-gray-900">Upload Study Material</h2>
                            <input
                                type="file"
                                accept="application/pdf"
                                onChange={handleFileChange}
                                className="w-full mt-3 p-2 border rounded-md"
                            />
                            {selectedFile && (
                                <p className="text-gray-600 mt-2">Selected: {selectedFile.name}</p>
                            )}
                            <div className="flex justify-end gap-2 mt-4">
                                <button
                                    className="bg-gray-300 px-4 py-2 rounded-md"
                                    onClick={() => setIsUploadOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className={`px-4 py-2 rounded-md ${selectedFile ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}
                                    disabled={!selectedFile}
                                    onClick={handleUpload}
                                >
                                    Upload
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Recent Activity */}
                <section className="my-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Recent Activity</h2>
                    <ul className="mt-4">
                        <li className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm mb-2">
                            <p className="text-gray-600">John Doe submitted the "Data Structures" assignment.</p>
                        </li>
                        <li className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm mb-2">
                            <p className="text-gray-600">Alice's performance improved in the last quiz.</p>
                        </li>
                    </ul>
                </section>

                <section className="my-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">Create Quiz for Students</h2>
                    <input
                        type="text"
                        placeholder="Enter Quiz Name"
                        value={quizName}
                        onChange={(event) => setQuizName(event.target.value)}
                        className="border p-2 mb-2 w-96"
                    />
                    <button
                        onClick={() => navigate(`/teacher/create/quiz/${quizName}`)}
                        className="px-4 py-2 rounded-md bg-blue-500 text-white"
                    >
                        Create Quiz
                    </button>


                </section>


            </div>
        </div>
    );
};

export default TeacherHomePage;

