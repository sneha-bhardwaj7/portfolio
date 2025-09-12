const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Swarajya Digital",
      role: "Frontend Developer Intern",
      duration: "June 2024 - Present",
      location: "Remote",
      type: "Internship",
      responsibilities: [
        "Designed and developed responsive website layouts using React.js and Tailwind CSS",
        "Collaborated with design team to implement pixel-perfect UI components",
        "Optimized website performance and improved loading speeds by 40%",
        "Participated in code reviews and maintained coding standards",
        "Worked on multiple client projects simultaneously",
      ],
      accomplishments: [
        "Successfully delivered 8+ website layouts within tight deadlines",
        "Improved user engagement by 25% through enhanced UI/UX design",
        "Mentored 2 junior developers in React.js best practices",
        "Implemented responsive design patterns across all projects",
      ],
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Git"],
      color: "from-purple-500 to-pink-500",
      icon: "💼",
    },
    {
      id: 2,
      company: "Tech Events Coordinator",
      role: "Technical Event Coordinator",
      duration: "January 2024 - May 2024",
      location: "University",
      type: "Leadership",
      responsibilities: [
        "Coordinated multiple technical events and workshops for 500+ students",
        "Managed event logistics, speaker coordination, and technical setup",
        "Led a team of 15 volunteers for successful event execution",
        "Developed event websites and registration systems",
        "Handled budget management and vendor negotiations",
      ],
      accomplishments: [
        "Successfully organized 5 major technical events with 95% satisfaction rate",
        "Increased event attendance by 60% through effective marketing strategies",
        "Established partnerships with 10+ tech companies for sponsorships",
        "Created reusable event management templates for future coordinators",
      ],
      technologies: ["Event Management", "Team Leadership", "Project Management", "Communication"],
      color: "from-blue-500 to-cyan-500",
      icon: "🎯",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl floating-element"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl floating-element"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative mb-12 ${index % 2 === 0 ? "slide-in-left" : "slide-in-right"}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${experience.color} rounded-full border-4 border-gray-900 glow-effect`}
                ></div>

                {/* Experience Card */}
                <div className="ml-20">
                  <div className="card hover-lift">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-2xl">{experience.icon}</span>
                          <h3 className="text-2xl font-bold gradient-text">{experience.role}</h3>
                        </div>
                        <h4 className="text-xl text-purple-400 font-semibold mb-1">{experience.company}</h4>
                        <div className="flex flex-wrap items-center gap-4 text-gray-400">
                          <span className="flex items-center space-x-1">
                            <span>📅</span>
                            <span>{experience.duration}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <span>📍</span>
                            <span>{experience.location}</span>
                          </span>
                          <span
                            className={`px-3 py-1 bg-gradient-to-r ${experience.color} bg-opacity-20 border border-purple-500/30 rounded-full text-sm`}
                          >
                            {experience.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Responsibilities */}
                      <div>
                        <h5 className="text-lg font-semibold mb-3 text-pink-400">Key Responsibilities</h5>
                        <ul className="space-y-2">
                          {experience.responsibilities.map((responsibility, respIndex) => (
                            <li
                              key={respIndex}
                              className="flex items-start space-x-3 text-gray-300 slide-in-up"
                              style={{ animationDelay: `${index * 0.3 + respIndex * 0.1}s` }}
                            >
                              <div
                                className={`w-2 h-2 bg-gradient-to-r ${experience.color} rounded-full mt-2 flex-shrink-0`}
                              ></div>
                              <span className="text-sm leading-relaxed">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Accomplishments */}
                      <div>
                        <h5 className="text-lg font-semibold mb-3 text-cyan-400">Key Accomplishments</h5>
                        <ul className="space-y-2">
                          {experience.accomplishments.map((accomplishment, accIndex) => (
                            <li
                              key={accIndex}
                              className="flex items-start space-x-3 text-gray-300 slide-in-up"
                              style={{ animationDelay: `${index * 0.3 + accIndex * 0.1 + 0.2}s` }}
                            >
                              <div className="text-green-400 mt-1 flex-shrink-0">⭐</div>
                              <span className="text-sm leading-relaxed">{accomplishment}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mt-6 pt-6 border-t border-gray-700">
                      <h5 className="text-lg font-semibold mb-3 text-yellow-400">Technologies & Skills</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 bg-gradient-to-r ${experience.color} bg-opacity-20 border border-purple-500/30 rounded-full text-sm text-gray-300 hover:bg-opacity-30 transition-all duration-300 scale-in`}
                            style={{ animationDelay: `${index * 0.3 + techIndex * 0.05}s` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 text-center slide-in-up">
          <div className="card max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Professional Summary</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              With over 2 years of experience in frontend development and technical leadership, I have successfully
              delivered multiple projects while continuously learning and adapting to new technologies. My experience
              spans from hands-on development to team coordination, giving me a well-rounded perspective on software
              development and project management.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
