import React, { useState } from "react";

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (!selectedFile) {
            alert("Please select a file first!");
            return;
        }
        console.log("Uploading file:", selectedFile.name);
        alert(`File "${selectedFile.name}" uploaded successfully!`);
    };

    return (
        <div className="bg-white p-4 rounded border border-gray-200 shadow">
            <h2 className="text-xl font-semibold text-black mb-2">Upload Notes</h2>
            <input type="file" onChange={handleFileChange} className="mb-2 border p-2 w-full" />
            <button 
                onClick={handleUpload} 
                className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition">
                Upload
            </button>
        </div>
    );
};

export default FileUpload;