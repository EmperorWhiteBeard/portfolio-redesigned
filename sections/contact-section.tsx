"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="section-nvidia bg-surface">
      <div className="container-nvidia">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-caption text-nvidia uppercase tracking-widest mb-4 block">
            ~/contact
          </span>
          <h2 className="text-display-md mb-4">Get in Touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="card-terminal">
              <div className="font-mono text-body-sm space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-nvidia" />
                  <span className="text-ink-secondary">mizhabnp@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-nvidia" />
                  <span className="text-ink-secondary">Thrissur, Kerala, India</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              {["GitHub", "LinkedIn"].map((name) => (
                <a
                  key={name}
                  href={name === "GitHub" ? "https://github.com/EmperorWhiteBeard" : "https://www.linkedin.com/in/mizhabnp"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 rounded-md bg-surface border border-hairline text-body-sm text-ink-muted hover:text-nvidia hover:border-nvidia/30 transition-all font-mono"
                >
                  {name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="card-terminal">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-mono text-caption text-ink-muted mb-2">name</label>
                  <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="input-nvidia font-mono" placeholder="your_name" />
                </div>
                <div>
                  <label className="block font-mono text-caption text-ink-muted mb-2">email</label>
                  <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="input-nvidia font-mono" placeholder="you@domain.com" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block font-mono text-caption text-ink-muted mb-2">subject</label>
                <input type="text" required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="input-nvidia font-mono" placeholder="Job Opportunity" />
              </div>
              <div className="mb-6">
                <label className="block font-mono text-caption text-ink-muted mb-2">message</label>
                <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="input-nvidia font-mono resize-none" placeholder="Your message..." />
              </div>
              <button type="submit" disabled={loading || submitted} className="btn-nvidia w-full inline-flex items-center justify-center gap-2">
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : submitted ? <><CheckCircle2 className="w-4 h-4" /> Sent!</> : <><Send className="w-4 h-4" /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}