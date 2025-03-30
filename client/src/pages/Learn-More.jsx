import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Check, 
  Star, 
  Users, 
  Award, 
  BookOpen, 
  Code, 
  FileText, 
  Video, 
  MessageSquare, 
  BarChart,
  ChevronDown,
  ChevronUp,
  ArrowRight
} from 'react-feather';
// import './tailwind.css';

const LearnMore = ({ onNavigateToHome, onNavigateToSignup }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How does LearnSync's AI assistance work?",
      answer: "LearnSync uses advanced natural language processing to provide personalized learning assistance. Our AI can answer questions, generate study materials, create practice quizzes, and provide feedback on assignments. It adapts to each student's learning style and pace, offering increasingly personalized support over time."
    },
    {
      question: "Can teachers customize the learning experience?",
      answer: "Teachers have full control over the learning environment. They can create custom courses, upload their own materials, design assessments, set learning paths, and monitor student progress. The platform allows for granular customization while still leveraging AI to reduce administrative workload."
    },
    {
      question: "Is LearnSync suitable for all age groups?",
      answer: "LearnSync is designed for learners from middle school through higher education. We offer different interfaces and features optimized for various age groups, ensuring appropriate content and interactions. For younger students, we provide additional safety features and simplified interfaces."
    },
    {
      question: "How secure is student data on the platform?",
      answer: "We take data security extremely seriously. LearnSync employs industry-leading encryption, regular security audits, and strict access controls. We're fully FERPA and COPPA compliant, and we never sell user data. Our privacy-first approach ensures that educational data remains secure and private."
    },
    {
      question: "Can LearnSync integrate with other educational tools?",
      answer: "Yes, LearnSync offers robust integration capabilities with popular LMS platforms, Google Classroom, Microsoft Education, and many other educational tools. Our API allows for custom integrations, and we're constantly expanding our integration partners to ensure seamless workflows."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "High School Science Teacher",
      image: "https://via.placeholder.com/150",
      quote: "LearnSync has transformed my classroom. The AI assistant helps me create engaging materials in minutes instead of hours, and my students love the interactive learning experience."
    },
    {
      name: "Michael Chen",
      role: "Computer Science Student",
      image: "https://via.placeholder.com/150",
      quote: "The code editor and AI explanations have been game-changers for my programming courses. I can practice coding and get immediate feedback, which has accelerated my learning tremendously."
    },
    {
      name: "Principal Rodriguez",
      role: "Elementary School Principal",
      image: "https://via.placeholder.com/150",
      quote: "Implementing LearnSync across our school has improved student engagement and academic outcomes. The analytics help us identify and support struggling students much earlier."
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$9.99",
      period: "per month",
      features: [
        "AI Learning Assistant",
        "Study Material Generation",
        "Basic Analytics",
        "Community Access",
        "5 Live Sessions per month"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$19.99",
      period: "per month",
      features: [
        "Everything in Basic",
        "Advanced Analytics",
        "Unlimited Live Sessions",
        "Code Editor Pro",
        "Priority Support",
        "Custom Study Paths"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact for pricing",
      features: [
        "Everything in Pro",
        "Dedicated Account Manager",
        "Custom Integrations",
        "Advanced Security Features",
        "Bulk User Management",
        "White-labeling Options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

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
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Discover the Future of Education with LearnSync
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              LearnSync combines AI-powered learning tools with interactive features to create a comprehensive educational experience that adapts to each student's needs while empowering teachers.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onNavigateToSignup}
                className="px-6 py-3 text-base font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-sm"
              >
                Start Your Free Trial
              </button>
              <a 
                href="#pricing" 
                className="px-6 py-3 text-base font-medium border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 shadow-sm"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-16 z-30 w-full bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            <nav className="flex space-x-4 py-4">
              {['overview', 'features', 'how-it-works', 'testimonials', 'pricing', 'faq'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === tab
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Overview Section */}
        <section id="overview" className={`py-12 md:py-20 ${activeTab !== 'overview' ? 'hidden' : ''}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Transforming Education with AI
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                LearnSync is a comprehensive educational platform that leverages artificial intelligence to create personalized learning experiences. Our mission is to make high-quality education accessible, engaging, and effective for everyone.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">For Students</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Personalized learning paths</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>AI-powered study assistance</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Interactive practice exercises</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Real-time feedback and progress tracking</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">For Teachers</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Automated content creation and grading</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Detailed student performance analytics</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Customizable course materials</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Time-saving administrative tools</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 md:p-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Why Choose LearnSync?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-blue-600 mr-2" />
                      <h4 className="font-medium">Smart Learning</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Our AI adapts to each student's learning style and pace for optimal results.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <Users className="h-5 w-5 text-blue-600 mr-2" />
                      <h4 className="font-medium">Community Focused</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Built-in collaboration tools foster meaningful educational connections.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <BarChart className="h-5 w-5 text-blue-600 mr-2" />
                      <h4 className="font-medium">Data-Driven</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Comprehensive analytics help track progress and identify improvement areas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className={`py-12 md:py-20 bg-white ${activeTab !== 'features' ? 'hidden' : ''}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Powerful Features for Modern Education
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                LearnSync combines cutting-edge technology with pedagogical expertise to deliver a comprehensive suite of features designed to enhance the learning experience.
              </p>
              
              <div className="space-y-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
                      <Award className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">AI Learning Assistant</h3>
                    <p className="text-gray-600 mb-4">
                      Our advanced AI assistant provides personalized help with any subject, answers questions, explains concepts, and generates study materials tailored to each student's needs.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>24/7 learning support</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Personalized explanations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Custom study material generation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/600x400" 
                      alt="AI Learning Assistant" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1 bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/600x400" 
                      alt="Interactive Code Editor" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
                      <Code className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Interactive Code Editor</h3>
                    <p className="text-gray-600 mb-4">
                      Our built-in code editor supports multiple programming languages with real-time execution, debugging tools, and AI-powered code suggestions and explanations.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Support for 20+ programming languages</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Real-time code execution and testing</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>AI-powered code suggestions and debugging</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
                      <FileText className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Adaptive Assessments</h3>
                    <p className="text-gray-600 mb-4">
                      Our intelligent assessment system adapts to each student's knowledge level, providing personalized quizzes and tests that identify knowledge gaps and reinforce learning.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Personalized difficulty levels</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Detailed performance analytics</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Targeted practice recommendations</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/600x400" 
                      alt="Adaptive Assessments" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1 bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/600x400" 
                      alt="Live Learning Sessions" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
                      <Video className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Live Learning Sessions</h3>
                    <p className="text-gray-600 mb-4">
                      Connect in real-time with teachers and peers through our integrated video conferencing system with interactive whiteboards, screen sharing, and collaborative tools.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>HD video and audio quality</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Interactive digital whiteboard</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Session recording and transcription</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
                      <MessageSquare className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Learning Communities</h3>
                    <p className="text-gray-600 mb-4">
                      Our platform fosters collaboration through subject-specific forums, study groups, and peer-to-peer learning opportunities that extend beyond the virtual classroom.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Subject-specific discussion forums</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Collaborative study spaces</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Peer review and feedback systems</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/600x400" 
                      alt="Learning Communities" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className={`py-12 md:py-20 ${activeTab !== 'how-it-works' ? 'hidden' : ''}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                How LearnSync Works
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                Our platform is designed to be intuitive and effective, adapting to the needs of both students and educators. Here's how LearnSync transforms the educational experience:
              </p>
              
              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute left-9 top-0 h-full w-0.5 bg-gray-200"></div>
                  
                  <div className="relative flex items-start mb-8">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-blue-600 text-xl font-bold z-10">
                      1
                    </div>
                    <div className="ml-8 pt-3">
                      <h3 className="text-xl font-bold mb-2">Personalized Onboarding</h3>
                      <p className="text-gray-600">
                        When you first join LearnSync, our AI analyzes your learning style, academic goals, and current knowledge level through an interactive assessment. This creates your personalized learning profile that guides all future interactions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start mb-8">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-blue-600 text-xl font-bold z-10">
                      2
                    </div>
                    <div className="ml-8 pt-3">
                      <h3 className="text-xl font-bold mb-2">Customized Learning Paths</h3>
                      <p className="text-gray-600">
                        Based on your profile, LearnSync creates tailored learning paths with recommended courses, resources, and practice exercises. These paths adapt in real-time as you progress, focusing on areas that need more attention.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start mb-8">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-blue-600 text-xl font-bold z-10">
                      3
                    </div>
                    <div className="ml-8 pt-3">
                      <h3 className="text-xl font-bold mb-2">Interactive Learning</h3>
                      <p className="text-gray-600">
                        Engage with content through interactive lessons, AI-guided practice, coding exercises, and multimedia resources. Our platform makes learning active and engaging rather than passive consumption of information.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start mb-8">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-blue-600 text-xl font-bold z-10">
                      4
                    </div>
                    <div className="ml-8 pt-3">
                      <h3 className="text-xl font-bold mb-2">Continuous Assessment</h3>
                      <p className="text-gray-600">
                        Rather than relying solely on traditional tests, LearnSync continuously evaluates your understanding through adaptive quizzes, project work, and practical applications. This provides more accurate insights into your progress.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-blue-600 text-xl font-bold z-10">
                      5
                    </div>
                    <div className="ml-8 pt-3">
                      <h3 className="text-xl font-bold mb-2">Community and Support</h3>
                      <p className="text-gray-600">
                        Connect with peers and educators through our community features, live sessions, and collaborative projects. Our AI assistant is always available to provide additional support whenever you need it.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">For Educators</h3>
                  <p className="text-gray-600 mb-6">
                    LearnSync provides powerful tools for teachers and educational institutions:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Course Creation Tools</h4>
                        <p className="text-sm text-gray-600">
                          Easily create and customize courses with our intuitive content builder and AI-assisted material generation.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Student Analytics</h4>
                        <p className="text-sm text-gray-600">
                          Gain deep insights into student performance with comprehensive analytics and progress tracking.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Automated Grading</h4>
                        <p className="text-sm text-gray-600">
                          Save time with AI-powered grading for assignments, quizzes, and even essay-based assessments.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Classroom Management</h4>
                        <p className="text-sm text-gray-600">
                          Efficiently manage virtual classrooms, schedule sessions, and communicate with students.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className={`py-12 md:py-20 bg-gray-50 ${activeTab !== 'testimonials' ? 'hidden' : ''}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6 text-center">
                What Our Users Say
              </h2>
              <p className="text-lg text-gray-600 mb-12 text-center">
                Discover how LearnSync is transforming education for students and teachers around the world.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 mr-4">
                        <img 
                          src={testimonial.image || "/placeholder.svg"} 
                          alt={testimonial.name} 
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="inline-block h-4 w-4 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold mb-4">Join thousands of satisfied users</h3>
                <button 
                  onClick={onNavigateToSignup}
                  className="px-6 py-3 text-base font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-sm"
                >
                  Start Your Free Trial
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className={`py-12 md:py-20 ${activeTab !== 'pricing' ? 'hidden' : ''}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6 text-center">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-gray-600 mb-12 text-center">
                Choose the plan that works best for you or your organization. All plans include a 14-day free trial.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`bg-white rounded-lg shadow-sm border ${
                      plan.popular ? 'border-blue-400 ring-2 ring-blue-400 ring-opacity-50' : 'border-gray-200'
                    } overflow-hidden`}
                  >
                    {plan.popular && (
                      <div className="bg-blue-600 text-white text-center py-1.5 text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="text-gray-500 ml-1">{plan.period}</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button 
                        onClick={onNavigateToSignup}
                        className={`w-full py-2 px-4 rounded-md font-medium ${
                          plan.popular 
                            ? 'bg-blue-600 text-white hover:bg-blue-700' 
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {plan.cta}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-gray-100 rounded-lg p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4">Education Discounts</h3>
                <p className="text-gray-600 mb-4">
                  We offer special pricing for educational institutions, schools, and non-profit organizations. Contact our sales team to learn more about our education discounts and volume licensing options.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more about education pricing <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className={`py-12 md:py-20 bg-white ${activeTab !== 'faq' ? 'hidden' : ''}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 mb-12 text-center">
                Find answers to common questions about LearnSync. If you can't find what you're looking for, please contact our support team.
              </p>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
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
              
              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
                <p className="text-gray-600 mb-6">
                  Our support team is here to help. Contact us anytime and we'll get back to you as soon as possible.
                </p>
                <button 
                  className="px-6 py-3 text-base font-medium bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 shadow-sm"
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Learning Experience?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of students and educators who are already using LearnSync to achieve better educational outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onNavigateToSignup}
                className="px-6 py-3 text-base font-medium bg-white text-blue-600 rounded-md hover:bg-gray-100 shadow-sm"
              >
                Start Your Free Trial
              </button>
              <button 
                className="px-6 py-3 text-base font-medium bg-transparent text-white border border-white rounded-md hover:bg-blue-700"
              >
                Schedule a Demo
              </button>
            </div>
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
            <div className="text-sm text-gray-500">
              © 2025 LearnSync. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LearnMore;
