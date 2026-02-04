"use client"
import { useEffect, useState } from "react"
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaLaptopCode,
  FaDownload,
} from "react-icons/fa"

import snehaImage from "../assets/snehaImage.png"
import snehaResumePdf from "../assets/snehaResume.pdf"

const Hero = () => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const titles = [
    "MERN Stack Developer",
    "Problem Solving",
    "AI Orchestration",
    "Team Collaboration",
  ]

  // Typing animation logic
  useEffect(() => {
    const currentTitle = titles[currentIndex]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length)
          setDisplayText("")
        }, 2000)
      }
    }, 80) // slightly faster for smoother feel

    return () => clearInterval(typeInterval)
  }, [currentIndex])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleDownloadResume = () => {
    const resumeUrl = snehaResumePdf
    const link = document.createElement("a")
    link.href = resumeUrl
    link.setAttribute("download", "Sneha_Bhardwaj_Resume.pdf")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-700 via-purple-300/50 to-gray-700"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl floating-element"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl floating-element"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl floating-element"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left slide-in-left">
            <div className="mb-6">
              <p
                className="text-purple-400 text-lg mb-2 slide-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Hello, I'm
              </p>
              <h1
                className="text-5xl lg:text-7xl font-bold mb-4 slide-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <span className="gradient-text">Sneha</span>
                <br />
                <span className="text-white">Bhardwaj</span>
              </h1>
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <h2
                  className="text-2xl lg:text-3xl font-semibold text-gray-300 slide-in-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  {displayText}
                  {displayText && <span className="animate-pulse">|</span>}
                </h2>
              </div>
            </div>

            <p
              className="text-xl text-gray-400 mb-8 max-w-2xl slide-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              A MERN Stack Developer with internship experience at Swarajya Digital, working on real-world web applications
               and user-centric interfaces. Experienced in integrating AI features into projects, and actively contributing as a Core Team Member at GDG.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start slide-in-up"
              style={{ animationDelay: "1s" }}
            >
              <button
                onClick={handleDownloadResume}
                className="btn-primary px-6 py-3 hover-lift flex items-center space-x-2"
              >
                <FaDownload className="text-white" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={scrollToContact}
                className="px-8 py-4 text-lg font-semibold border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-lg hover-lift"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div
              className="flex justify-center lg:justify-start space-x-6 mt-8 slide-in-up"
              style={{ animationDelay: "1.2s" }}
            >
              <a
                href="https://github.com/sneha-bhardwaj7"
                className="w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover-lift glow-effect"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-xl text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/sneha-bhardwaj-764b38290/"
                className="w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover-lift glow-effect"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-xl text-white" />
              </a>
              <a
                href="mailto:snehabhardwaj083@gmail.com"
                className="w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover-lift glow-effect"
                aria-label="Email Me"
              >
                <FaEnvelope className="text-xl text-white" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 scale-110 floating-element"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-purple-500/30 hover-lift glow-effect">
                <img
                  src={snehaImage}
                  alt="Sneha Bhardwaj - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center floating-element glow-effect">
                <FaReact className="text-4xl text-white" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center floating-element glow-effect"
                style={{ animationDelay: "1s" }}
              >
                <FaLaptopCode className="text-2xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 slide-in-up"
        style={{ animationDelay: "1.5s" }}
      >
        <a href="#projects" aria-label="Scroll down to projects">
          <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
