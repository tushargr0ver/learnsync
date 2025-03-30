
import { useState } from "react"
import {
  ChevronLeft,
  BookOpen,
  Check,
  Star,
  FileText,
  Bookmark,
  Search,
  Download,
  Share2,
  Edit3,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "react-feather"
// import "./tailwind.css"

const StudyMaterials = ({ onNavigateToHome, onNavigateToSignup }) => {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "What types of study materials are available on LearnSync?",
      answer:
        "LearnSync offers a wide variety of study materials including interactive textbooks, video lessons, practice exercises, flashcards, summary notes, mind maps, case studies, and downloadable worksheets. We also provide specialized materials like code samples for programming courses and lab simulations for science subjects.",
    },
    {
      question: "Can I access study materials offline?",
      answer:
        "Yes! Most of our study materials can be downloaded for offline use through our mobile app. This includes PDF textbooks, lecture notes, practice exercises, and even pre-downloaded video content. Your progress will sync back to your account when you reconnect to the internet.",
    },
    {
      question: "How often are study materials updated?",
      answer:
        "We regularly update our study materials to ensure accuracy and relevance. Core academic subjects are reviewed at least annually, while rapidly evolving fields like technology and healthcare receive more frequent updates. We also incorporate student feedback to continuously improve our content.",
    },
    {
      question: "Can I create and share my own study materials?",
      answer:
        "LearnSync encourages collaborative learning. You can create your own notes, flashcards, and study guides using our built-in tools. You can keep these private or share them with specific classmates or the broader LearnSync community. Popular student-created materials are featured in our community section.",
    },
    {
      question: "Are the study materials accessible for users with disabilities?",
      answer:
        "Yes, accessibility is a priority for LearnSync. Our study materials support screen readers, include closed captions for videos, offer text-to-speech functionality, and allow for keyboard navigation. We continuously work to meet WCAG 2.1 AA standards and welcome feedback on improving accessibility.",
    },
  ]

  const materialTypes = [
    {
      title: "Interactive Textbooks",
      description: "Engaging digital books with embedded quizzes, animations, and note-taking capabilities.",
      icon: <BookOpen className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Comprehensive Notes",
      description: "Concise, well-structured summaries of key concepts with visual aids and examples.",
      icon: <FileText className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Flashcard Collections",
      description: "Customizable flashcards with spaced repetition technology for effective memorization.",
      icon: <Bookmark className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Practice Exercises",
      description: "Varied question formats with detailed solutions and difficulty progression.",
      icon: <Edit3 className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Downloadable Resources",
      description: "Printable worksheets, cheat sheets, and reference guides for offline study.",
      icon: <Download className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Searchable Libraries",
      description: "Extensive collections of subject-specific resources with powerful search functionality.",
      icon: <Search className="h-6 w-6 text-green-600" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <div className="flex items-center gap-2 font-bold text-xl">
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
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
                <BookOpen className="h-4 w-4 mr-1" /> Study Materials
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                Comprehensive Resources for Effective Learning
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Access a rich library of interactive, engaging study materials designed to help you master any subject
                and achieve your learning goals.
              </p>
              <button
                onClick={onNavigateToSignup}
                className="px-6 py-3 text-base font-medium bg-green-600 text-white rounded-md hover:bg-green-700 shadow-sm"
              >
                Explore Study Materials
              </button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Digital Study Materials"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center space-x-2">
                  <FileText className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="h-2 w-24 bg-green-600 rounded-full mb-2"></div>
                    <div className="h-2 w-16 bg-green-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Types Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Diverse Study Materials for Every Learning Style
            </h2>
            <p className="text-lg text-gray-600">
              LearnSync offers a variety of study material formats to accommodate different learning preferences and
              needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materialTypes.map((material, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-lg mb-4">
                  {material.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{material.title}</h3>
                <p className="text-gray-600">{material.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6 text-center">
              Features That Enhance Your Study Experience
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Our study materials are designed with powerful features to maximize learning efficiency and effectiveness.
            </p>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
                    <div className="aspect-video bg-green-100 rounded-lg flex items-center justify-center">
                      <Search className="h-12 w-12 text-green-600" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Smart Search & Filtering</h3>
                    <p className="text-gray-600 mb-4">
                      Quickly find exactly what you need with our powerful search engine that understands natural
                      language queries and filters content by subject, difficulty, format, and more.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Natural language search capabilities</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Advanced filtering options</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Content recommendations based on your learning history</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
                    <div className="aspect-video bg-green-100 rounded-lg flex items-center justify-center">
                      <Edit3 className="h-12 w-12 text-green-600" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Personalization Tools</h3>
                    <p className="text-gray-600 mb-4">
                      Customize study materials to fit your unique learning needs with highlighting, annotations,
                      bookmarking, and the ability to create your own study guides from existing content.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Digital highlighting and annotation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Custom study guide creation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Personal learning preferences settings</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
                    <div className="aspect-video bg-green-100 rounded-lg flex items-center justify-center">
                      <Share2 className="h-12 w-12 text-green-600" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Collaboration Features</h3>
                    <p className="text-gray-600 mb-4">
                      Study more effectively with peers by sharing notes, creating collaborative study guides, and
                      forming virtual study groups around specific materials.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Shared annotations and notes</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Collaborative study guide creation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Virtual study group formation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Coverage Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Comprehensive Subject Coverage</h2>
            <p className="text-lg text-gray-600">
              LearnSync offers study materials across a wide range of academic and professional subjects.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Mathematics",
              "Science",
              "Computer Science",
              "Engineering",
              "Business",
              "Languages",
              "Arts & Humanities",
              "Social Sciences",
              "Medicine & Health",
              "Law",
              "Test Preparation",
              "Professional Skills",
            ].map((subject, index) => (
              <div
                key={index}
                className="bg-green-50 border border-green-100 rounded-lg p-4 text-center hover:bg-green-100 transition-colors"
              >
                <span className="font-medium text-gray-800">{subject}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="inline-flex items-center text-green-600 font-medium hover:text-green-800">
              View all subjects <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6 text-center">
              How to Use Our Study Materials
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Getting the most out of LearnSync's study resources is simple and intuitive.
            </p>

            <div className="space-y-12">
              <div className="relative">
                <div className="absolute left-9 top-0 h-full w-0.5 bg-gray-200"></div>

                <div className="relative flex items-start mb-8">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-green-100 text-green-600 text-xl font-bold z-10">
                    1
                  </div>
                  <div className="ml-8 pt-3">
                    <h3 className="text-xl font-bold mb-2">Find Your Materials</h3>
                    <p className="text-gray-600">
                      Use our intuitive search and browse features to discover study materials for your specific
                      subjects, courses, or learning objectives.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start mb-8">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-green-100 text-green-600 text-xl font-bold z-10">
                    2
                  </div>
                  <div className="ml-8 pt-3">
                    <h3 className="text-xl font-bold mb-2">Personalize Your Experience</h3>
                    <p className="text-gray-600">
                      Customize materials with highlights, notes, and bookmarks. Adjust settings like text size, color
                      schemes, and reading pace to match your preferences.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start mb-8">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-green-100 text-green-600 text-xl font-bold z-10">
                    3
                  </div>
                  <div className="ml-8 pt-3">
                    <h3 className="text-xl font-bold mb-2">Engage Actively</h3>
                    <p className="text-gray-600">
                      Interact with the content through embedded quizzes, exercises, and interactive elements that
                      reinforce your learning and test your understanding.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start mb-8">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-green-100 text-green-600 text-xl font-bold z-10">
                    4
                  </div>
                  <div className="ml-8 pt-3">
                    <h3 className="text-xl font-bold mb-2">Track Your Progress</h3>
                    <p className="text-gray-600">
                      Monitor your learning journey with built-in progress tracking that shows completion rates, quiz
                      scores, and time spent on different topics.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-green-100 text-green-600 text-xl font-bold z-10">
                    5
                  </div>
                  <div className="ml-8 pt-3">
                    <h3 className="text-xl font-bold mb-2">Collaborate and Share</h3>
                    <p className="text-gray-600">
                      Enhance your learning by sharing insights with peers, forming study groups, and collaborating on
                      notes and study guides.
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-lg text-gray-600">
              See how our study materials have helped students achieve their academic goals.
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
                  <h4 className="font-medium">Thomas Lee</h4>
                  <p className="text-sm text-gray-500">Engineering Student</p>
                </div>
              </div>
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="inline-block h-4 w-4 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "The interactive textbooks and practice problems helped me visualize complex engineering concepts. I
                went from struggling with thermodynamics to acing my exams in just one semester."
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
                  <h4 className="font-medium">Aisha Johnson</h4>
                  <p className="text-sm text-gray-500">Medical Student</p>
                </div>
              </div>
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="inline-block h-4 w-4 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "The anatomy flashcards and 3D models were game-changers for my medical studies. Being able to customize
                my study materials to focus on areas I struggled with made all the difference."
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
                  <h4 className="font-medium">Miguel Sanchez</h4>
                  <p className="text-sm text-gray-500">Language Learner</p>
                </div>
              </div>
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="inline-block h-4 w-4 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "The audio pronunciation guides and interactive exercises helped me become conversational in French in
                just 6 months. The ability to download materials for offline practice was incredibly helpful."
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
              Find answers to common questions about our study materials.
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
      <section className="bg-green-600 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Learning Experience?</h2>
            <p className="text-xl text-green-100 mb-8">
              Access thousands of high-quality study materials and start achieving your educational goals today.
            </p>
            <button
              onClick={onNavigateToSignup}
              className="px-6 py-3 text-base font-medium bg-white text-green-600 rounded-md hover:bg-gray-100 shadow-sm"
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
            <div className="flex items-center gap-2 font-bold text-xl mb-4 md:mb-0">
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

export default StudyMaterials

