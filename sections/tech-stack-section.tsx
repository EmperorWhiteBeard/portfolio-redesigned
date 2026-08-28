"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  Cloud,
  GitBranch,
  Container,
  Code,
  Activity,
  Terminal,
} from "lucide-react"

const skills = {
  cloud: {
    title: "Cloud & AWS",
    icon: Cloud,
    items: [
      { name: "AWS EC2, S3, Lambda", level: 85 },
      { name: "AWS IAM, CloudFormation", level: 80 },
      { name: "AWS VPC, Route53, CloudFront", level: 75 },
      { name: "Serverless Architecture", level: 70 },
    ],
  },
  cicd: {
    title: "CI/CD & DevOps",
    icon: GitBranch,
    items: [
      { name: "Jenkins, GitHub Actions", level: 90 },
      { name: "GitLab CI, CircleCI", level: 80 },
      { name: "ArgoCD, Flux", level: 70 },
      { name: "Terraform, CloudFormation", level: 85 },
    ],
  },
  containers: {
    title: "Containers & Orchestration",
    icon: Container,
    items: [
      { name: "Docker, Docker Compose", level: 90 },
      { name: "Kubernetes (K8s)", level: 75 },
      { name: "Helm Charts", level: 70 },
      { name: "Container Registry", level: 80 },
    ],
  },
  iac: {
    title: "Infrastructure as Code",
    icon: Code,
    items: [
      { name: "Terraform", level: 85 },
      { name: "Ansible", level: 75 },
      { name: "CloudFormation", level: 70 },
      { name: "Pulumi", level: 60 },
    ],
  },
  monitoring: {
    title: "Monitoring & Observability",
    icon: Activity,
    items: [
      { name: "Prometheus, Grafana", level: 80 },
      { name: "ELK Stack", level: 75 },
      { name: "CloudWatch, X-Ray", level: 80 },
      { name: "Datadog, New Relic", level: 65 },
    ],
  },
  scripting: {
    title: "Scripting & Languages",
    icon: Terminal,
    items: [
      { name: "Bash/Shell Scripting", level: 90 },
      { name: "Python", level: 80 },
      { name: "YAML, JSON", level: 95 },
      { name: "Go (Basic)", level: 50 },
    ],
  },
}

export function TechStackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="section bg-surface-1/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-md mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-body-lg text-ink-muted max-w-3xl mx-auto">
            Expertise across cloud platforms, DevOps tools, containers, infrastructure automation, and monitoring
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([key, category], index) => {
            const Icon = category.icon
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
                onMouseEnter={() => setHoveredSkill(key)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-heading-sm">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={item.name}>
                      <div className="flex justify-between text-body-sm mb-2">
                        <span className="text-ink-secondary">{item.name}</span>
                        <span className="text-primary font-mono font-medium">{item.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${item.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: index * 0.1 + itemIndex * 0.1,
                            ease: "easeOut" 
                          }}
                          className="skill-bar-fill"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-heading-sm mb-6 text-ink-muted">Also Familiar With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git", "GitHub", "GitLab", "Linux", "Ubuntu", "CentOS",
              "Nginx", "Apache", "MySQL", "PostgreSQL", "Redis", "MongoDB",
              "Postman", "Swagger", "VS Code", "Vim", "Slack", "Jira"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                className="badge"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
