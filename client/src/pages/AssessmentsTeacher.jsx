import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const AssessmentsTeacher = () => {
  const [assessments, setAssessments] = useState([
    { id: 1, name: 'Midterm Exam - Math', link: '#' },
    { id: 2, name: 'Final Exam - Science', link: '#' },
    { id: 3, name: 'Quiz on React', link: '#' },
  ]);

  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handle file upload
  const handleUpload = () => {
    if (selectedFile) {
      const newAssessment = {
        id: assessments.length + 1,
        name: selectedFile.name,
        link: '#', // Replace with actual file URL
      };

      setAssessments([...assessments, newAssessment]);
      setSelectedFile(null);
      alert('Assessment uploaded successfully!');
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center py-20 min-h-screen bg-gray-100 px-6">
        <h1 className="text-black text-3xl font-bold mb-4 text-center">Assessments</h1>
        <p className="text-gray-700 text-lg text-center mb-6 max-w-2xl">
          Upload new assessments and manage previously uploaded assignments.
        </p>

        {/* File Upload Section */}
        <div className="w-full flex flex-col items-center">
          <input 
            type="file" 
            className="mb-4 p-2 border rounded-lg" 
            onChange={handleFileChange} 
          />
          <button 
            onClick={handleUpload}
            className="bg-[#008CFF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#006FCC] transition">
            Upload Assessment
          </button>
        </div>

        {/* Assessments List */}
        <div className="mt-8 w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Previous Assessments</h2>
          <ul className="space-y-3">
            {assessments.map((assessment) => (
              <li key={assessment.id} className="border-b py-2 text-gray-600">
                📝 {assessment.name} - 
                <a href={assessment.link} className="text-[#008CFF] cursor-pointer ml-2">
                  Download
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AssessmentsTeacher;
