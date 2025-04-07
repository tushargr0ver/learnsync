import React, { useEffect, useState } from 'react';
import { supabase } from "../utils/supabaseClient";
import { useNavigate, Link } from "react-router-dom";

const PersonalisedLearningCards = () => {
  const [interests, setInterests] = useState([]);
  const [newInterest, setNewInterest] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedSession = localStorage.getItem("supabaseSession");
    if (!savedSession) {
      navigate('/login');
      return;
    }

    const session = JSON.parse(savedSession);
    if (session.user.user_metadata.role !== 'student') {
      navigate('/');
      return;
    }

    if (session) {
      setUserId(session.user.id);
    }
  }, []);

  useEffect(() => {
    if (!userId) return;

    const fetchInterests = async () => {
      const { data, error } = await supabase
        .from('personalised_interests')
        .select('interests')
        .eq('user_id', userId);

      if (error) {
        console.error("❌ Supabase fetch error:", error);
      } else if (data.length > 0) {
        setInterests(data[0].interests);
      } else {
        // If no entry exists for this user, insert an empty array
        await supabase
          .from('personalised_interests')
          .insert({ user_id: userId, interests: [] });
      }
    };

    fetchInterests();
  }, [userId]);

  const addInterest = async () => {
    if (!newInterest.trim()) return;

    const updatedInterests = [...interests, newInterest.trim()];
    const { error } = await supabase
      .from('personalised_interests')
      .update({ interests: updatedInterests })
      .eq('user_id', userId);

    if (error) {
      console.error("❌ Error adding interest:", error);
    } else {
      setInterests(updatedInterests);
      setNewInterest('');
    }
  };

  const deleteInterest = async (interestToRemove) => {
    const updatedInterests = interests.filter((i) => i !== interestToRemove);
    const { error } = await supabase
      .from('personalised_interests')
      .update({ interests: updatedInterests })
      .eq('user_id', userId);

    if (error) {
      console.error("❌ Error deleting interest:", error);
    } else {
      setInterests(updatedInterests);
    }
  };

  return (
    <div className="bg-white p-6">
      <h1 className="text-2xl font-bold mb-4 text-black">Explore Topics based on your Interests</h1>

      {/* Add Interest Form */}
      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          value={newInterest}
          onChange={(e) => setNewInterest(e.target.value)}
          placeholder="Add a new interest"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addInterest}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      {interests.length === 0 ? (
        <p className="text-gray-500">No interests found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {interests.map((interest, index) => (
            <div key={index} className="bg-white shadow p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
              <Link to={`/student/personalised-learning/${interest}`}>
                <h2 className="font-semibold text-gray-800">{interest}</h2>
                <p className="text-sm text-gray-600 mt-2">
                  Explore personalized content on {interest}
                </p>
              </Link>
              <button
                onClick={() => deleteInterest(interest)}
                className="text-red-500 text-xs mt-2 underline"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PersonalisedLearningCards;
