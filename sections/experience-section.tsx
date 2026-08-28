"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Cloud, GitBranch, Server, Award, Target } from "lucide-react"

const timeline = [
  {
    year: "2026",
    title: "Pursuing DevOps Opportunities",
    description: "Actively seeking full-time DevOps/Cloud Engineering roles. Building advanced projects in Kubernetes, Terraform, and AWS.",
    icon: Target,
  },
  {
    year: "2025",
    title: "Advanced Certifications",
    description: "Earned AWS Solutions Architect, Kubernetes Administrator (CKA), and HashiCorp Terraform Associate certifications.",
    icon: Award,
  },
  {
    year: "2024-2025",
    title: "Deep Dive into Cloud & DevOps",
    description: "Intensive hands-on learning with AWS, CI/CD pipelines, Docker, Kubernetes, and Infrastructure as Code tools.",
    icon: Cloud,
  },
  {
    year: "2024",
    title: "First AWS Certification",
    description: "Achieved AWS Certified Cloud Practitioner and Cisco CCNA certifications. Started building production-grade projects.",
    icon: Award,
  },
  {
    year: "2023",
    title: "DevOps Journey Begins",
    description: "Discovered passion for DevOps and automation. Started learning Linux, Git, Docker, and CI/CD fundamentals.",
    icon: GitBranch,
  },
  {
    year: "2021-2024",
    title: "BCA Graduation",
    description: "Completed Bachelor of Computer Applications with focus on software development, databases, and computer networks.",
    icon: GraduationCap,
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="section bg-canvas">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-md mb-4">Experience & Journey</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-body-lg text-ink-muted max-w-3xl mx-auto">
            My path from BCA graduation to becoming a DevOps & Cloud Engineer
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-hairline md:-translate-x-px" />

          {timeline.map((item, index) => {
            const Icon = item.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative mb-12 md:mb-16"
              >
                <div className="md:flex items-center">
                  {/* Content Card */}
                  <div
                    className={`md:w-1/2 ${
                      isEven 
                        ? "md:pr-12 md:text-right" 
                        : "md:order-last md:pl-12 md:text-left"
                    }`}
                  >
                    <div className="card ml-20 md:ml-0">
                      <span className="badge-primary mb-3 inline-block">{item.year}</span>
                      <h3 className="text-heading-sm mb-2">{item.title}</h3>
                      <p className="text-body-sm text-ink-muted">{item.description}</p>
                    </div>
                  </div>

                  {/* Icon Marker */}
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-primary border-4 border-canvas flex items-center justify-center z-10 shadow-glow">
                    <Icon className="w-7 h-7 text-ink" />
                  </div>

                  {/* Spacer */}
                  <div className="md:w-1/2" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
