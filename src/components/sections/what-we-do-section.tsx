"use client";

import { Cloud, Code2, Container, Database, GitBranch, Brain, DollarSign } from 'lucide-react';

const technologies = [
  {
    icon: Cloud,
    name: 'Cloud',
    description: 'Master cloud platforms like AWS, Azure, and GCP. Learn cloud architecture, serverless computing, and cloud-native development practices.'
  },
  {
    icon: DollarSign,
    name: 'FinOps',
    description: 'Master cloud financial management, cost optimization, and resource allocation. Learn to balance performance and cost in cloud environments.'
  },
  {
    icon: Code2,
    name: 'Development',
    description: 'Modern web development with React, Next.js, and TypeScript. Build scalable, performant applications with best practices.'
  },
  {
    icon: GitBranch,
    name: 'DevOps',
    description: 'Master CI/CD pipelines, infrastructure automation, and DevOps tools like Docker, Jenkins, and Terraform for efficient development.'
  },
  {
    icon: Brain,
    name: 'Agentic AI',
    description: 'Explore the future of AI with autonomous agents, LLMs, and AI-powered development tools. Learn to build and integrate AI systems.'
  },
  {
    icon: Database,
    name: 'Data',
    description: 'Explore database technologies, data modeling, and data management strategies for modern applications and analytics.'
  }
];

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="py-32 bg-background/50">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What We Do
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Techsentinals are for developers who are interested in new age developer technology.
            We focus on cutting-edge technologies that shape the future of software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group p-6 rounded-lg border border-border/40 bg-background/50 hover:bg-background/80 transition-all duration-300 hover:shadow-[0_0_15px_rgba(126,100,237,0.3)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-kubePurple/10 group-hover:bg-kubePurple/20 transition-colors">
                  <tech.icon className="w-6 h-6 text-kubePurple" />
                </div>
                <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
              </div>
              <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 