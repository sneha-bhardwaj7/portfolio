"use client"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { name: "GitHub", icon: "🔗", url: "https://github.com/sneha-bhardwaj" },
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com/in/sneha-bhardwaj" },
    { name: "Twitter", icon: "🐦", url: "https://twitter.com/sneha_dev" },
    { name: "Instagram", icon: "📷", url: "https://instagram.com/sneha.codes" },
    { name: "Email", icon: "📧", url: "mailto:sneha.bhardwaj@example.com" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl floating-element"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl floating-element"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 slide-in-left">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center floating-element glow-effect">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">Sneha Bhardwaj</h3>
                  <p className="text-purple-400">Frontend Developer</p>
                </div>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
                Passionate frontend developer creating beautiful, responsive, and user-friendly web applications. Always
                learning, always growing.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover-lift glow-effect scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="slide-in-up">
              <h4 className="text-xl font-bold mb-6 gradient-text">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 block slide-in-right"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="slide-in-right">
              <h4 className="text-xl font-bold mb-6 gradient-text">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-400">
                  <span className="text-lg">📧</span>
                  <a
                    href="mailto:sneha.bhardwaj@example.com"
                    className="hover:text-white transition-colors duration-300"
                  >
                    sneha.bhardwaj@example.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <span className="text-lg">📱</span>
                  <a href="tel:+919876543210" className="hover:text-white transition-colors duration-300">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <span className="text-lg">📍</span>
                  <span>India</span>
                </div>
              </div>

              {/* Download Resume */}
              <div className="mt-6">
                <button className="btn-primary px-6 py-3 hover-lift flex items-center space-x-2">
                  <span>📄</span>
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-800 slide-in-up">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4 gradient-text">Stay Updated</h4>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Subscribe to get notified about my latest projects, blog posts, and tech insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white"
              />
              <button className="btn-primary px-6 py-3 hover-lift">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0 slide-in-left">
              <p>&copy; {currentYear} Sneha Bhardwaj. All rights reserved.</p>
              <p className="text-sm mt-1">Built with ❤️ using React.js & Tailwind CSS</p>
            </div>

            <div className="flex items-center space-x-6 slide-in-right">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover-lift glow-effect transition-all duration-300"
              >
                <span className="text-white">↑</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
