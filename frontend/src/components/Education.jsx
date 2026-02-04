import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChartBar,
  FaCode,
  FaTrophy,
  FaAward,
  FaStar,
} from 'react-icons/fa';
import { SiPostman } from 'react-icons/si';
import { MdOutlineScience } from 'react-icons/md';

const Education = () => {
  const education = {
    degree: "Bachelor of Technology",
    university: "Quantum University",
    duration: "2023 - 2027",
    location: "India",
    currentCgpa: "8.79/10",
    highlights: [
      "9+ SGPA in 2 semesters",
      "Strong academic performance in core CS subjects",
    ],
    relevantCourses: [
      "Data Structures & Algorithms",
      "Web Development",
      "Database Management Systems",
      "Software Engineering",
      "Computer Networks",
      "Object-Oriented Programming",
    ],
  };

  const certifications = [
    {
      name: "Postman API Fundamentals",
      issuer: "Postman",
      date: "2024",
      description: "Hands-on certification covering API testing, documentation, and automation using Postman.",
      skills: ["API Testing", "REST APIs", "API Documentation", "Automation"],
      Icon: SiPostman,
      color: "from-orange-500 to-red-500",
      credentialId: "POST-2024-001",
    },
    {
      name: "Generative AI Fundamentals",
      issuer: "Google Cloud",
      date: "2024",
      description:
        "Certification covering Generative AI concepts, prompt engineering, and building AI-powered applications.",
      skills: ["Generative AI", "Prompt Engineering", "AI Ethics", "ML Basics"],
      Icon: MdOutlineScience,
      color: "from-purple-500 to-pink-500",
      credentialId: "GEN-AI-2024-002",
    },
  ];

  const achievements = [
    { title: "Academic Excellence", description: "9+ SGPA in two semesters", Icon: FaTrophy },
    { title: "GDG Core Team", description: "Active core team member at GDG", Icon: FaAward },
    { title: "Industry Internship", description: "Software Intern at Swarajya Digital", Icon: FaStar },
    { title: "Hackathons", description: "Participated in multiple hackathons", Icon: FaCode },
  ];

  const IconWrapper = ({ Icon, size = 24, className = "" }) => (
    <Icon className={`w-auto h-auto ${className}`} size={size} />
  );

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl floating-element"></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl floating-element"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My academic background and certifications that support my technical growth
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education */}
          <div className="mb-16 slide-in-left">
            <div className="card hover-lift p-8 bg-gray-800/50 rounded-xl shadow-xl border border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-6 floating-element glow-effect">
                  <IconWrapper Icon={FaGraduationCap} size={30} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text mb-1">{education.degree}</h3>
                  <h4 className="text-xl text-purple-400 font-semibold">{education.university}</h4>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <IconWrapper Icon={FaCalendarAlt} size={20} className="text-pink-400" />
                      <span><strong>Duration:</strong> {education.duration}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <IconWrapper Icon={FaMapMarkerAlt} size={20} className="text-pink-400" />
                      <span><strong>Location:</strong> {education.location}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <IconWrapper Icon={FaChartBar} size={20} className="text-pink-400" />
                      <span>
                        <strong>Current CGPA:</strong>{" "}
                        <span className="text-green-400 font-semibold">{education.currentCgpa}</span>
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <IconWrapper Icon={FaTrophy} size={20} className="text-yellow-400" />
                      <span><strong>Highlights:</strong> {education.highlights.join(" • ")}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-semibold mb-3 text-cyan-400">Relevant Coursework</h5>
                  <div className="grid grid-cols-1 gap-2">
                    {education.relevantCourses.map((course, index) => (
                      <div
                        key={course}
                        className="flex items-center space-x-3 text-gray-300 slide-in-right"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        <span className="text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 slide-in-up">
              Professional <span className="gradient-text">Certifications</span>
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className={`card hover-lift glow-effect p-6 bg-gray-800/50 rounded-xl shadow-lg border border-gray-700/50 backdrop-blur-sm`}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center floating-element`}>
                      <IconWrapper Icon={cert.Icon} size={22} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold gradient-text mb-1">{cert.name}</h4>
                      <p className="text-purple-400 font-semibold">{cert.issuer} • {cert.date}</p>
                      <p className="text-xs text-gray-500 mt-1">ID: {cert.credentialId}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{cert.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-1 bg-gradient-to-r ${cert.color} bg-opacity-20 border border-purple-500/30 rounded-full text-xs text-gray-300`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="slide-in-up">
            <h3 className="text-3xl font-bold text-center mb-8">
              Academic <span className="gradient-text">Achievements</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="card text-center hover-lift glow-effect bounce-in p-5 bg-gray-800/50 rounded-xl shadow-lg border border-gray-700/50"
                >
                  <div className="text-3xl mb-3 floating-element mx-auto w-fit text-yellow-400">
                    <IconWrapper Icon={achievement.Icon} size={30} />
                  </div>
                  <h4 className="font-bold gradient-text mb-2">{achievement.title}</h4>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
