"use client"

import { motion } from "framer-motion"
import { Download, Mail, ChevronDown, Terminal } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* Subtle circuit pattern */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-50" />
        
        {/* Grid */}
        <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px] opacity-20" />
        
        {/* Green glow orbs - subtle and NVIDIA-colored */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-nvidia/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-nvidia/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container-nvidia px-6">
        <div className="max-w-4xl mx-auto">
          {/* Terminal-style top bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-surface border border-hairline"
          >
            <div className="w-2 h-2 rounded-full bg-nvidia animate-pulse" />
            <span className="font-mono text-caption text-ink-muted uppercase tracking-widest">
              DevOps Engineer • Cloud Architect • AWS Certified
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display-xl md:text-[80px] mb-6 tracking-tight"
          >
            Mizhab Mujeeb{" "}
            <span className="text-nvidia">NP</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-body-lg text-ink-secondary mb-10 leading-relaxed"
          >
            Building scalable cloud infrastructure and automating deployment pipelines. 
            Specializing in AWS, Kubernetes, Docker, CI/CD, and Infrastructure as Code.
          </motion.p>

          {/* Terminal snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-terminal mb-10 max-w-lg"
          >
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-hairline">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-caption text-ink-subtle font-mono">mizhab@devops:~</span>
            </div>
            <div className="font-mono text-body-sm space-y-1">
              <p><span className="prompt text-nvidia">$</span> <span className="text-ink-secondary">kubectl get pods --all-namespaces</span></p>
              <p className="text-ink-muted">NAMESPACE     NAME                              READY  STATUS</p>
              <p className="text-nvidia">production    api-gateway-7d9f4b8c5-x2k9m       1/1    Running</p>
              <p className="text-nvidia">production    auth-service-5c8a2d1e9-p4m7n      1/1    Running</p>
              <p className="text-nvidia">monitoring    prometheus-0                      2/2    Running</p>
              <p><span className="prompt text-nvidia">$</span> <span className="text-ink-secondary">terraform apply --auto-approve</span></p>
              <p className="text-nvidia">Apply complete! Resources: 12 added, 0 changed, 0 destroyed.</p>
              <p><span className="animate-pulse text-nvidia">_</span></p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link href="#contact" className="btn-nvidia inline-flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Get in Touch
            </Link>
            <a href="/resume.pdf" className="btn-dark inline-flex items-center gap-2" download>
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-3"
          >
            {[
              { name: "GitHub", href: "https://github.com/EmperorWhiteBeard" },
              { name: "LinkedIn", href: "https://www.linkedin.com/in/mizhabnp" },
              { name: "Email", href: "mailto:mizhabnp@gmail.com" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-surface border border-hairline text-body-sm text-ink-muted hover:text-nvidia hover:border-nvidia/30 transition-all duration-200 font-mono"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nvidia/30 to-transparent" />
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-5 h-5 text-ink-muted" />
      </motion.div>
    </section>
  )
}