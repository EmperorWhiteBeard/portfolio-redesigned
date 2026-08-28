"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"

const projects = [
  {
    title: "THROW CI/CD Pipeline",
    description: "Enterprise-grade CI/CD pipeline automating deployment from GitHub to AWS CloudFront. Features automated testing, security scanning, and zero-downtime deployments.",
    tags: ["AWS", "CodePipeline", "CodeBuild", "S3", "CloudFront", "GitHub"],
    github: "https://github.com/EmperorWhiteBeard/throw-cicd",
    live: "#",
    image: "/project-1.jpg",
    highlights: [
      "Automated CI/CD with AWS CodePipeline",
      "S3 static hosting with CloudFront CDN",
      "Infrastructure as Code with CloudFormation",
      "Automated security scanning"
    ]
  },
  {
    title: "Kubernetes Cluster Deployment",
    description: "Production-ready Kubernetes cluster on AWS with auto-scaling, monitoring, and GitOps deployment workflows using ArgoCD.",
    tags: ["Kubernetes", "AWS EKS", "Helm", "ArgoCD", "Prometheus", "Grafana"],
    github: "https://github.com/EmperorWhiteBeard/k8s-cluster",
    live: "#",
    image: "/project-2.jpg",
    highlights: [
      "Multi-node EKS cluster setup",
      "GitOps with ArgoCD",
      "Complete monitoring stack",
      "Auto-scaling and load balancing"
    ]
  },
  {
    title: "Terraform AWS Infrastructure",
    description: "Modular Terraform codebase for provisioning scalable AWS infrastructure including VPC, EC2, RDS, and S3 with proper security groups and IAM policies.",
    tags: ["Terraform", "AWS", "IaC", "VPC", "EC2", "RDS"],
    github: "https://github.com/EmperorWhiteBeard/terraform-aws",
    live: "#",
    image: "/project-3.jpg",
    highlights: [
      "Modular Terraform modules",
      "Multi-environment support",
      "State management with S3",
      "Automated security best practices"
    ]
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="section bg-canvas">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-md mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-body-lg text-ink-muted max-w-3xl mx-auto">
            Production-grade infrastructure and automation projects showcasing real-world DevOps solutions
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="card group"
            >
              <div className="grid lg:grid-cols-5 gap-8">
                {/* Project Image */}
                <div className="lg:col-span-2">
                  <div className="relative aspect-video bg-surface-2 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-primary opacity-10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-16 h-16 text-ink-subtle" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="lg:col-span-3">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-heading-lg group-hover:text-gradient transition-colors">
                      {project.title}
                    </h3>
                    <span className="badge-primary">Featured</span>
                  </div>

                  <p className="text-body-md text-ink-muted mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="badge">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mb-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      View Code
                    </a>
                    <a
                      href={project.live}
                      className="btn-ghost inline-flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>

                  <button
                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                    className="text-body-sm text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-2"
                  >
                    {expandedProject === index ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        Hide Details
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        Show Details
                      </>
                    )}
                  </button>

                  {expandedProject === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-hairline"
                    >
                      <h4 className="text-heading-sm mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-body-sm text-ink-muted flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
