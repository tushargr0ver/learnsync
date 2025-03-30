
import { useState } from "react"
import {
  ChevronLeft,
  Video,
  Users,
  Check,
  Star,
  Monitor,
  MessageSquare,
  FileText,
  Calendar,
  Clock,
  Download,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "react-feather"
// import "./tailwind.css"

const LiveClasses = ({ onNavigateToHome, onNavigateToSignup }) => {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "What equipment do I need for LearnSync live classes?",
      answer:
        "You'll need a computer or tablet with a stable internet connection, a webcam, and a microphone. For the best experience, we recommend using headphones to minimize background noise. Our platform works on most modern browsers, but Chrome or Firefox provide the most reliable experience.",
    },
    {
      question: "How interactive are the live classes?",
      answer:
        "Our live classes are highly interactive! Students can raise their hands, ask questions through chat or voice, participate in polls and quizzes, collaborate on shared documents, and work in breakout rooms. Instructors can also call on students, share their screens, and use our interactive whiteboard for demonstrations.",
    },
    {
      question: "What happens if I miss a live class?",
      answer:
        "Don't worry if you miss a session. All live classes are automatically recorded and made available in your dashboard within 2 hours after the class ends. The recordings include all shared screens, whiteboard activities, and discussions, so you won't miss any important content.",
    },
    {
      question: "Can I interact with the instructor outside of class time?",
      answer:
        "Yes! Each course includes a dedicated discussion forum where you can post questions for the instructor and fellow students. Many instructors also offer virtual office hours for one-on-one help. Premium courses include direct messaging with instructors for personalized support.",
    },
    {
      question: "How many students typically attend a live class?",
      answer:
        "Class sizes vary depending on the course type. Our standard classes typically have 15-30 students to ensure everyone gets attention. Premium courses have smaller groups of 5-15 students for more personalized instruction. Some special events and webinars may accommodate larger audiences but still maintain interactive elements.",
    },
  ]

  const liveClassFeatures = [
    {
      title: "HD Video Conferencing",
      description: "Crystal-clear video and audio for an immersive classroom experience from anywhere.",
      icon: <Video className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Interactive Whiteboard",
      description: "Collaborate in real-time with digital drawing, text, and multimedia sharing tools.",
      icon: <Monitor className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Live Chat & Q&A",
      description: "Ask questions and participate in discussions without interrupting the flow of the class.",
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Breakout Rooms",
      description: "Split into smaller groups for focused discussions and collaborative projects.",
      icon: <Users className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Class Recordings",
      description: "Automatically recorded sessions available for review at your convenience.",
      icon: <Download className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Integrated Resources",
      description: "Access to course materials, assignments, and supplementary content during class.",
      icon: <FileText className="h-6 w-6 text-blue-600" />,
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
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4">
                <Video className="h-4 w-4 mr-1" /> Live Classes
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                Interactive Learning in Real-Time
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Join engaging, instructor-led live classes that bring the classroom experience online with interactive
                tools and real-time collaboration.
              </p>
              <button
                onClick={onNavigateToSignup}
                className="px-6 py-3 text-base font-medium bg-indigo-600 text-white rounded-md hover:bg-indigo-700 shadow-sm"
              >
                Join a Live Class
              </button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Live Virtual Classroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Now</span>
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Features That Make Our Live Classes Special
            </h2>
            <p className="text-lg text-gray-600">
              LearnSync's live classes combine cutting-edge technology with expert instruction to create an engaging
              virtual classroom experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveClassFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Types Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6 text-center">Types of Live Classes</h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              LearnSync offers a variety of live class formats to suit different learning needs and subjects.
            </p>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
                    <div className="aspect-video bg-indigo-100 rounded-lg flex items-center justify-center">
                      <Users className="h-12 w-12 text-indigo-600" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Interactive Lectures</h3>
                    <p className="text-gray-600 mb-4">
                      Expert-led presentations with real-time Q&A, polls, and discussions. Perfect for introducing new
                      concepts and explaining complex topics.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Engaging multimedia presentations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Live demonstrations of concepts</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Immediate clarification of questions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
                    <div className="aspect-video bg-indigo-100 rounded-lg flex items-center justify-center">
                      <Monitor className="h-12 w-12 text-indigo-600" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Hands-On Workshops</h3>
                    <p className="text-gray-600 mb-4">
                      Practical, guided sessions where you actively work on projects, solve problems, and apply concepts
                      with instructor support.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Real-time feedback on your work</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Collaborative problem-solving</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Skill-building through practice</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
                    <div className="aspect-video bg-indigo-100 rounded-lg flex items-center justify-center">
                      <MessageSquare className="h-12 w-12 text-indigo-600" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Discussion Seminars</h3>
                    <p className="text-gray-600 mb-4">
                      Focused conversations around specific topics, readings, or case studies, facilitated by expert
                      instructors to deepen understanding.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Critical thinking development</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Exposure to diverse perspectives</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Deeper exploration of complex topics</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6 text-center">
              How Our Live Classes Work
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Joining and participating in LearnSync's live classes is simple and intuitive.
            </p>

            <div className="space-y-12">
              <div className="relative">
                <div className="absolute left-9 top-0 h-full w-0.5 bg-gray-200"></div>

                <div className="relative flex items-start mb-8">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-100 text-indigo-600 text-xl font-bold z-10">
                    1
                  </div>
                  <div className="ml-8 pt-3">
                    <h3 className="text-xl font-bold mb-2">Browse & Enroll</h3>
                    <p className="text-gray-600">
                      Explore our catalog of live classes and enroll in those that match your interests and learning
                      goals. Filter by subject, level, schedule, and instructor.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start mb-8">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-100 text-indigo-600 text-xl font-bold z-10">
                    2
                  </div>
                  <div className="ml-8 pt-3">
                    <h3 className="text-xl font-bold mb-2">Prepare for Class</h3>
                    <p className="text-gray-600">
                      Access pre-class materials, readings, and assignments in your dashboard. Set up reminders so you
                      never miss a session.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start mb-8">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-100 text-indigo-600 text-xl font-bold z-10">
                    3
                  </div>
                  <div className="ml-8 pt-3">
                    <h3 className="text-xl font-bold mb-2">Join the Live Session</h3>
                    <p className="text-gray-600">
                      Enter the virtual classroom with a single click from your dashboard or email reminder. No
                      downloads required—everything works in your browser.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start mb-8">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-100 text-indigo-600 text-xl font-bold z-10">
                    4
                  </div>
                  <div className="ml-8 pt-3">
                    <h3 className="text-xl font-bold mb-2">Participate Actively</h3>
                    <p className="text-gray-600">
                      Engage with instructors and peers through video, audio, chat, and interactive tools. Ask
                      questions, join discussions, and collaborate on activities.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-100 text-indigo-600 text-xl font-bold z-10">
                    5
                  </div>
                  <div className="ml-8 pt-3">
                    <h3 className="text-xl font-bold mb-2">Review & Continue Learning</h3>
                    <p className="text-gray-600">
                      Access class recordings, download resources, and complete follow-up activities. Connect with
                      classmates and instructors in the course forum between sessions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Classes Preview */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6 text-center">
              Featured Upcoming Classes
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Preview some of our popular upcoming live sessions. Join hundreds of learners in these interactive
              classes.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="aspect-video bg-indigo-100 relative">
                  <img
                    src="https://via.placeholder.com/600x400"
                    alt="Data Science Fundamentals"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">
                    MOST POPULAR
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Data Science Fundamentals</h3>
                  <p className="text-gray-600 mb-4">
                    Learn the core concepts of data analysis, visualization, and machine learning in this
                    beginner-friendly workshop.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Starts June 15, 2025</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Tuesdays & Thursdays, 7-9 PM EST</span>
                  </div>
                  <button
                    onClick={onNavigateToSignup}
                    className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="aspect-video bg-indigo-100 relative">
                  <img
                    src="https://via.placeholder.com/600x400"
                    alt="Creative Writing Workshop"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW CLASS
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Creative Writing Workshop</h3>
                  <p className="text-gray-600 mb-4">
                    Develop your storytelling skills with guided exercises and personalized feedback from published
                    authors.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Starts May 20, 2025</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Mondays & Wednesdays, 6-8 PM EST</span>
                  </div>
                  <button
                    onClick={onNavigateToSignup}
                    className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800">
                View all upcoming classes <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-lg text-gray-600">
              Hear from learners who have experienced the power of our interactive live classes.
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
                  <h4 className="font-medium">Emily Chen</h4>
                  <p className="text-sm text-gray-500">Marketing Professional</p>
                </div>
              </div>
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="inline-block h-4 w-4 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "The live digital marketing classes were game-changing for my career. Being able to ask questions in
                real-time and get immediate feedback on my campaign ideas made all the difference."
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
                  <h4 className="font-medium">James Wilson</h4>
                  <p className="text-sm text-gray-500">Software Developer</p>
                </div>
              </div>
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="inline-block h-4 w-4 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "The collaborative coding workshops were incredible. Working in breakout rooms with other developers
                while the instructor guided us through complex problems helped me level up my skills fast."
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
                  <h4 className="font-medium">Sophia Rodriguez</h4>
                  <p className="text-sm text-gray-500">Language Student</p>
                </div>
              </div>
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="inline-block h-4 w-4 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "I've tried many language learning platforms, but nothing compares to LearnSync's live conversation
                classes. The small group size ensures I get plenty of speaking practice with native speakers."
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
              Find answers to common questions about our live classes.
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
      <section className="bg-indigo-600 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Interactive Learning?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join thousands of students in our live classes and transform the way you learn.
            </p>
            <button
              onClick={onNavigateToSignup}
              className="px-6 py-3 text-base font-medium bg-white text-indigo-600 rounded-md hover:bg-gray-100 shadow-sm"
            >
              Browse Upcoming Classes
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

export default LiveClasses

