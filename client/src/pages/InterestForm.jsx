import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useNavigate } from 'react-router-dom';

const InterestForm = () => {
  const [interestsList, setInterestsList] = useState([]); // fetched from DB
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [customInterest, setCustomInterest] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch all interests from DB
  useEffect(() => {
    const fetchInterests = async () => {
      const { data, error } = await supabase.from('interests').select('*');
      if (error) console.error('Error fetching interests:', error);
      else setInterestsList(data.map((item) => item.interest_value));
    };

    // Set session user
    const session = JSON.parse(localStorage.getItem('supabaseSession'));
    if (!session) {
      navigate('/');
      return;
    }
    setUser(session.user);

    fetchInterests();
  }, [navigate]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedInterests((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleAddCustomInterest = () => {
    if (customInterest && !selectedInterests.includes(customInterest)) {
      setSelectedInterests((prev) => [...prev, customInterest]);
      setCustomInterest('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.id) {
      console.error('User not found');
      return;
    }

    const { error } = await supabase
      .from('personalised_interests')
      .insert(
        [
          {
           user_id: user.id,
            interests: selectedInterests,
          },
        ]

      );

    if (error) {
      console.error('Error saving interests:', error);
    } else {
      console.log('Interests saved successfully!');
      navigate('/student');
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen flex justify-center items-center px-4">
      <div className="max-w-3xl w-full p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-black text-center mb-8">
          Choose Your Interest Fields
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h3 className="text-xl font-medium text-black mb-4">
              Available Interests:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {interestsList.map((field) => (
                <label key={field} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={field}
                    onChange={handleCheckboxChange}
                    checked={selectedInterests.includes(field)}
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                  <span className="text-gray-700">{field}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-black mb-4">
              Add Custom Interest:
            </h3>
            <div className="flex gap-3">
              <input
                type="text"
                value={customInterest}
                onChange={(e) => setCustomInterest(e.target.value)}
                placeholder="e.g. Game Development"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
              <button
                type="button"
                onClick={handleAddCustomInterest}
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg"
              >
                Add
              </button>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-black mb-2">
              Selected Interests:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {selectedInterests.map((field, index) => (
                <li key={index}>{field}</li>
              ))}
            </ul>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition duration-200"
          >
            Save Interests
          </button>
        </form>
      </div>
    </div>
  );
};

export default InterestForm;
