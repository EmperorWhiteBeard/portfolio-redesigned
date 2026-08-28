"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Download, ExternalLink } from "lucide-react"

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    color: "#FF9900",
    verify: "#",
    pdf: "#"
  },
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2025",
    color: "#FF9900",
    verify: "#",
    pdf: "#"
  },
  {
    name: "Cisco Certified Network Associate",
    issuer: "Cisco",
    date: "2024",
    color: "#049FD9",
    verify: "#",
    pdf: "#"
  },
  {
    name: "Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2025",
    color: "#326CE5",
    verify: "#",
    pdf: "#"
  },
  {
    name: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    date: "2025",
    color: "#7B42BC",
    verify: "#",
    pdf: "#"
  },
  {
    name: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "2024",
    color: "#2496ED",
    verify: "#",
    pdf: "#"
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="section bg-surface-1/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-md mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-body-lg text-ink-muted max-w-3xl mx-auto">
            Industry-recognized certifications validating cloud, DevOps, and infrastructure expertise
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${cert.color}20` }}
                >
                  <Award className="w-7 h-7" style={{ color: cert.color }} />
                </div>
                <span className="badge text-caption">{cert.date}</span>
              </div>

              <h3 className="text-heading-sm mb-2 group-hover:text-primary transition-colors">
                {cert.name}
              </h3>
              <p className="text-body-sm text-ink-muted mb-6">{cert.issuer}</p>

              <div className="flex gap-3">
                <a
                  href={cert.pdf}
                  className="inline-flex items-center gap-1.5 text-body-sm text-primary hover:text-primary-hover transition-colors"
                >
                  <Download className="w-4 h-4" />
                  PDF
                </a>
                <a
                  href={cert.verify}
                  className="inline-flex items-center gap-1.5 text-body-sm text-ink-muted hover:text-ink transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
