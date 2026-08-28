"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ExternalLink } from "lucide-react"

const certifications = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "2024", color: "#FF9900" },
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", date: "2025", color: "#FF9900" },
  { name: "Cisco CCNA", issuer: "Cisco", date: "2024", color: "#049FD9" },
  { name: "CKA", issuer: "CNCF", date: "2025", color: "#326CE5" },
  { name: "Terraform Associate", issuer: "HashiCorp", date: "2025", color: "#7B42BC" },
  { name: "Docker Certified", issuer: "Docker Inc.", date: "2024", color: "#2496ED" },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="section-nvidia bg-surface">
      <div className="container-nvidia">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-caption text-nvidia uppercase tracking-widest mb-4 block">
            ~/certs
          </span>
          <h2 className="text-display-md mb-4">Certifications</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card-nvidia group"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center"
                  style={{ backgroundColor: `${cert.color}15` }}
                >
                  <Award className="w-5 h-5" style={{ color: cert.color }} />
                </div>
                <span className="font-mono text-caption text-ink-subtle">{cert.date}</span>
              </div>

              <h3 className="text-heading-sm mb-1 group-hover:text-nvidia transition-colors">
                {cert.name}
              </h3>
              <p className="text-body-sm text-ink-muted mb-4">{cert.issuer}</p>

              <div className="flex items-center gap-2 text-body-sm text-ink-subtle group-hover:text-nvidia transition-colors">
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="font-mono">Verify</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}