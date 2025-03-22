import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const StudyMaterialTeacher = () => {
  const [materials, setMaterials] = useState([
    { id: 1, name: 'Introduction to React', link: '#' },
    { id: 2, name: 'JavaScript Basics', link: '#' },
    { id: 3, name: 'UI/UX Design Principles', link: '#' },
  ]);
  
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handle file upload
  const handleUpload = () => {
    if (selectedFile) {
      const newMaterial = {
        id: materials.length + 1,
        name: selectedFile.name,
        link: '#', // In a real app, this should be the actual file URL
      };

      setMaterials([...materials, newMaterial]);
      setSelectedFile(null);
      alert('File uploaded successfully!');
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center py-20 min-h-screen bg-gray-100 px-6">
        <h1 className="text-black text-3xl font-bold mb-4 text-center">Study Material</h1>
        <p className="text-gray-700 text-lg text-center mb-6 max-w-2xl">
          Welcome to the study material section. Here, you can upload, view, and manage study resources to assist students in their learning journey.
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
            Upload Study Material
          </button>
        </div>

        {/* Study Material List */}
        <div className="mt-8 w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Available Study Materials</h2>
          <ul className="space-y-3">
            {materials.map((material) => (
              <li key={material.id} className="border-b py-2 text-gray-600">
                📄 {material.name} - 
                <a href={material.link} className="text-[#008CFF] cursor-pointer ml-2">
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

export default StudyMaterialTeacher;
