const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const {createClient} = require('@supabase/supabase-js'); //it is a supabase client that helps us to connect to the Supabase db

const app = express();
const port = process.env.PORT || 5000;

const JDoodle_CLIENT_ID = process.env.JDOODLE_ID;
const JDoodle_CLIENT_SECRET = process.env.JDOODLE_SECRET;

app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY); //connecting to Supabse db
console.log(process.env.SUPABASE_KEY)

// Get all messages (fetching the messages based of group_id)
app.get('/messages/:group_id', async (req, res) => {
  const { group_id } = req.params;
  const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('group_id', group_id)
      .order('created_at', { ascending: true });

  if (error) return res.status(400).json({ error });
  res.json(data);
});

// Create a new message (from the user to the group)
app.post('/messages/', async (req, res) => {
  const { group_id, sender_id, content } = req.body;
  const { data, error } = await supabase
      .from('messages')
      .insert([{ group_id, sender_id, content }])
      .select('*')

  if (error) return res.status(400).json({ error });
  res.json(data);
});


app.post("/execute", async (req, res) => {
  try {
      const { script, language, versionIndex } = req.body;
      const response = await axios.post("https://api.jdoodle.com/v1/execute", {
          clientId: JDoodle_CLIENT_ID,
          clientSecret: JDoodle_CLIENT_SECRET,
          script,
          language,
          versionIndex,
      });

      res.json(response.data);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

app.post('/api/ask', async (req, res) => {
  const { question } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`; 

  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY not set.' });
  }

  if (!question || question.trim().length === 0) {
    return res.status(400).json({ error: 'Question cannot be empty.' });
  }

  try {
    const response = await axios.post(apiUrl, {
      contents: [{
        parts: [{
          text: `Answer the following educational question. If the question is not educational, respond that you can only answer educational questions. Question: ${question}`
        }]
      }]
    },
    {
        headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey, 
        }
    });

    if (!response.data || !response.data.candidates || response.data.candidates.length === 0 || !response.data.candidates[0].content || !response.data.candidates[0].content.parts || response.data.candidates[0].content.parts.length === 0) {
        console.error('Gemini API response malformed:', response.data);
        return res.status(500).json({error: 'Gemini API response malformed'});
    }

    const answer = response.data.candidates[0].content.parts[0].text;
    res.json({ answer });
  } catch (error) {
    console.error('Gemini API error:', error);
    if (error.response) {
      console.error('Gemini API response data:', error.response.data);
      console.error('Gemini API response status:', error.response.status);
      return res.status(error.response.status).json({ error: 'Gemini API error.' });
    }
    res.status(500).json({ error: 'Failed to get answer from Gemini API.' });
  }
});



app.post("/generate-quiz", async (req, res) => {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  console.log(GEMINI_API_KEY)

  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: "GEMINI_API_KEY not set." });
  }

  try {
    const { topic, difficulty } = req.body;
    console.log("Received request to generate quiz");

    if (!topic || !difficulty) {
      return res.status(400).json({ error: "Topic and difficulty are required." });
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent`;

    const response = await axios.post(
      apiUrl,
      {
        contents: [
          {
            parts: [
              {
                text: `Generate a ${difficulty} level quiz on ${topic} with 5 multiple-choice questions. Each question should have 4 options and one correct answer. Format it in JSON.`
              }
            ]
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": GEMINI_API_KEY, // ✅ Correct API key usage
        }
      }
    );

    if (!response.data || !response.data.candidates || response.data.candidates.length === 0) {
      console.error("Gemini API response malformed:", response.data);
      return res.status(500).json({ error: "Failed to generate quiz, invalid response from API." });
    }

    let quizContent = response.data.candidates[0]?.content?.parts[0]?.text || "No quiz generated.";

    // Remove triple backticks if present
    quizContent = quizContent.replace(/```json|```/g, "").trim();

    try {
      quizContent = JSON.parse(quizContent);
      res.json({ quiz: quizContent }); // Send response only if parsing succeeds
    } catch (error) {
      console.error("Error parsing quiz JSON:", error);
      res.status(500).json({ error: "Invalid quiz format received from API." });
    }

  } catch (error) {
    console.error("Error generating quiz:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: "Failed to generate quiz.", details: error.message });
  }
});


app.get("/", (req,res)=>{
  res.send("Server is running")
})


app.get("/api/quizzes/questions", async (req, res) => {
  try {
    const { quiz_id } = req.query; // Get quiz_id from query params

    if (!quiz_id) {
      return res.status(400).json({ error: "quiz_id is required" });
    }

    const { data, error } = await supabase
      .from("questions")
      .select("*")
      .eq("quiz_id", quiz_id);

    if (error) {
      return res.status(500).json({ error: "Error fetching questions" });
    }

    if (!data.length) {
      return res.status(404).json({ error: "No questions found for this quiz" });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching questions:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});




app.post("/api/quiz/attempt", async (req, res) => {
  try{
  const { quiz_id, student_id, answers } = req.body; 

        if (!quiz_id || !student_id || !answers || Object.keys(answers).length === 0) {
            return res.status(400).json({ error: "Quiz ID, student ID, and answers are required" });
        }

        const responsesArray = Object.keys(answers).map((question_id) => ({
            quiz_id: quiz_id,
            student_id: student_id, // Include student ID
            question_id: question_id,
            response: answers[question_id], // Store selected answer
        }));

      const { data, error } = await supabase
          .from("responses")
          .insert(responsesArray);

      if (error) {
          console.error("Supabase Error:", error);
          return res.status(500).json({ error: "Failed to save responses" });
      }

      res.status(201).json({ message: "Responses saved successfully", data });
  } catch  (err) {
      console.error("Server Error:", err);
      res.status(500).json({ error: "Server error" });
  }
});





// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});