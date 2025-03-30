
import { useState } from "react"
import {
  ChevronLeft,
  Award,
  Star,
  Zap,
  Target,
  Sliders,
  BookOpen,
  BarChart,
  MessageCircle,
  ChevronDown,
  ChevronUp,
} from "react-feather"
// import "./tailwind.css"

const AIPoweredLearning = ({ onNavigateToHome, onNavigateToSignup }) => {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "How does LearnSync's AI adapt to my learning style?",
      answer:
        "Our AI analyzes your interactions, response patterns, and learning progress to identify your preferred learning style. It tracks which types of content and explanations help you learn most effectively, then adjusts future materials accordingly. The system continuously refines its understanding of your preferences as you use the platform.",
    },
    {
      question: "Can the AI help with subjects I'm struggling with?",
      answer:
        "The AI identifies knowledge gaps through assessments and your interactions with learning materials. When it detects areas where you're struggling, it automatically provides additional resources, simplified explanations, and targeted practice exercises to help strengthen your understanding of difficult concepts.",
    },
    {
      question: "Is the AI capable of answering my specific questions?",
      answer:
        "Yes, our AI can answer a wide range of subject-specific questions. It draws on a vast knowledge base to provide accurate, relevant answers tailored to your educational level. If your question requires deeper expertise, the system can connect you with tutors or teachers who can provide more specialized guidance.",
    },
    {
      question: "How does the AI generate study materials?",
      answer:
        "The AI creates personalized study materials by analyzing your learning objectives, current knowledge level, and curriculum requirements. It can generate summaries, flashcards, practice questions, and study guides that focus on the specific concepts you need to master, using formats that match your learning preferences.",
    },
    {
      question: "Is my data used to train the AI?",
      answer:
        "LearnSync takes data privacy seriously. While the AI does learn from your interactions to better personalize your experience, your personal data is never shared with third parties. We use anonymized, aggregated data to improve our algorithms, but individual student data remains private and secure in accordance with educational privacy standards.",
    },
  ]

  const aiFeatures = [
    {
      title: "Personalized Learning Paths",
      description: "Our AI creates custom learning journeys based on your goals, strengths, and areas for improvement.",
      icon: <Target className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Adaptive Content Delivery",
      description: "Content difficulty and format automatically adjust based on your performance and preferences.",
      icon: <Sliders className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Intelligent Assessment",
      description: "AI-powered assessments identify knowledge gaps and provide targeted recommendations.",
      icon: <BarChart className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "24/7 Learning Support",
      description: "Get instant answers to questions and explanations of complex concepts anytime.",
      icon: <MessageCircle className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Smart Study Materials",
      description: "Automatically generate notes, flashcards, and study guides tailored to your needs.",
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Progress Acceleration",
      description: "Learn faster with AI that identifies optimal learning strategies for your unique needs.",
      icon: <Zap className="h-6 w-6 text-blue-600" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <div className="flex items-center font-bold text-xl">
              <span className="text-blue-600">Learn</span>
              <span>Sync</span>
            </div>
          </div>
          <button
            onClick={onNavigateToHome}
            className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to Home
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                <Award className="h-4 w-4 mr-1" /> AI-Powered Learning
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                Learn Smarter, Not Harder with AI
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                LearnSync's advanced AI technology personalizes your educational journey, adapting to your learning
                style and needs to help you achieve better results in less time.
              </p>
              <button
                onClick={onNavigateToSignup}
                className="px-6 py-3 text-base font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-sm"
              >
                Experience AI Learning
              </button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="AI-Powered Learning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center space-x-2">
                  <Award className="h-8 w-8 text-blue-600" />
                  <div>
                    <div className="h-2 w-24 bg-blue-600 rounded-full mb-2"></div>
                    <div className="h-2 w-16 bg-blue-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">How Our AI Enhances Your Learning</h2>
            <p className="text-lg text-gray-600">
              LearnSync's artificial intelligence works behind the scenes to optimize every aspect of your educational
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6 text-center">
              How Our AI Learning Works
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              LearnSync's AI continuously adapts to provide you with the most effective learning experience possible.
            </p>

            <div className="space-y-12">
              <div className="relative">
                <div className="absolute left-9 top-0 h-full w-0.5 bg-gray-200"></div>

                <div className="relative flex items-start mb-8">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-blue-600 text-xl font-bold z-10">
                    1
                  </div>
                  <div className="ml-8 pt-3">
                    <h3 className="text-xl font-bold mb-2">Initial Assessment</h3>
                    <p className="text-gray-600">
                      When you first join LearnSync, our AI evaluates your current knowledge, learning preferences, and
                      goals through interactive assessments and questionnaires.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start mb-8">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-blue-600 text-xl font-bold z-10">
                    2
                  </div>
                  <div className="ml-8 pt-3">
                    <h3 className="text-xl font-bold mb-2">Personalized Learning Plan</h3>
                    <p className="text-gray-600">
                      Based on your assessment, the AI creates a customized learning path with recommended resources,
                      activities, and pacing designed specifically for you.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start mb-8">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-blue-600 text-xl font-bold z-10">
                    3
                  </div>
                  <div className="ml-8 pt-3">
                    <h3 className="text-xl font-bold mb-2">Continuous Adaptation</h3>
                    <p className="text-gray-600">
                      As you progress, the AI analyzes your performance, engagement patterns, and learning speed to
                      refine its approach, adjusting content difficulty and teaching methods.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start mb-8">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-blue-600 text-xl font-bold z-10">
                    4
                  </div>
                  <div className="ml-8 pt-3">
                    <h3 className="text-xl font-bold mb-2">Targeted Interventions</h3>
                    <p className="text-gray-600">
                      When the AI identifies areas where you're struggling, it automatically provides additional
                      resources, alternative explanations, and focused practice opportunities.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-blue-600 text-xl font-bold z-10">
                    5
                  </div>
                  <div className="ml-8 pt-3">
                    <h3 className="text-xl font-bold mb-2">Progress Acceleration</h3>
                    <p className="text-gray-600">
                      For concepts you master quickly, the AI accelerates your learning path, allowing you to move ahead
                      faster while ensuring comprehensive understanding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">
              See how LearnSync's AI-powered learning has transformed educational outcomes for students worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Student portrait"
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">Alex Johnson</h4>
                  <p className="text-sm text-gray-500">Computer Science Student</p>
                </div>
              </div>
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="inline-block h-4 w-4 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "The AI identified my learning gaps in algorithms and provided targeted exercises that helped me improve
                my coding skills dramatically. I went from struggling to top of my class in just 3 months."
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Student portrait"
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">Maria Rodriguez</h4>
                  <p className="text-sm text-gray-500">Medical Student</p>
                </div>
              </div>
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="inline-block h-4 w-4 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "LearnSync's AI created flashcards and quizzes that perfectly matched my learning style. It's like
                having a tutor who knows exactly how my brain works. My anatomy exam scores improved by 27%!"
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Student portrait"
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">David Kim</h4>
                  <p className="text-sm text-gray-500">High School Student</p>
                </div>
              </div>
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="inline-block h-4 w-4 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "Math was always my weakest subject until I started using LearnSync. The AI broke down complex concepts
                in ways I could understand and gave me practice problems that gradually built my confidence."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Learn more about how our AI-powered learning technology works.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full px-6 py-4 text-left font-medium focus:outline-none"
                  >
                    {faq.question}
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Experience the Power of AI-Enhanced Learning</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of students who are achieving their educational goals faster with LearnSync's AI
              technology.
            </p>
            <button
              onClick={onNavigateToSignup}
              className="px-6 py-3 text-base font-medium bg-white text-blue-600 rounded-md hover:bg-gray-100 shadow-sm"
            >
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center font-bold text-xl mb-4 md:mb-0">
              <span className="text-blue-600">Learn</span>
              <span>Sync</span>
            </div>
            <div className="text-sm text-gray-500">© 2025 LearnSync. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AIPoweredLearning

