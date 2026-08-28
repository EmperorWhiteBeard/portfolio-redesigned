"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, BookOpen, Cloud, Cpu, Terminal, Zap } from "lucide-react"

const highlights = [
  { 
    icon: BookOpen, 
    title: "BCA Graduate", 
    desc: "Strong foundation in computer applications and software engineering." 
  },
  { 
    icon: Cloud, 
    title: "Cloud Enthusiast", 
    desc: "Deep focus on AWS services, serverless, and scalable architectures." 
  },
  { 
    icon: Zap, 
    title: "Automation First", 
    desc: "Passionate about CI/CD, IaC, and eliminating manual processes." 
  },
  { 
    icon: Cpu, 
    title: "Containerization", 
    desc: "Hands-on with Docker, Kubernetes, and cloud-native workloads." 
  },
  { 
    icon: Terminal, 
    title: "Linux & Scripting", 
    desc: "Proficient in Bash, Python, and Linux system administration." 
  },
  { 
    icon: Award, 
    title: "Certified", 
    desc: "AWS and Cisco certified, continuously learning and upskilling." 
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section bg-canvas">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-md mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-body-lg text-ink-muted max-w-3xl mx-auto">
            Transforming ideas into scalable cloud infrastructure
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-body-lg text-ink-secondary leading-relaxed">
              I am a <span className="text-primary font-semibold">BCA Graduate</span> and aspiring{" "}
              <span className="text-primary font-semibold">DevOps & Cloud Engineer</span> with a strong
              passion for automation and cloud-native technologies. I believe in building robust,
              scalable infrastructure that enables teams to deliver faster and more reliably.
            </p>
            <p className="text-body-lg text-ink-muted leading-relaxed">
              My journey into DevOps has been driven by hands-on experience with{" "}
              <span className="text-ink font-medium">AWS, CI/CD, Docker, Terraform, Kubernetes,</span>{" "}
              and <span className="text-ink font-medium">Linux</span>. I am a continuous learner
              with AWS and Cisco certifications, always exploring new tools and best practices
              in the cloud ecosystem.
            </p>
            <p className="text-body-lg text-ink-muted leading-relaxed">
              I specialize in bridging the gap between development and operations, ensuring
              seamless deployments, automated testing, and reliable production systems through
              Infrastructure as Code and modern DevOps practices.
            </p>

            <div className="flex gap-4 pt-4">
              <div className="text-center">
                <div className="text-display-md text-primary font-bold">3+</div>
                <div className="text-body-sm text-ink-muted">Years Learning</div>
              </div>
              <div className="w-px bg-hairline" />
              <div className="text-center">
                <div className="text-display-md text-primary font-bold">15+</div>
                <div className="text-body-sm text-ink-muted">Projects</div>
              </div>
              <div className="w-px bg-hairline" />
              <div className="text-center">
                <div className="text-display-md text-primary font-bold">5+</div>
                <div className="text-body-sm text-ink-muted">Certifications</div>
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="card group"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-heading-sm mb-2">{item.title}</h3>
                <p className="text-body-sm text-ink-muted">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
