"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section-nvidia bg-canvas">
      <div className="container-nvidia">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-caption text-nvidia uppercase tracking-widest mb-4 block">
            ~/about
          </span>
          <h2 className="text-display-md mb-4">About</h2>
          <p className="text-body-lg text-ink-muted max-w-2xl">
            Transforming ideas into scalable cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-body-lg text-ink-secondary leading-relaxed">
              I am a <span className="text-nvidia font-semibold">BCA Graduate</span> and aspiring{" "}
              <span className="text-nvidia font-semibold">DevOps & Cloud Engineer</span> with a strong
              passion for automation and cloud-native technologies. I believe in building robust,
              scalable infrastructure that enables teams to deliver faster and more reliably.
            </p>
            <p className="text-body-md text-ink-muted leading-relaxed">
              My journey into DevOps has been driven by hands-on experience with{" "}
              <span className="text-ink font-medium">AWS, CI/CD, Docker, Terraform, Kubernetes,</span>{" "}
              and <span className="text-ink font-medium">Linux</span>. I am a continuous learner
              with AWS and Cisco certifications, always exploring new tools and best practices
              in the cloud ecosystem.
            </p>
            <p className="text-body-md text-ink-muted leading-relaxed">
              I specialize in bridging the gap between development and operations, ensuring
              seamless deployments, automated testing, and reliable production systems through
              Infrastructure as Code and modern DevOps practices.
            </p>

            <div className="flex gap-8 pt-4 border-t border-hairline">
              <div className="text-center">
                <div className="text-display-md text-nvidia font-bold">3+</div>
                <div className="text-body-sm text-ink-muted">Years Experience</div>
              </div>
              <div className="border-l border-hairline pl-8">
                <div className="text-display-md text-nvidia font-bold">15+</div>
                <div className="text-body-sm text-ink-muted">Projects Built</div>
              </div>
              <div className="border-l border-hairline pl-8">
                <div className="text-display-md text-nvidia font-bold">6</div>
                <div className="text-body-sm text-ink-muted">Certifications</div>
              </div>
            </div>
          </motion.div>

          {/* Highlights as terminal cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              { title: "Cloud Enthusiast", desc: "Deep focus on AWS services, serverless, and scalable architectures." },
              { title: "Automation First", desc: "Passionate about CI/CD, IaC, and eliminating manual processes." },
              { title: "Containerization", desc: "Hands-on with Docker, Kubernetes, and cloud-native workloads." },
              { title: "Linux & Scripting", desc: "Proficient in Bash, Python, and Linux system administration." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="card-terminal"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-nvidia font-mono text-body-sm">$</span>
                  <span className="font-mono text-body-sm text-ink-secondary">{item.title.toLowerCase().replace(/\s+/g, '-')}</span>
                </div>
                <p className="text-body-sm text-ink-muted">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}