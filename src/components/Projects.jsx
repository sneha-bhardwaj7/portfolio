"use client"

import { useState } from "react"

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      id: 1,
      name: "Pet Care Platform",
      description:
        "A comprehensive web application for pet care management with user authentication, appointment booking, and pet health tracking features.",
      role: "Frontend Developer",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"],
      image: "/modern-pet-care-dashboard-interface.jpg",
      liveDemo: "https://petcare-demo.com",
      github: "https://github.com/sneha/pet-care-platform",
      features: [
        "User authentication and profiles",
        "Pet health tracking dashboard",
        "Appointment booking system",
        "Responsive design for all devices",
        "Real-time notifications",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      name: "BrandBooster",
      description:
        "A marketing analytics dashboard that helps businesses track their brand performance across multiple platforms with real-time data visualization.",
      role: "Full-Stack Developer",
      technologies: ["React.js", "Chart.js", "Node.js", "Express.js", "SQL"],
      image: "/marketing-dashboard-analytics.png",
      liveDemo: "https://brandbooster-demo.com",
      github: "https://github.com/sneha/brandbooster",
      features: [
        "Real-time analytics dashboard",
        "Multi-platform data integration",
        "Interactive charts and graphs",
        "Custom reporting system",
        "Performance optimization",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl floating-element"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl floating-element"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Project Navigation */}
        <div className="flex justify-center mb-12 slide-in-up">
          <div className="flex space-x-4 bg-gray-800/50 p-2 rounded-lg backdrop-blur-sm">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeProject === index
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                {project.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Project */}
        <div className="max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-500 ${
                activeProject === index
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Project Image */}
                <div className="slide-in-left">
                  <div className="relative group">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-300`}
                    ></div>
                    <div className="relative overflow-hidden rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        className="w-full h-auto transform group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex space-x-3">
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary px-4 py-2 text-sm"
                            >
                              Live Demo
                            </a>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 text-sm border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-lg"
                            >
                              GitHub
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="slide-in-right">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2 gradient-text">{project.name}</h3>
                      <p className="text-purple-400 font-semibold mb-4">{project.role}</p>
                      <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-pink-400">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-20 border border-purple-500/30 rounded-full text-sm text-gray-300 hover:bg-opacity-30 transition-all duration-300 scale-in`}
                            style={{ animationDelay: `${techIndex * 0.1}s` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-cyan-400">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={feature}
                            className="flex items-center space-x-3 text-gray-300 slide-in-left"
                            style={{ animationDelay: `${featureIndex * 0.1}s` }}
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full`}></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 pt-4">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary px-6 py-3 hover-lift"
                      >
                        View Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-lg hover-lift"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 slide-in-up">
          {[
            { number: "15+", label: "Projects Completed", icon: "🚀" },
            { number: "2+", label: "Years Experience", icon: "⏰" },
            { number: "100%", label: "Client Satisfaction", icon: "⭐" },
            { number: "5+", label: "Technologies", icon: "💻" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="card text-center hover-lift glow-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-2 floating-element">{stat.icon}</div>
              <div className="text-2xl font-bold gradient-text mb-1">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
