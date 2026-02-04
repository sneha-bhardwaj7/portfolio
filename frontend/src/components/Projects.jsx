"use client"
import pharmaImage from "../assets/pharmaImage.png"
import petCare from "../assets/petCare.png"
import branding from "../assets/branding.png"
import pcod from "../assets/pcod.png" // Assuming you'll use this for the new SheHelp project
import { useState } from "react"

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0)

const projects = [
    {
      id: 1,
      name: "Smart Pharmacy Management", // PROJECT 1
      description:
        "A full-stack pharmacy management platform designed using the MERN stack with a comprehensive admin dashboard and features for automated medicine tracking, billing, and prescription validation.",
      role: "Full-Stack Developer",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firedbase/Auth", "OpenAI API", "Nodemailer"],
      image: pharmaImage,
      liveDemo: "https://pharma-care-2077.vercel.app/AuthPage", // Placeholder
      github: "https://github.com/sneha-bhardwaj7/PharmaCare", // Placeholder
      features: [
        "Admin dashboard for inventory management (500+ medicines with automated low-stock/expiry alerts).",
        "Prescription validation, PoS billing system, and customer portal for medicine search.",
        "Implemented advanced features including Firebase Authentication for multi-role access control.",
        "GPS-based medicine locator for 15-minute availability (Redux).",
      ],
      color: "from-green-500 to-teal-500",
    },
    {
      id: 2,
      name: "SheHelp: Women's Wellness", // NEW PROJECT 2
      description:
        "A dedicated full-stack health platform providing resources for women's wellness, including a cycle tracker, a community forum for supportive discussion, and a doctor consultation portal.",
      role: "Full-Stack Developer",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Web3/Blockchain Integration"],
      image: pcod, // Using the imported 'pcod' image for this project
      liveDemo: "#", // Placeholder
      github: "https://github.com/sneha-bhardwaj7/SheHelp_Wellness", // Placeholder
      features: [
        "Interactive Cycle Tracker and Symptom Logger for personalized health insights.",
        "Community Forum to share experiences on topics like PCOS and miscarriage in a safe, moderated space.",
        "Secure 'Login as Doctor' and 'Connect Wallet' for potential telemedicine and decentralized health records.",
        "Designed a modern, empathetic UI/UX to ensure a supportive user experience.",
      ],
      color: "from-pink-500 to-purple-500", // Updated color to match the pink/purple theme in the image
    },
    {
      id: 3,
      name: "Pet Care Platform", // PROJECT 3 (Shifted from 2)
      description:
        "A robust, full-stack e-commerce and scheduling platform dedicated to pet owners, product e-commerce, and a unique pet workout scheduler.",
      role: "Full-Stack Developer",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
      image: petCare,
      liveDemo: "#", // Placeholder
      github: "https://github.com/sneha-bhardwaj7/pet_care", // Placeholder
      features: [
        "Designed and built an all-in-one digital platform for pet owners.",
        "Integrated e-commerce functionality with a community forum and a pet-specific scheduling tool.",
        "Implemented a unique pet workout scheduler and Used Cloudinary for efficient media management.",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4, // Updated ID from 3 to 4
      name: "BrandBooster", // PROJECT 4 (Shifted from 3)
      description:
        "A marketing analytics dashboard that helps businesses track their brand performance across multiple platforms with real-time data visualization.",
      role: "Full-Stack Developer",
      technologies: ["React.js", "Chart.js", "Node.js", "Express.js", "SQL"],
      image: branding,
      liveDemo: "https://brandbooster-demo.com",
      github: "https://github.com/sneha-bhardwaj7/marketing_agency",
      features: [
        "Real-time analytics dashboard and Multi-platform data integration",
        "Interactive charts and graphs and Custom reporting system",
        "Performance optimization",
      ],
      color: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <section id="projects" className="py-10 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
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
        <div className="max-w-7xl mx-auto">
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
                            
                          </div>
                        </div>

                        
                      </div>

                      <div>
                      <h4 className="text-xl font-semibold m-3 text-pink-400">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 mb-3 ml-1 bg-gradient-to-r ${project.color} bg-opacity-20 border border-purple-500/30 rounded-full text-sm text-gray-300 hover:bg-opacity-30 transition-all duration-300 scale-in`}
                            style={{ animationDelay: `${techIndex * 0.1}s` }}
                          >
                            {tech}
                          </span>
                        ))}
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
                    {/*  */}

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
             { number: "10+", label: "Projects Built", icon: "🚀" },
  { number: "3+", label: "Major Projects", icon: "⏰" },
  { number: "MERN", label: "Full-Stack", icon: "⭐" },
  { number: "AI", label: "Integrations", icon: "💻" },
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