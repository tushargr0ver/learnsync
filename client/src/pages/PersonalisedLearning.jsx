import React, { useEffect } from 'react';
import axios from 'axios';

const PersonalisedLearning = () => {
  useEffect(() => {
    const topic = "space technology";

    axios.get('/api/related-content', {
      params: { topic }
    })
    .then(res => {
      console.log("Related content:", res.data.content);
      // You can display this in state later if needed
    })
    .catch(err => {
      console.error("Error fetching related content:", err);
    });
  }, []);

  return (
    <div className="p-6">
      <h1>Personalized Learning Content</h1>
    </div>
  );
};

export default PersonalisedLearning;
