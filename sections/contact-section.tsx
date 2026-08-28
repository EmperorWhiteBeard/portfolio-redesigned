"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    subject: "", 
    message: "" 
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: "", email: "", subject: "", message: "" })
      
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="section bg-surface-1/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-md mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-body-lg text-ink-muted max-w-3xl mx-auto">
            Interested in collaborating or have opportunities? Let&apos;s connect and build something great together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-heading-sm mb-6">Contact Information</h3>
              <div className="space-y-5">
                <a
                  href="mailto:mizhabnp@gmail.com"
                  className="flex items-center gap-4 text-ink-secondary hover:text-primary transition-colors group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-caption text-ink-subtle mb-1">Email</div>
                    <div className="text-body-md">mizhabnp@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-ink-secondary">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-caption text-ink-subtle mb-1">Location</div>
                    <div className="text-body-md">Thrissur, Kerala, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-heading-sm mb-6">Connect on Social</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/EmperorWhiteBeard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mizhabnp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="card bg-primary/5 border-primary/20">
              <h4 className="text-heading-sm mb-2">Quick Response</h4>
              <p className="text-body-sm text-ink-muted">
                I typically respond to emails and LinkedIn messages within 24 hours. 
                For urgent matters, please mention it in your subject line.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="card">
              <h3 className="text-heading-sm mb-6">Send a Message</h3>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-body-sm font-medium text-ink-secondary">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-body-sm font-medium text-ink-secondary">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-body-sm font-medium text-ink-secondary">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="input"
                    placeholder="Job Opportunity, Collaboration, etc."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-body-sm font-medium text-ink-secondary">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="textarea"
                    placeholder="Tell me about your opportunity or project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="btn-primary w-full inline-flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
