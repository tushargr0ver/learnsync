import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PersonalisedLearning = () => {
    const { interest } = useParams();
    const [content, setContent] = useState(null);

    useEffect(() => {
        if (!interest) return;

        axios.get('/api/related-content', {
            params: { topic: interest }
        })
            .then(res => setContent(res.data))
            .catch(err => console.error("Error fetching content:", err));
    }, [interest]);

    return (
        <div className="min-h-screen bg-white px-6 py-10 md:px-16 text-black">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-semibold mb-8 text-black">Personalized Learning: {interest}</h1>

                {content ? (
                    <div className="grid gap-10">
                        <section className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Summary</h2>
                            <p className="text-gray-700 leading-relaxed">{content.summary}</p>
                        </section>

                        <section className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Key Concepts</h2>
                            <ul className="list-disc list-inside space-y-1 text-gray-800">
                                {content.key_concepts?.map((point, idx) => <li key={idx}>{point}</li>)}
                            </ul>
                        </section>

                        <section className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                            <h2 className="text-2xl font-semibold text-blue-700 mb-2"> Important Facts</h2>
                            <ul className="list-disc list-inside space-y-1 text-gray-800">
                                {content.important_facts?.map((fact, idx) => <li key={idx}>{fact}</li>)}
                            </ul>
                        </section>

                        <section className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Real-world Examples</h2>
                            <ul className="list-disc list-inside space-y-1 text-gray-800">
                                {content.examples?.map((ex, idx) => <li key={idx}>{ex}</li>)}
                            </ul>
                        </section>
                        
                        <section className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Roadmap to Master {interest}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-gray-800">
                                {content.roadmap?.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                ))}
                            </ol>
                        </section>


                        <section className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Videos</h2>
                            <ul className="list-disc list-inside space-y-1 text-blue-700">
                                {content.video_resources?.map((res, idx) => (
                                    <li key={idx}>
                                        <a href={res.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            {res.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Website Resources</h2>
                            <ul className="list-disc list-inside space-y-1 text-blue-700">
                                {content.website_resources?.map((res, idx) => (
                                    <li key={idx}>
                                        <a href={res.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            {res.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/*
            <section className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">📝 Quiz</h2>
              <form onSubmit={(e) => { e.preventDefault(); handleQuizSubmit(); }}>
                {content.quiz?.map((q, idx) => (
                  <div key={idx} className="mb-6">
                    <p className="font-medium text-gray-800">{idx + 1}. {q.question}</p>
                    {q.options.map((opt, i) => (
                      <label key={i} className="block text-sm text-gray-700 mt-1">
                        <input
                          type="radio"
                          name={`q${idx}`}
                          value={opt}
                          checked={quizAnswers[idx] === opt}
                          onChange={() => handleOptionChange(idx, opt)}
                          className="mr-2"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                ))}
                <button type="submit" className="mt-4 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                  Submit Quiz
                </button>
              </form>
              {feedback && (
                <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded">
                  <p className="font-semibold">Your Score: {feedback.score}</p>
                  <p>{feedback.message}</p>
                </div>
              )}
            </section>
            */}

                        <section className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Related Topics</h2>
                            <ul className="flex flex-wrap gap-3 text-sm text-blue-700">
                                {content.related_topics?.map((rt, idx) => (
                                    <li key={idx} className="bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                                        {rt}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                ) : (
                    <p className="text-gray-500 text-lg mt-6">Loading personalized content for <strong>{interest}</strong>...</p>
                )}
            </div>
        </div>
    );
};

export default PersonalisedLearning;
