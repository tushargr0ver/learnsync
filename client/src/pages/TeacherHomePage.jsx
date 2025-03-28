import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

const supabase = createClient(
  "https://tkdfsdnmlpbdmcuitdwo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrZGZzZG5tbHBiZG1jdWl0ZHdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2MTY3NTMsImV4cCI6MjA1ODE5Mjc1M30.uuWhiHlJbkA5RNf96l2TQBOcB4YRbrXvm7uXsxFdn8A"
);

const CDNURL =
  "https://crrabnwtxihiczadbdkn.supabase.co/storage/v1/object/public/videos/";

const TeacherHomePage = () => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadType, setUploadType] = useState("pdf");
  const [videos, setVideos] = useState([]);

  async function getVideos() {
    const { data, error } = await supabase.storage.from("videos").list("");
    if (data) setVideos(data);
    else console.error(error);
  }

  useEffect(() => {
    getVideos();
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const allowedType = uploadType === "pdf" ? "application/pdf" : "video/mp4";
    if (file && file.type === allowedType) setSelectedFile(file);
    else alert(`Please upload a valid ${uploadType.toUpperCase()} file.`);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const fileName = uuidv4() + (uploadType === "pdf" ? ".pdf" : ".mp4");

    const { error } = await supabase.storage
      .from("videos")
      .upload(fileName, selectedFile);

    if (error) {
      console.error(error);
      alert("Error uploading file to Supabase");
    } else {
      console.log("Upload Successful!");
      alert("Upload successful!");

      // Fetch the updated list of videos
      await getVideos();

      // Reset state & close modal
      setSelectedFile(null);
      setIsUploadOpen(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 bg-[#F8F9FA]">
        <h1 className="text-3xl font-semibold text-black/90">
          Welcome, Professor!
        </h1>
        <p className="text-gray-600 text-lg">
          You have{" "}
          <span className="text-blue-500 font-medium">
            2 scheduled lectures
          </span>{" "}
          and
          <span className="text-blue-500 font-medium"> 4 assignments</span> to
          review today.
        </p>

        <section className="my-6">
          <h2 className="text-2xl font-semibold text-black/90">Quick Actions</h2>
          <div className="flex gap-4 mt-4">
            <button
              className="bg-green-500 text-white px-4 py-3 rounded flex-1"
              onClick={() => {
                setIsUploadOpen(true);
                setUploadType("pdf");
              }}
            >
              Upload Study Material (PDF)
            </button>
            <button
              className="bg-indigo-500 text-white px-4 py-3 rounded flex-1"
              onClick={() => {
                console.log("Upload Video button clicked!"); // Debugging modal issue
                setIsUploadOpen(true);
                setUploadType("video");
              }}
            >
              Upload Lecture Video (MP4)
            </button>
            <button className="bg-purple-500 text-white px-4 py-3 rounded flex-1">
              Schedule Live Session
            </button>
          </div>
        </section>

        {isUploadOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full z-50">
              <h2 className="text-xl font-semibold text-black/90">
                Upload {uploadType === "pdf" ? "Study Material" : "Lecture Video"}
              </h2>
              <input
                type="file"
                accept={uploadType === "pdf" ? "application/pdf" : "video/mp4"}
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
                  className={`px-4 py-2 rounded ${
                    selectedFile
                      ? "bg-blue-500 text-white"
                      : "bg-gray-400 text-gray-200 cursor-not-allowed"
                  }`}
                  disabled={!selectedFile}
                  onClick={handleUpload}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        )}

        <section className="my-6 ">
          <h2 className="text-2xl font-semibold text-black/90 mb-4">Uploaded Videos</h2>
          <div >
            {videos.map((video) =>
              video.name !== ".emptyFolderPlaceholder" ? (
                <div key={video.name} className="bg-white rounded-lg shadow border mb-8 border-[#e2e2e2]">
  <div className="w-full h-52 bg-black rounded-t-lg flex items-center justify-center ">
    <video controls className="w-full h-full rounded-t-lg">
      <source src={CDNURL + video.name} type="video/mp4" />
    </video>
  </div>
  <div className="p-4">
    <h3 className="text-xl mb-2 text-black/90">{video.name}</h3>
    <button className="bg-blue-500 w-full text-white px-4 py-3 rounded hover:bg-blue-600 transition">
      Watch Now
    </button>
  </div>
</div>

              ) : null
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeacherHomePage;
