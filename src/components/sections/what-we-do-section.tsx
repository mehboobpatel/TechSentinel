"use client";

import { Cloud, Code2, Container, Database, GitBranch, Brain, DollarSign, Zap } from 'lucide-react';

const technologies = [
  {
    icon: Cloud,
    name: 'Cloud',
    description: `Learn how AWS, GCP, and Azure are used in real projects. Not just console walkthroughs, but how companies actually use them.`
  },
  {
    icon: Brain,
    name: 'Generative AI & LLMs',
    description: `How do tools like ChatGPT work under the hood? What's RAG? How do you build with open-source models? We get into it.`  },
  {
    icon: Code2,
    name: 'Full Stack Development',
    description: `Frontend, backend, APIs, databases — how it all connects. We host live demos, not just slides.`
  },
  {
    icon: GitBranch,
    name: 'DevOps',
    description: `Understand why CI/CD, Docker, and GitHub Actions are more than just buzzwords. We show you how teams automate and deploy daily.`
  },
  {
    icon: Zap,
    name: 'AI/ML',
    description: `Basics to real use-cases. What's an ML model? How are companies using GenAI? We break it down in a way that sticks.`
    },
  {
    icon: Container,
    name: 'Kubernetes & Infra',
    description: `If you've heard of k8s but never touched it, we'll get you started.`
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