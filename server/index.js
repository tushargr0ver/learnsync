// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
// require('dotenv').config();

// const {createClient} = require('@supabase/supabase-js'); //it is a supabase client that helps us to connect to the Supabase db

// const app = express();
// const port = process.env.PORT || 5000;

// const JDoodle_CLIENT_ID = process.env.JDOODLE_ID;
// const JDoodle_CLIENT_SECRET = process.env.JDOODLE_SECRET;

// app.use(cors());
// app.use(express.json());

// const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY); //connecting to Supabse db
// console.log(process.env.SUPABASE_KEY)

// // Get all messages (fetching the messages based of group_id)
// app.get('/messages/:group_id', async (req, res) => {
//   const { group_id } = req.params;
//   const { data, error } = await supabase
//       .from('messages')
//       .select('*')
//       .eq('group_id', group_id)
//       .order('created_at', { ascending: true });

//   if (error) return res.status(400).json({ error });
//   res.json(data);
// });

// // Create a new message (from the user to the group)
// app.post('/messages/', async (req, res) => {
//   const { group_id, sender_id, content } = req.body;
//   const { data, error } = await supabase
//       .from('messages')
//       .insert([{ group_id, sender_id, content }])
//       .select('*')

//   if (error) return res.status(400).json({ error });
//   res.json(data);
// });


// app.post("/execute", async (req, res) => {
//   try {
//       const { script, language, versionIndex } = req.body;
//       const response = await axios.post("https://api.jdoodle.com/v1/execute", {
//           clientId: JDoodle_CLIENT_ID,
//           clientSecret: JDoodle_CLIENT_SECRET,
//           script,
//           language,
//           versionIndex,
//       });

//       res.json(response.data);
//   } catch (error) {
//       res.status(500).json({ error: error.message });
//   }
// });

// app.post('/api/ask', async (req, res) => {
//   const { question } = req.body;
//   const apiKey = process.env.GEMINI_API_KEY;
//   const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`; 

//   if (!apiKey) {
//     return res.status(500).json({ error: 'GEMINI_API_KEY not set.' });
//   }

//   if (!question || question.trim().length === 0) {
//     return res.status(400).json({ error: 'Question cannot be empty.' });
//   }

//   try {
//     const response = await axios.post(apiUrl, {
//       contents: [{
//         parts: [{
//           text: `Answer the following educational question. If the question is not educational, respond that you can only answer educational questions. Question: ${question}`
//         }]
//       }]
//     },
//     {
//         headers: {
//             'Content-Type': 'application/json',
//             'x-goog-api-key': apiKey, 
//         }
//     });

//     if (!response.data || !response.data.candidates || response.data.candidates.length === 0 || !response.data.candidates[0].content || !response.data.candidates[0].content.parts || response.data.candidates[0].content.parts.length === 0) {
//         console.error('Gemini API response malformed:', response.data);
//         return res.status(500).json({error: 'Gemini API response malformed'});
//     }

//     const answer = response.data.candidates[0].content.parts[0].text;
//     res.json({ answer });
//   } catch (error) {
//     console.error('Gemini API error:', error);
//     if (error.response) {
//       console.error('Gemini API response data:', error.response.data);
//       console.error('Gemini API response status:', error.response.status);
//       return res.status(error.response.status).json({ error: 'Gemini API error.' });
//     }
//     res.status(500).json({ error: 'Failed to get answer from Gemini API.' });
//   }
// });



// app.post("/generate-quiz", async (req, res) => {
//   const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
//   console.log(GEMINI_API_KEY)

//   if (!GEMINI_API_KEY) {
//     return res.status(500).json({ error: "GEMINI_API_KEY not set." });
//   }

//   try {
//     const { topic, difficulty } = req.body;
//     console.log("Received request to generate quiz");

//     if (!topic || !difficulty) {
//       return res.status(400).json({ error: "Topic and difficulty are required." });
//     }

//     const apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent`;

//     const response = await axios.post(
//       apiUrl,
//       {
//         contents: [
//           {
//             parts: [
//               {
//                 text: `Generate a ${difficulty} level quiz on ${topic} with 5 multiple-choice questions. Each question should have 4 options and one correct answer. Format it in JSON.`
//               }
//             ]
//           }
//         ]
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "x-goog-api-key": GEMINI_API_KEY, // ✅ Correct API key usage
//         }
//       }
//     );

//     if (!response.data || !response.data.candidates || response.data.candidates.length === 0) {
//       console.error("Gemini API response malformed:", response.data);
//       return res.status(500).json({ error: "Failed to generate quiz, invalid response from API." });
//     }

//     let quizContent = response.data.candidates[0]?.content?.parts[0]?.text || "No quiz generated.";

//     // Remove triple backticks if present
//     quizContent = quizContent.replace(/```json|```/g, "").trim();

//     try {
//       quizContent = JSON.parse(quizContent);
//       res.json({ quiz: quizContent }); // Send response only if parsing succeeds
//     } catch (error) {
//       console.error("Error parsing quiz JSON:", error);
//       res.status(500).json({ error: "Invalid quiz format received from API." });
//     }

//   } catch (error) {
//     console.error("Error generating quiz:", error.response ? error.response.data : error.message);
//     res.status(500).json({ error: "Failed to generate quiz.", details: error.message });
//   }
// });


