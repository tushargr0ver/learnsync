import { useState, useEffect } from "react";
import axios from "axios";
import VideoPlayer from "./VideoPlayer";

function VideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/videos") // Adjust this URL as needed
      .then((response) => setVideos(response.data))
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  const handlePlayerReady = (player) => {
    player.on("waiting", () => console.log("player is waiting"));
    player.on("dispose", () => console.log("player will dispose"));
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow mx-auto w-[95%] p-6 mt-12 ml-0">
      {/* Header and video list in the same flex container */}
      <div className="flex flex-col w-full">
        {/* Video Resources Heading */}
        <h1 className="text-3xl px-3 py-4 text-black/90 font-semibold self-start">
          Video Resources
        </h1>

        {/* Video List */}
        {videos.length > 0 ? (
          <div className="flex flex-wrap gap-6 w-full">
            {videos.map((videoUrl, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-start lg:items-center gap-6 bg-blue-500 w-full lg:w-[95%] p-5 rounded-lg shadow-lg"
              >
                {/* Video Section */}
                <div className="w-full lg:w-2/3">
                  <VideoPlayer
                    options={{
                      controls: true,
                      responsive: true,
                      fluid: true,
                      sources: [{ src: videoUrl, type: "application/x-mpegURL" }],
                    }}
                    onReady={handlePlayerReady}
                  />
                </div>

                {/* Description Section */}
                <div className="w-full lg:w-1/3 flex flex-col justify-center">
                  <h2 className="text-3xl font-semibold">Video Name and Title</h2>
                  <p className="text-xl text-black">
                    Description of the video goes here.
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="px-3">Loading videos...</p>
        )}
      </div>
    </div>
  );
}

export default VideoList;