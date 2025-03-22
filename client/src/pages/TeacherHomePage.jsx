import { useState } from "react";
import Navbar from "../components/navbar";

const TeacherHomePage = () => {
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

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4 bg-[#F8F9FA]">

                {/* Header */}
                <h1 className="text-3xl font-semibold text-black/90">Welcome, Professor!</h1>
                <p className="text-gray-600 text-lg">
                    You have <span className="text-blue-500 font-medium">2 scheduled lectures</span> and
                    <span className="text-blue-500 font-medium"> 4 assignments</span> to review today.
                </p>

                {/* Today's Schedule */}
                <section className="my-6">
                    <h2 className="text-2xl font-semibold text-black/90">Today's Schedule</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white p-4 rounded border border-[#e2e2e2] flex justify-between items-center">
                            <div>
                                <h3 className="text-xl text-black/90">Algorithms Lecture</h3>
                                <p className="text-gray-600 text-lg">10:00 AM - 11:30 AM</p>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">Start Class</button>
                        </div>
                        <div className="bg-white p-4 rounded border border-[#e2e2e2] flex justify-between items-center">
                            <div>
                                <h3 className="text-xl text-black/90">Software Engineering</h3>
                                <p className="text-gray-600 text-lg">2:00 PM - 3:30 PM</p>
                            </div>
                            <button className="bg-gray-100 text-blue-500 px-4 py-2 rounded">Set Reminder</button>
                        </div>
                    </div>
                </section>

                {/* Pending Tasks */}
                <section className="my-6">
                    <h2 className="text-2xl font-semibold text-black/90">Pending Tasks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white p-4 rounded border border-[#e2e2e2] flex justify-between items-center">
                            <div>
                                <h3 className="text-xl text-black/90">Assignment Reviews</h3>
                                <p className="text-gray-600 text-lg">6 Pending Submissions</p>
                            </div>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded">Review</button>
                        </div>
                        <div className="bg-white p-4 rounded border border-[#e2e2e2] flex justify-between items-center">
                            <div>
                                <h3 className="text-xl text-black/90">Student Queries</h3>
                                <p className="text-gray-600 text-lg">3 Unanswered Questions</p>
                            </div>
                            <button className="bg-red-500 text-white px-4 py-2 rounded">Respond</button>
                        </div>
                    </div>
                </section>

                {/* Quick Actions */}
                <section className="my-6">
                    <h2 className="text-2xl font-semibold text-black/90">Quick Actions</h2>
                    <div className="flex gap-4 mt-4">
                        <button
                            className="bg-green-500 text-white px-4 py-3 rounded flex-1"
                            onClick={() => setIsUploadOpen(true)}
                        >
                            Upload Study Material
                        </button>
                        <button className="bg-purple-500 text-white px-4 py-3 rounded flex-1">
                            Schedule Live Session
                        </button>
                    </div>
                </section>

                {/* Upload Study Material Modal */}
                {isUploadOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                            <h2 className="text-xl font-semibold text-black/90">Upload Study Material</h2>
                            <input
                                type="file"
                                accept="application/pdf"
                                onChange={handleFileChange}
                                className="w-full mt-3 p-2 border rounded"
                            />
                            {selectedFile && (
                                <p className="text-gray-600 mt-2">Selected: {selectedFile.name}</p>
                            )}
                            <div className="flex justify-end gap-2 mt-4">
                                <button
                                    className="bg-gray-300 px-4 py-2 rounded"
                                    onClick={() => setIsUploadOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className={`px-4 py-2 rounded ${selectedFile ? "bg-blue-500 text-white" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}
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
                    <h2 className="text-2xl font-semibold text-black/90">Recent Activity</h2>
                    <ul className="mt-4">
                        <li className="bg-white p-3 rounded border border-[#e2e2e2] mb-2">
                            <p className="text-gray-600 text-lg">John Doe submitted the "Data Structures" assignment.</p>
                        </li>
                        <li className="bg-white p-3 rounded border border-[#e2e2e2] mb-2">
                            <p className="text-gray-600 text-lg">Alice's performance improved in the last quiz.</p>
                        </li>
                    </ul>
                </section>

            </div>
        </div>
    );
};

export default TeacherHomePage;
