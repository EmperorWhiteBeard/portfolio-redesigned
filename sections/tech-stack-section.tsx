"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    category: "cloud",
    title: "Cloud & AWS",
    items: ["EC2", "S3", "Lambda", "IAM", "VPC", "CloudFormation", "Route53", "CloudFront"],
  },
  {
    category: "cicd",
    title: "CI/CD & DevOps",
    items: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD", "Terraform", "Ansible"],
  },
  {
    category: "containers",
    title: "Containers & Orchestration",
    items: ["Docker", "Kubernetes", "Helm", "EKS", "Container Registry", "Docker Compose"],
  },
  {
    category: "monitoring",
    title: "Monitoring & Observability",
    items: ["Prometheus", "Grafana", "CloudWatch", "ELK Stack", "Datadog"],
  },
  {
    category: "scripting",
    title: "Scripting & Languages",
    items: ["Bash", "Python", "YAML", "JSON", "Go", "HCL"],
  },
  {
    category: "tools",
    title: "Tools & Platforms",
    items: ["Linux", "Git", "Nginx", "MySQL", "PostgreSQL", "Redis"],
  },
]

export function TechStackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="section-nvidia bg-surface">
      <div className="container-nvidia">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-caption text-nvidia uppercase tracking-widest mb-4 block">
            ~/skills
          </span>
          <h2 className="text-display-md mb-4">Technical Arsenal</h2>
          <p className="text-body-lg text-ink-muted max-w-2xl">
            Tools and technologies I use daily to build, deploy, and monitor cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card-terminal"
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-hairline">
                <span className="text-nvidia font-mono text-body-sm">$</span>
                <span className="font-mono text-body-sm text-ink-secondary">{cat.title.toLowerCase().replace(/\s+/g, '-')}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="badge-nvidia">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}