import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

const InterestForm = () => {
    const [interestedFields, setInterestedFields] = useState([]);
    const [customInterest, setCustomInterest] = useState('');
    const [user, setUser] = useState(null); // State to store current user
    const navigate = useNavigate();

    // Popular fields
    const popularFields = [
        'Computer Science', 'DSA and Algorithms', 'Artificial Intelligence',
        'Web Development', 'Operating Systems', 'Data Science'
    ];

    useEffect(() => {
        const savedSession = localStorage.getItem("supabaseSession");
        const session = savedSession ? JSON.parse(savedSession) : null;

        if (!session) {
            navigate('/'); // Redirect to login if no session is found
            return;
        }

        const currentUser = session.user;
        if (currentUser) {
            setUser(currentUser); // Set user from session data
        }
    }, [navigate]);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setInterestedFields((prevFields) =>
            prevFields.includes(value)
                ? prevFields.filter((field) => field !== value)
                : [...prevFields, value]
        );
    };

    const handleCustomInterestChange = (event) => {
        setCustomInterest(event.target.value);
    };

    const handleAddCustomInterest = () => {
        if (customInterest && !interestedFields.includes(customInterest)) {
            setInterestedFields((prevFields) => [...prevFields, customInterest]);
            setCustomInterest('');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!user || !user.id) {
            console.error('User ID is missing!');
            return; // Prevent submitting if user is not logged in or user.id is missing
        }

        // Update the user's interests with an array of selected interests
        const { error } = await supabase
            .from('personalized_interests')
            .upsert( // Use upsert to insert or update the row
                [
                    {
                        student_id: user.id, // Use the user's ID from the logged-in user
                        interests: interestedFields, // Store the selected interests as an array
                    }
                ],
                { onConflict: ['student_id'] } // Ensures the row is updated if student_id exists
            );

        if (error) {
            console.error('Error inserting/updating data:', error);
        } else {
            console.log('Interests successfully saved!');
            navigate('/student'); // Redirect to the home page
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center w-screen">
            <div className="max-w-3xl w-full p-6 bg-white shadow-lg rounded-lg mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Enter Your Interest Fields</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <h3 className="text-xl font-medium text-gray-700 mb-2">Popular Fields:</h3>
                        <div className="space-y-4">
                            {popularFields.map((field) => (
                                <label key={field} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        value={field}
                                        onChange={handleCheckboxChange}
                                        checked={interestedFields.includes(field)}
                                        className="form-checkbox h-5 w-5 text-blue-500"
                                    />
                                    <span className="text-gray-600">{field}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-medium text-gray-700 mb-2">Selected Fields:</h3>
                        <ul className="list-disc pl-5">
                            {interestedFields.map((field, index) => (
                                <li key={index} className="text-gray-600">{field}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-medium text-gray-700 mb-2">Add Your Custom Interest:</h3>
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                value={customInterest}
                                onChange={handleCustomInterestChange}
                                placeholder="Enter a custom interest"
                                className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="button"
                                onClick={handleAddCustomInterest}
                                className="bg-blue-500 text-white p-3 rounded-md"
                            >
                                Add Interest
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-green-500 text-white p-3 rounded-md w-full hover:bg-green-600 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InterestForm;