// app.get("/", (req,res)=>{
//   res.send("Server is running")
// })
// // changes made 
// // for implementing
// //  video display
// app.get("/videos", async (req, res) => {
//   const { data, error } = await supabase.from("videolist").select("video_url");

//   if (error) {
//       return res.status(500).json({ error: "Failed to fetch videos", details: error });
//   }

//   res.json(data.map(item => item.video_url)); // Send an array of video URLs
// });

// app.listen(port, () => {
//   if (!process.env.GEMINI_API_KEY){
//     console.error('GEMINI_API_KEY not set. Server will not function correctly');
//   }
//   console.log(`Server listening on port ${port}`);
// });
import express from "express";
import cors from "cors";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import fs from "fs";
import { exec } from "child_process";
import axios from "axios";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 8000;

// Supabase client setup
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const CDNURL = `${process.env.SUPABASE_URL}/storage/v1/object/public/videos/`;

// Middleware setup
app.use(cors({ origin: ["http://localhost:3000", "http://localhost:5173"], credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// Multer storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + uuidv4() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// Home route
app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

// Video upload and conversion
app.post("/uploadVideo", upload.single("videofile"), async (req, res) => {
  const lessonId = uuidv4();
  const videoPath = req.file.path;
  const outputPath = `./uploads/courses/${lessonId}`;
  const hlsPath = `${outputPath}/index.m3u8`;

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }

  // FFmpeg command to convert video to HLS format
  const ffmpegCommand = `ffmpeg -i ${videoPath} -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename "${outputPath}/segment%03d.ts" -start_number 0 ${hlsPath}`;

  exec(ffmpegCommand, async (error, stdout, stderr) => {
    if (error) return res.status(500).json({ error: "FFmpeg conversion failed", details: error });

    const files = fs.readdirSync(outputPath);
    for (const fileName of files) {
      const filePath = path.join(outputPath, fileName);
      const fileBuffer = fs.readFileSync(filePath);

      const { error: uploadError } = await supabase.storage
        .from("videos")
        .upload(`${lessonId}/${fileName}`, fileBuffer, {
          contentType: getMimeType(fileName),
        });

      if (uploadError) return res.status(500).json({ error: "Failed to upload HLS files" });

      fs.unlinkSync(filePath);
    }

    fs.unlinkSync(videoPath);
    fs.rmSync(outputPath, { recursive: true, force: true });


    const videoUrl = `${CDNURL}${lessonId}/index.m3u8`;
    const { error: dbError } = await supabase.from("videolist").insert([{ id: lessonId, video_url: videoUrl }]);

    if (dbError) return res.status(500).json({ error: "Failed to store video URL" });

    res.json({ message: "Video uploaded and converted", videoUrl, lessonId });
  });

  function getMimeType(fileName) {
    if (fileName.endsWith(".m3u8")) return "application/vnd.apple.mpegurl";
    if (fileName.endsWith(".ts")) return "video/mp2t";
    return "application/octet-stream";
  }
});

// Fetch videos
app.get("/videos", async (req, res) => {
  const { data, error } = await supabase.from("videolist").select("video_url");
  if (error) return res.status(500).json({ error: "Failed to fetch videos" });
  res.json(data.map((item) => item.video_url));
});

// Messages API
app.get("/messages/:group_id", async (req, res) => {
  const { group_id } = req.params;
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("group_id", group_id)
    .order("created_at", { ascending: true });

  if (error) return res.status(400).json({ error });
  res.json(data);
});

app.post("/messages", async (req, res) => {
  const { group_id, sender_id, content } = req.body;
  const { data, error } = await supabase.from("messages").insert([{ group_id, sender_id, content }]);

  if (error) return res.status(400).json({ error });
  res.json(data);
});

// Code execution API (JDoodle)
app.post("/execute", async (req, res) => {
  try {
    const { script, language, versionIndex } = req.body;
    const response = await axios.post("https://api.jdoodle.com/v1/execute", {
      clientId: process.env.JDOODLE_ID,
      clientSecret: process.env.JDOODLE_SECRET,
      script,
      language,
      versionIndex,
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// AI-powered Question & Quiz API (Gemini)
app.post("/api/ask", async (req, res) => {
  const { question } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) return res.status(500).json({ error: "GEMINI_API_KEY not set." });

  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        contents: [{ parts: [{ text: `Answer this educational question: ${question}` }] }],
      },
      { headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey } }
    );

    const answer = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
    res.json({ answer });
  } catch (error) {
    res.status(500).json({ error: "Failed to get answer" });
  }
});

app.post("/generate-quiz", async (req, res) => {
  const { topic, difficulty } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) return res.status(500).json({ error: "GEMINI_API_KEY not set." });

  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent",
      {
        contents: [{ parts: [{ text: `Generate a ${difficulty} quiz on ${topic} with 5 MCQs.` }] }],
      },
      { headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey } }
    );

    let quizContent = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
    quizContent = quizContent.replace(/```json|```/g, "").trim();

    res.json({ quiz: JSON.parse(quizContent) });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate quiz" });
  }
});

// Start server
app.listen(port, () => {
  if (!process.env.GEMINI_API_KEY) console.error("GEMINI_API_KEY not set.");
  console.log(`Server running on port ${port}`);
});
