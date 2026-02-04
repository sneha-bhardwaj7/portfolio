import {
  FaCode, 
  FaLaptopCode, 
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaWrench,
  FaServer,
  FaLeaf,
  FaFlask,
  FaPencilRuler,
  FaChartBar,
  FaBug,
  FaTrophy,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { MdApi, MdOutlineCode } from 'react-icons/md';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      Icon: FaLaptopCode,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React.js", level: 90, Icon: FaReact }, 
        { name: "JavaScript", level: 85, Icon: FaJsSquare }, 
        { name: "HTML5", level: 95, Icon: FaHtml5 }, 
        { name: "CSS3", level: 90, Icon: FaCss3Alt }, 
        { name: "Tailwind CSS", level: 88, Icon: SiTailwindcss }, 
        { name: "Responsive Design", level: 85, Icon: FaCode },
      ],
    },
    {
      title: "Backend Development",
      Icon: MdOutlineCode,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Node.js", level: 80, Icon: FaNodeJs }, 
        { name: "Express.js", level: 75, Icon: FaServer }, 
        { name: "REST APIs", level: 85, Icon: MdApi }, 
        { name: "WebSocket", level: 65, Icon: FaServer }, 
        { name: "JWT Authentication", level: 75, Icon: MdApi }, 
      ],
    },
    {
      title: "Database & Cloud",
      Icon: FaDatabase, 
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "MongoDB", level: 80, Icon: FaLeaf }, 
        { name: "MySQL", level: 70, Icon: FaChartBar }, 
        { name: "Data Modeling", level: 70, Icon: FaDatabase }, 
        { name: "AWS (S3, EC2, IAM)", level: 60, Icon: FaServer }, 
      ],
    },
    {
      title: "AI & Automation",
      Icon: FaCode,
      color: "from-pink-500 to-orange-500",
      skills: [
        { name: "LangChain", level: 70, Icon: FaCode }, 
        { name: "LangGraph", level: 65, Icon: FaCode }, 
        { name: "n8n Workflows", level: 70, Icon: FaCode }, 
        { name: "OpenAI API", level: 75, Icon: MdApi }, 
      ],
    },
    {
      title: "DSA & Problem Solving",
      Icon: FaTrophy,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "LeetCode (500+ Problems)", level: 80, Icon: FaCode },
        { name: "GeeksforGeeks Practice", level: 75, Icon: FaCode },
        { name: "Global Rank ~86K", level: 70, Icon: FaTrophy },
      ],
    },
  ];

  const tools = [
    { name: "Git", Icon: FaGitAlt, color: "text-orange-400" }, 
    { name: "GitHub", Icon: FaGithub, color: "text-gray-400" }, 
    { name: "VS Code", Icon: FaCode, color: "text-blue-400" }, 
    { name: "Postman", Icon: FaFlask, color: "text-orange-500" }, 
    { name: "API Documentation", Icon: MdApi, color: "text-green-400" }, 
    { name: "Figma", Icon: FaPencilRuler, color: "text-purple-400" }, 
  ];

  const additionalSkills = [
    "Authentication & Authorization",
    "JWT Security",
    "API Integration",
    "Cloud Basics (AWS)",
    "System Design Basics",
    "DSA Practice",
    "Clean Code",
    "Team Collaboration",
    "Problem Solving",
  ];

  const IconWrapper = ({ Icon, size = 24 }) => (
    <Icon className={`w-auto h-auto`} size={size} />
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl floating-element"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl floating-element"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 flex items-center justify-center space-x-3">
            <FaLaptopCode className="text-purple-500" />
            <span>My <span className="gradient-text">Skills</span></span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A snapshot of the technologies, tools, and problem-solving skills I use to build scalable products
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="card hover-lift scale-in p-6 bg-gray-800/50 rounded-xl shadow-xl border border-gray-700/50 backdrop-blur-sm"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 floating-element glow-effect`}
                >
                  <IconWrapper Icon={category.Icon} size={30} />
                </div>
                <h3 className="text-2xl font-semibold text-white gradient-text">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="slide-in-left"
                    style={{ animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl text-purple-300">
                          <IconWrapper Icon={skill.Icon} size={20} />
                        </span>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-purple-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="slide-in-up">
          <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center space-x-3">
            <FaWrench className="text-cyan-400" />
            <span>Tools & <span className="gradient-text">Technologies</span></span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="card text-center hover-lift glow-effect bounce-in p-4 bg-gray-800/50 rounded-xl shadow-lg border border-gray-700/50"
              >
                <div className={`text-4xl mb-3 floating-element mx-auto w-fit ${tool.color}`}>
                  <IconWrapper Icon={tool.Icon} size={40} />
                </div>
                <h4 className={`font-semibold text-lg ${tool.color}`}>{tool.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center slide-in-up">
          <h3 className="text-2xl font-bold mb-6 gradient-text flex items-center justify-center space-x-2">
            <IoMdCheckmarkCircleOutline />
            <span>Additional Skills</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-gray-300 hover:bg-purple-500/30 transition-all duration-300 hover-lift text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
