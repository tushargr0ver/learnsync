const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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

app.listen(port, () => {
  if (!process.env.GEMINI_API_KEY){
    console.error('GEMINI_API_KEY not set. Server will not function correctly');
  }
  console.log(`Server listening on port ${port}`);
});