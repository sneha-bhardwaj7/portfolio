"use client"

import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      setTimeout(() => {
        setSubmitStatus("")
      }, 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "sneha.bhardwaj@example.com",
      link: "mailto:sneha.bhardwaj@example.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/sneha-bhardwaj-764b38290/",
      link: "http://www.linkedin.com/in/sneha-bhardwaj-764b38290/",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: "🔗",
      label: "GitHub",
      value: "github.com/sneha-bhardwaj",
      link: "https://github.com/sneha-bhardwaj",
      color: "from-orange-500 to-red-500",
    },
  ]

  const socialLinks = [
    { name: "GitHub", icon: "🔗", url: "https://github.com/sneha-bhardwaj" },
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com/in/sneha-bhardwaj" },
    { name: "Twitter", icon: "🐦", url: "https://twitter.com/sneha_dev" },
    { name: "Instagram", icon: "📷", url: "https://instagram.com/sneha.codes" },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl floating-element"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl floating-element"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's discuss your next project or just say hello! I'm always open to new opportunities and collaborations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="slide-in-left">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-6 gradient-text">Let's Connect</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    I'm always excited to work on new projects and collaborate with amazing people. Whether you have a
                    project in mind, want to discuss opportunities, or just want to say hi, feel free to reach out!
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={contact.label}
                      href={contact.link}
                      className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover-lift scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center floating-element`}
                      >
                        <span className="text-xl">{contact.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{contact.label}</h4>
                        <p className="text-gray-400">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-8">
                  <h4 className="text-xl font-semibold mb-4 gradient-text">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover-lift glow-effect bounce-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <span className="text-xl">{social.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Download Resume */}
                <div className="pt-8">
                  <button className="btn-primary px-8 py-4 text-lg font-semibold hover-lift flex items-center space-x-2">
                    <span>📄</span>
                    <span>Download Resume</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="slide-in-right">
              <div className="card hover-lift">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Send Message</h3>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 slide-in-up">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white transition-all duration-300"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary px-8 py-4 text-lg font-semibold hover-lift disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>🚀</span>
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center slide-in-up">
          <div className="card max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Start Your Project?</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm currently available for freelance work and full-time opportunities. Let's create something amazing
              together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-3 hover-lift">Start a Project</button>
              <button className="px-8 py-3 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-lg hover-lift">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

