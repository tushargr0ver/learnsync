import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is installed

const PersonalizedLearningCards = () => {
    const [user, setUser] = useState(null); // State to store current user
    const [interests, setInterests] = useState([]); // State to store user interests
    const [relatedContent, setRelatedContent] = useState([]); // State to store related content from Gemini
    const navigate = useNavigate();

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

            // Fetch interests from Supabase
            fetchInterests(currentUser.id);
        }
    }, [navigate]);

    const fetchInterests = async (userId) => {
        try {
            // Fetch interests from the 'personalized_interests' table in Supabase
            const { data, error } = await supabase
                .from('personalized_interests')
                .select('interests')
                .eq('student_id', userId)
                .single();

            if (error) throw error;

            // Set the fetched interests in the state
            setInterests(data.interests);
            console.log("Fetched interests:", data.interests); // Print interests to the terminal

            // Fetch related content from Gemini for each interest
            fetchRelatedContent(data.interests);

        } catch (error) {
            console.error('Error fetching interests:', error.message);
        }
    };
    const fetchRelatedContent = async (interests) => {
        try {
            const responses = await Promise.allSettled(
                interests.map(async (interest) => {
                    const response = await axios.get('http://localhost:5000/api/related-content', {
                        params: { topic: interest },
                    });
                    return response.data;
                })
            );
    
            const successfulResponses = responses.filter(result => result.status === 'fulfilled').map(result => result.value);
            setRelatedContent(successfulResponses);
    
            console.log("Fetched related content:", successfulResponses);
        } catch (error) {
            console.error('Error fetching related content from backend:', error.message);
        }
    };
    
    return (
        <div>
            <h1>Personalized Learning Cards</h1>
            <h2>Your Interests:</h2>
            <ul>
                {interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                ))}
            </ul>

            <h2>Related Learning Content:</h2>
            {relatedContent.length > 0 ? (
                relatedContent.map((content, index) => (
                    <div key={index}>
                        <h3>{content.title}</h3>
                        <p>{content.description}</p>
                        <a href={content.url} target="_blank" rel="noopener noreferrer">Learn More</a>
                    </div>
                ))
            ) : (
                <p>No related content available</p>
            )}
        </div>
    );
};

export default PersonalizedLearningCards;
