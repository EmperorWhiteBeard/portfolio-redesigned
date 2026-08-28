"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const timeline = [
  { year: "2026", title: "Seeking DevOps Roles", desc: "Building advanced K8s, Terraform, and AWS projects." },
  { year: "2025", title: "Advanced Certifications", desc: "AWS SA, CKA, and Terraform Associate earned." },
  { year: "2024-25", title: "Deep Dive Cloud & DevOps", desc: "Intensive hands-on with AWS, CI/CD, Docker, K8s, IaC." },
  { year: "2024", title: "First AWS Certification", desc: "AWS CCP and Cisco CCNA. Started production projects." },
  { year: "2023", title: "DevOps Journey Begins", desc: "Linux, Git, Docker, CI/CD fundamentals." },
  { year: "2021-24", title: "BCA Graduation", desc: "Bachelor of Computer Applications." },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="section-nvidia bg-canvas">
      <div className="container-nvidia">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-caption text-nvidia uppercase tracking-widest mb-4 block">
            ~/journey
          </span>
          <h2 className="text-display-md mb-4">Experience & Journey</h2>
        </motion.div>

        <div className="max-w-3xl">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative pl-8 pb-10 last:pb-0 border-l border-hairline"
            >
              {/* Green dot */}
              <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-nvidia shadow-glow" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                <span className="font-mono text-caption text-nvidia min-w-[60px]">
                  {item.year}
                </span>
                <h3 className="text-heading-sm">{item.title}</h3>
              </div>
              <p className="text-body-sm text-ink-muted sm:pl-[84px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}