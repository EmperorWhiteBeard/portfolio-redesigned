"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "THROW CI/CD Pipeline",
    description: "Enterprise-grade CI/CD pipeline automating deployment from GitHub to AWS CloudFront with automated testing and zero-downtime deployments.",
    tags: ["AWS", "CodePipeline", "S3", "CloudFront"],
    github: "https://github.com/EmperorWhiteBeard/throw-cicd",
    highlights: ["Automated CI/CD", "S3 + CloudFront CDN", "IaC with CloudFormation", "Security scanning"],
  },
  {
    title: "Kubernetes Cluster Deployment",
    description: "Production-ready EKS cluster with auto-scaling, monitoring, and GitOps deployment workflows using ArgoCD.",
    tags: ["EKS", "Helm", "ArgoCD", "Prometheus"],
    github: "https://github.com/EmperorWhiteBeard/k8s-cluster",
    highlights: ["Multi-node EKS", "GitOps with ArgoCD", "Monitoring stack", "Auto-scaling"],
  },
  {
    title: "Terraform AWS Infrastructure",
    description: "Modular Terraform codebase for provisioning scalable AWS infrastructure with proper security groups and IAM policies.",
    tags: ["Terraform", "AWS", "IaC", "VPC"],
    github: "https://github.com/EmperorWhiteBeard/terraform-aws",
    highlights: ["Modular design", "Multi-environment", "S3 state management", "Security best practices"],
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="section-nvidia bg-canvas">
      <div className="container-nvidia">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-caption text-nvidia uppercase tracking-widest mb-4 block">
            ~/projects
          </span>
          <h2 className="text-display-md mb-4">Featured Projects</h2>
          <p className="text-body-lg text-ink-muted max-w-2xl">
            Production-grade infrastructure and automation projects.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-nvidia group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Project number */}
                <div className="hidden lg:block font-mono text-caption text-ink-subtle pt-1">
                  0{index + 1}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-heading-lg group-hover:text-nvidia transition-colors duration-300">
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md bg-surface border border-hairline text-ink-muted hover:text-nvidia hover:border-nvidia/30 transition-all"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-body-md text-ink-muted mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="badge-dark">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {project.highlights.map((h) => (
                      <span key={h} className="text-body-sm text-ink-muted flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-nvidia" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}