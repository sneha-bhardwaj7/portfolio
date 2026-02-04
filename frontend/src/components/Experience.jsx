import { 
  FaBriefcase, 
  FaUsers, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaStar 
} from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Swarajya Digital",
      role: "Software Developer Intern (Paid)",
      duration: "June 2024 - Aug 2024",
      location: "Remote",
      type: "Internship",
      responsibilities: [
        "Built responsive user interfaces using React.js and Tailwind CSS",
        "Integrated frontend components with backend APIs",
        "Worked on real-world client projects in a collaborative team environment",
        "Fixed UI bugs and improved usability across multiple screens",
        "Followed best practices for clean and maintainable frontend code",
      ],
      accomplishments: [
        "Delivered production-ready UI features for live client projects",
        "Improved page responsiveness and cross-device compatibility",
        "Gained hands-on experience with real-world development workflows",
        "Enhanced overall user experience through iterative UI improvements",
      ],
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Git"],
      color: "from-purple-500 to-pink-500",
      icon: FaBriefcase,
    },
    {
      id: 2,
      company: "Google Developer Group (GDG)",
      role: "Core Team Member",
      duration: "2024 - Present",
      location: "University",
      type: "Community",
      responsibilities: [
        "Organized and coordinated technical events, workshops, and sessions",
        "Assisted in planning developer-focused learning initiatives",
        "Collaborated with team members to manage event logistics and outreach",
        "Helped onboard students and promote tech awareness on campus",
        "Supported speakers and managed event execution workflows",
      ],
      accomplishments: [
        "Contributed to the successful execution of multiple GDG events",
        "Helped engage and onboard new students into the developer community",
        "Improved event coordination processes through structured planning",
        "Strengthened leadership and communication skills through teamwork",
      ],
      technologies: ["Event Management", "Team Coordination", "Community Building", "Communication"],
      color: "from-blue-500 to-cyan-500",
      icon: FaUsers,
    },
  ];

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
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              return (
                <div
                  key={experience.id}
                  className={`relative mb-12 ${index % 2 === 0 ? "slide-in-left" : "slide-in-right"}`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div
                    className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${experience.color} rounded-full border-4 border-gray-900 glow-effect`}
                  ></div>

                  <div className="ml-20">
                    <div className="card hover-lift">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <Icon className="text-2xl text-purple-400" />
                            <h3 className="text-2xl font-bold gradient-text">{experience.role}</h3>
                          </div>
                          <h4 className="text-xl text-purple-400 font-semibold mb-1">{experience.company}</h4>
                          <div className="flex flex-wrap items-center gap-4 text-gray-400">
                            <span className="flex items-center space-x-2">
                              <FaCalendarAlt />
                              <span>{experience.duration}</span>
                            </span>
                            <span className="flex items-center space-x-2">
                              <FaMapMarkerAlt />
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
                        <div>
                          <h5 className="text-lg font-semibold mb-3 text-pink-400">Key Responsibilities</h5>
                          <ul className="space-y-2">
                            {experience.responsibilities.map((responsibility, respIndex) => (
                              <li key={respIndex} className="flex items-start space-x-3 text-gray-300">
                                <div className={`w-2 h-2 bg-gradient-to-r ${experience.color} rounded-full mt-2`} />
                                <span className="text-sm leading-relaxed">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="text-lg font-semibold mb-3 text-cyan-400">Key Accomplishments</h5>
                          <ul className="space-y-2">
                            {experience.accomplishments.map((accomplishment, accIndex) => (
                              <li key={accIndex} className="flex items-start space-x-3 text-gray-300">
                                <FaStar className="text-green-400 mt-1" />
                                <span className="text-sm leading-relaxed">{accomplishment}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-gray-700">
                        <h5 className="text-lg font-semibold mb-3 text-yellow-400">Technologies & Skills</h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 bg-gradient-to-r ${experience.color} bg-opacity-20 border border-purple-500/30 rounded-full text-sm text-gray-300`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center slide-in-up">
          <div className="card max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Professional Summary</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I have hands-on experience as a Software Developer Intern at Swarajya Digital, where I worked on real-world
              client projects and built responsive web interfaces using modern technologies. Alongside this, being a Core
              Team Member at GDG has helped me develop strong collaboration, leadership, and event coordination skills,
              giving me a balanced blend of technical and community-driven experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
