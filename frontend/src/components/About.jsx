import { FaRocket, FaBriefcase, FaCode, FaStar, FaMapMarkerAlt, FaCalendarAlt, FaLaptopCode, FaCheckCircle } from "react-icons/fa"
import { RiStackFill } from "react-icons/ri" // Using RiStackFill for Technologies as FaCode is used elsewhere

const About = () => {
 const stats = [
  { number: "1+", label: "Internship Completed", icon: <FaRocket /> },
  { number: "10+", label: "Real Projects", icon: <FaBriefcase /> },
  { number: "8+", label: "Tech Stack", icon: <RiStackFill /> },
  { number: "AI+", label: "AI Workflows", icon: <FaStar /> },
];


  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl floating-element"></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl floating-element"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}<div className="slide-in-left">
  <div className="space-y-6">
    <div className="card hover-lift">
      <h3 className="text-2xl font-semibold mb-4 gradient-text">
        MERN Stack Developer & AI Workflow Enthusiast
      </h3>
      <p className="text-gray-300 text-lg leading-relaxed">
        I build scalable, responsive web applications using the MERN stack, combining clean frontend experiences with
        robust backend systems. I enjoy turning complex ideas into reliable, user-friendly products.
      </p>
    </div>

    <div className="card hover-lift">
      <h4 className="text-xl font-semibold mb-3 text-purple-400">What I Do</h4>
      <p className="text-gray-300 leading-relaxed">
        I develop full-stack applications using React.js, Tailwind CSS, Node.js, Express, and REST APIs. I work with
        databases like MongoDB and MySQL, implement secure authentication using JWT, and manage cloud resources on AWS
        (S3, EC2, IAM). I also build real-time features using WebSockets.
      </p>
    </div>

    <div className="card hover-lift">
      <h4 className="text-xl font-semibold mb-3 text-pink-400">AI & Automation</h4>
      <p className="text-gray-300 leading-relaxed">
        I integrate AI-powered features using LangChain, LangGraph, and OpenAI APIs, and automate workflows using n8n.
        My focus is on building intelligent systems that enhance user experience and streamline real-world processes.
      </p>
    </div>
  </div>
</div>

          
          {/* Stats */}
          <div className="slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="card text-center hover-lift glow-effect scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Icon rendered directly here */}
                  <div className="text-4xl mb-3 floating-element text-purple-400">{stat.icon}</div>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 card hover-lift">
              <h4 className="text-xl font-semibold mb-4 gradient-text">Quick Facts</h4>
              <div className="space-y-3">
                {[
                  { label: "Location", value: "India", icon: <FaMapMarkerAlt /> }, // Replaced "📍"
                  { label: "Experience", value: "2+ Years", icon: <FaCalendarAlt /> }, // Replaced "💼" (changed to calendar for distinction)
                  { label: "Specialization", value: "Mern Development", icon: <FaLaptopCode /> }, // Replaced "⚛️"
                  { label: "Availability", value: "Open to Opportunities", icon: <FaCheckCircle /> }, // Replaced "✅"
                ].map((fact, index) => (
                  <div
                    key={fact.label}
                    className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl text-purple-400">{fact.icon}</span> {/* Styled icon */}
                      <span className="text-gray-300">{fact.label}</span>
                    </div>
                    <span className="text-purple-400 font-medium">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About