import { Link } from 'react-router-dom';
import GeneralNavBar from '../components/GeneralNavbar';
import meet from "../assets/meet.png"
import rocket from "../assets/rocket.png"
import community from "../assets/community.png"
import progress from "../assets/progress.png"
import editor from "../assets/editor.png"
import ai from "../assets/ai.png"

function HomePage() {
  return (
    <>
      <GeneralNavBar />
      <div className="bg-[#F8F9FA] py-32 flex justify-center w-full">
        <div className="max-w-screen-xl mx-auto px-6 text-center">

          {/* Main Header Section */}
          {/* Main Header Section */}
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-5xl font-bold text-black/90 mb-4 transition-all duration-300 hover:scale-105 ">
              Transform Education with AI-Powered Learning
            </h2>
            <p className="text-xl max-w-5xl text-gray-600 mx-auto mb-10">
              LearnSync revolutionizes education by seamlessly connecting students and teachers through immersive, AI-powered learning tools, personalized study assistance, and live, interactive collaboration. It’s where technology meets education to foster smarter, more engaging learning experiences.
            </p>

            {/* Get Started & Learn More Buttons */}
            <div className="space-x-6">
              <Link to="/signup">
                <button className="bg-blue-500 text-white py-3 px-12 text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105 shadow-md hover:shadow-xl">
                  Get Started
                </button>
              </Link>
              <Link to="/learn-more">
                <button className="bg-transparent border-2 border-blue-500 text-blue-500 py-3 px-12 text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 shadow-md hover:shadow-xl">
                  Learn More
                </button>
              </Link>
            </div>
          </div>


          {/* Key Features Section */}
          <section className="mt-20 py-10 animate-fadeIn">
            <div className="space-y-2 text-center">
              <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-white transition-all duration-200 hover:scale-105 hover:bg-blue-600">
                Key Features
              </div>
              <h2 className="text-3xl font-bold text-black/90 tracking-tighter sm:text-4xl md:text-5xl transition-all duration-300 hover:scale-105">
                Everything You Need to Know about LearnSync
              </h2>
              <p className="max-w-full px-36 text-gray-600 py-4 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              LearnSync combines AI-powered learning tools with interactive features to create a comprehensive educational experience for both students and teachers.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {/* Feature Cards */}
              {[
                { icon: ai, title: "AI Assistance", desc: "Get instant help with studies, generate notes, and create flashcards using our AI assistant." },
                { icon: meet, title: "Live Sessions", desc: "Join real-time video or audio sessions with interactive Q&A and whiteboard tools." },
                { icon: community, title: "Community", desc: "Engage in discussions with teachers and peers, and join topic-based study groups." },
                { icon: rocket, title: "Exams & Quizzes", desc: "Practice with AI-generated and teacher-created tests to assess your knowledge." },
                { icon: editor, title: "Code Editor", desc: "Write, run, and test code directly within the platform for programming practice." },
                { icon: progress, title: "Progress Tracking", desc: "Monitor performance with detailed analytics and identify areas for improvement." }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="rounded-full bg-primary/10 p-3 text-2xl transition-all duration-300 hover:rotate-6">
                    <div className="rounded-full flex items-center justify-center h-14 w-14 bg-blue-100">
                      <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
                    </div>

                  </div>
                  <h3 className="text-xl font-bold text-black">{feature.title}</h3>
                  <p className="text-center text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>


          <section id="roles" className="w-full py-12 md:py-24 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#008CFF] px-3 py-1 text-sm text-white">
                    User Roles
                  </div>
                  <h2 className="text-3xl font-bold text-black/90 tracking-tighter sm:text-4xl md:text-5xl">
                    Tailored for Students & Teachers
                  </h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    LearnSync offers specialized features for both students and teachers to enhance the learning
                    experience.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mt-12">
                {/* Student Role */}
                <div className="rounded-xl border bg-card text-card-foreground shadow">
                  <div className="flex flex-col space-y-1.5 p-6 bg-[#008CFF] text-white rounded-t-xl">
                    <h3 className="text-2xl font-semibold">Student Features</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      
                      <div className="rounded-full flex items-center justify-center h-12 w-14 bg-blue-100">
                        <img src={community}  className="w-6 h-6" />
                      </div>

                      <div>
                        <h4 className="font-medium text-xl text-left text-black/90">Community</h4>
                        <p className="text-left text-md text-gray-600">
                          Chat with teachers and peers, join or create topic-based study groups
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                    <div className="rounded-full flex items-center justify-center h-12 w-12 bg-blue-100">
                        <img src={ai}  className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-xl text-left text-black/90">AI Assistance</h4>
                        <p className="text-left text-md text-gray-600">                Get instant study help, generate summaries, flashcards, and notes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                    <div className="rounded-full flex items-center justify-center h-12 w-12 bg-blue-100">
                        <img src={rocket}  className="w-6 h-6" />
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-xl text-left text-black/90">Learning & Practice</h4>
                        <p className="text-left text-md text-gray-600">                Take exams & quizzes, use the code editor for programming practice
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                    <div className="rounded-full flex items-center justify-center h-12 w-12 bg-blue-100">
                        <img src={editor}  className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-xl text-left text-black/90">Tools & Resources</h4>
                        <p className="text-left text-md text-gray-600">Access saved notes and AI-curated study guides</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow">
                  <div className="flex flex-col space-y-1.5 p-6 bg-[#008CFF] text-white rounded-t-xl">
                    <h3 className="text-2xl font-semibold">Teacher Features</h3>
                  </div>
                  <div className="p-6 space-y-9">
                  <div className="flex items-start gap-4">
                  <div className="rounded-full flex items-center justify-center h-12 w-12 bg-blue-100">
                        <img src={editor}  className="w-6 h-6" />
                      </div>                      <div>
                        <h4 className="font-medium text-xl text-left text-black/90">Study Materials</h4>
                        <p className="text-left text-md text-gray-600">
                          Upload and manage notes, assignments, and video lessons
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                    <div className="rounded-full flex items-center justify-center h-12 w-12 bg-blue-100">
                        <img src={community}  className="w-6 h-6" />
                      </div>                      <div>
                        <h4 className="font-medium text-xl text-left text-black/90">Live Sessions</h4>
                        <p className="text-left text-md text-gray-600">
                          Schedule and conduct live classes with interactive tools
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                    <div className="rounded-full flex items-center justify-center h-12 w-12 bg-blue-100">
                        <img src={rocket}  className="w-6 h-6" />
                      </div>                      <div>
                        <h4 className="font-medium text-xl text-left text-black/90">Assessments</h4>
                        <p className="text-left text-md text-gray-600">
                          Create and manage quizzes, exams, and assignments
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                    <div className="rounded-full flex items-center justify-center h-12 w-12 bg-blue-100">
                        <img src={progress}  className="w-6 h-6" />
                      </div>                      <div>
                        <h4 className="font-medium text-xl text-left text-black/90">Student Progress</h4>
                        <p className="text-left text-md text-gray-600">
                          Monitor performance reports and track individual progress
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>



          <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-500 text-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-5">
                    Ready to Transform Education?
                  </h2>
                  <p className="max-w-[700px] md:text-xl text-white mb-8  ">
                    Join LearnSync today and experience the future of learning with AI-powered tools and interactive features.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button className="bg-transparent border-2 border-white text-white py-3 px-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-sm hover:shadow-xl">
                  <a href='/signup'>
                    Get Started now!
                    </a>
                  </button>
                  <button className="px-8 py-3 text-lg font-medium border-2 border-white bg-white text-blue-500 rounded-lg hover:bg-white/10 hover:text-white">
                  <a href='/contact'>
                    Request Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </section>


        </div>

      </div>

    </>
  );
}

export default HomePage;
