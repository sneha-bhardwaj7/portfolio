const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 85, icon: "🟨" },
        { name: "HTML5", level: 95, icon: "🧡" },
        { name: "CSS3", level: 90, icon: "🔵" },
        { name: "Tailwind CSS", level: 88, icon: "💨" },
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Node.js", level: 75, icon: "🟢" },
        { name: "Express.js", level: 70, icon: "🚀" },
        { name: "REST APIs", level: 80, icon: "🔗" },
      ],
    },
    {
      title: "Database Management",
      icon: "🗄️",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "MongoDB", level: 75, icon: "🍃" },
        { name: "SQL", level: 70, icon: "📊" },
      ],
    },
  ]

  const tools = [
    { name: "Git", icon: "📝", color: "text-orange-400" },
    { name: "GitHub", icon: "🐙", color: "text-gray-400" },
    { name: "VS Code", icon: "💻", color: "text-blue-400" },
    { name: "Postman", icon: "📮", color: "text-orange-500" },
    { name: "Figma", icon: "🎨", color: "text-purple-400" },
    { name: "Chrome DevTools", icon: "🔧", color: "text-green-400" },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl floating-element"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl floating-element"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to create amazing web experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="card hover-lift scale-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 floating-element glow-effect`}
                >
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold gradient-text">{category.title}</h3>
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
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-purple-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1 + 0.5}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="slide-in-up">
          <h3 className="text-3xl font-bold text-center mb-8">
            Tools & <span className="gradient-text">Technologies</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="card text-center hover-lift glow-effect bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3 floating-element">{tool.icon}</div>
                <h4 className={`font-semibold ${tool.color}`}>{tool.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center slide-in-up">
          <h3 className="text-2xl font-bold mb-6 gradient-text">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Responsive Design",
              "Cross-browser Compatibility",
              "Performance Optimization",
              "SEO Best Practices",
              "Agile Methodology",
              "Problem Solving",
              "Team Collaboration",
              "Code Review",
              "Testing & Debugging",
            ].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-gray-300 hover:bg-purple-500/30 transition-all duration-300 hover-lift scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
