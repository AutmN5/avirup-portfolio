import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag, Car, Layers } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "ecommerce",
      index: "01 / 03",
      year: "2024",
      title: "E-Commerce Web Platform",
      lead: "End-to-end full-stack retail system with optimized query latency and secure session auth.",
      icon: ShoppingBag,
      tags: ["React.js", "Spring Boot", "MySQL", "RESTful APIs", "Git", "Hibernate"],
      metric: "25% query latency reduction",
      highlights: [
        "Designed and deployed an end-to-end e-commerce application with responsive navigation, dynamic product search, and checkout.",
        "Developed secure RESTful endpoints in Spring Boot with Hibernate ORM, ensuring high-reliability CRUD data transactions.",
        "Structured and indexed MySQL database tables to optimize search queries, decreasing query latency by 25%.",
        "Handled state management and implemented secure token-based session authentication for protected customer workflows.",
      ],
    },
    {
      id: "smart-parking",
      index: "02 / 03",
      year: "2025",
      title: "Smart Parking Assistant App",
      lead: "Interactive mobile cloud solution for real-time slot allocation and booking synchronization.",
      icon: Car,
      tags: ["Flutterflow", "Firebase Firestore", "NoSQL", "Google Cloud"],
      metric: "Real-time sync engine",
      highlights: [
        "Built an interactive mobile prototype to streamline parking slot allocation and reduce booking friction for users.",
        "Integrated Firebase Cloud Firestore to support real-time data synchronization between slot updates and mobile clients.",
        "Designed intuitive UI flows and stateful components, validating functional flows through simulated user benchmarks.",
      ],
    },
    {
      id: "mainframe",
      index: "03 / 03",
      year: "2026",
      title: "The Mainframe (Full-Stack Blog Engine)",
      lead: "Cryptographically authenticated content publishing platform with role-based access control.",
      icon: Layers,
      tags: ["Node.js", "Express.js", "MongoDB", "JWT", "bcryptjs", "EJS"],
      metric: "RBAC & cryptographic security",
      highlights: [
        "Engineered a full-stack content publishing platform with secure CRUD operations and responsive front-end views.",
        "Built an Admin Override Panel with Role-Based Access Control (RBAC) to moderate content and monitor user activity.",
        "Enforced cryptographic authentication using JSON Web Tokens (JWT) and salted bcrypt hashing for protected endpoints.",
        "Optimized MongoDB NoSQL schemas to structure comments, post metadata, and author profiles efficiently.",
      ],
    },
  ];

  return (
    <section id="projects" className="section-pad pt-28 pb-28 border-b border-line relative">
      {/* Section Label */}
      <div className="flex items-center gap-3.5 text-portfolio-muted font-mono text-[9px] tracking-mono-wider mb-14">
        <span className="text-portfolio-secondary">03</span>
        <span className="w-7 h-[1px] bg-[#3f3f46] inline-block" />
        <span>FEATURED TECHNICAL PROJECTS</span>
      </div>

      {/* Section Heading Row */}
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-14">
        <div>
          <p className="font-mono text-[9px] tracking-mono-widest text-portfolio-muted uppercase mb-3">
            SYSTEMS &amp; ARCHITECTURES
          </p>
          <h2 className="text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-heading-tight font-medium text-portfolio-primary m-0">
            Where code meets <span className="text-portfolio-contrast-dim">systems thinking.</span>
          </h2>
        </div>
        <p className="text-[11px] leading-[1.8] text-portfolio-muted max-w-[340px] m-0">
          Production applications engineered with strong database normalization, scalable API endpoints, and clean UX.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-16">
        {/* Project 1: Large Span (7 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="lg:col-span-7"
        >
          <a
            href={`#${projects[0].id}`}
            className="bento-tile min-h-[320px] p-7 rounded-xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-white/[0.008] hover:border-white/[0.2] flex flex-col justify-between group transition-all"
          >
            {/* Top row */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] tracking-mono-wide text-portfolio-muted">
                  {projects[0].index}
                </span>
                <span className="px-2 py-0.5 rounded border border-white/10 bg-white/[0.02] font-mono text-[8px] text-portfolio-secondary">
                  {projects[0].year}
                </span>
              </div>
              <div className="w-[34px] h-[34px] rounded-lg border border-white/10 bg-white/[0.03] text-portfolio-secondary flex items-center justify-center">
                <ShoppingBag size={16} />
              </div>
            </div>

            {/* Orbit Graphic Background */}
            <div className="absolute right-6 top-8 w-44 h-44 opacity-20 pointer-events-none" aria-hidden="true">
              <span className="absolute inset-0 border border-white/40 rounded-full transform -rotate-12 scale-y-50" />
              <span className="absolute inset-4 border border-white/30 rounded-full transform rotate-45 scale-y-50" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[10px] text-white/50">
                01
              </span>
            </div>

            {/* Middle copy */}
            <div className="z-10 my-auto py-4">
              <h3 className="text-[23px] font-medium tracking-heading-sub text-portfolio-primary mb-2">
                {projects[0].title}
              </h3>
              <p className="text-[12px] leading-[1.8] text-portfolio-body max-w-[420px] mb-3">
                {projects[0].lead}
              </p>
              <div className="inline-flex items-center gap-2 text-[10px] font-mono text-[#a3e635]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
                <span>{projects[0].metric}</span>
              </div>
            </div>

            {/* Bottom tags & arrow */}
            <div className="flex items-center justify-between gap-4 z-10 pt-4 border-t border-white/[0.05]">
              <div className="flex flex-wrap gap-1.5">
                {projects[0].tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-[4px] border border-white/[0.08] bg-white/[0.02] font-mono text-[8px] text-[#86868f]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="w-[30px] h-[30px] rounded-full border border-white/15 text-portfolio-sub flex items-center justify-center group-hover:bg-[#e4e4e7] group-hover:text-[#09090b] group-hover:rotate-45 transition-all">
                <ArrowUpRight size={15} />
              </div>
            </div>
          </a>
        </motion.div>

        {/* Project 2: Medium Span (5 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="lg:col-span-5"
        >
          <a
            href={`#${projects[1].id}`}
            className="bento-tile min-h-[320px] p-7 rounded-xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-white/[0.008] hover:border-white/[0.2] flex flex-col justify-between group transition-all"
          >
            {/* Top row */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] tracking-mono-wide text-portfolio-muted">
                  {projects[1].index}
                </span>
                <span className="px-2 py-0.5 rounded border border-white/10 bg-white/[0.02] font-mono text-[8px] text-portfolio-secondary">
                  {projects[1].year}
                </span>
              </div>
              <div className="w-[34px] h-[34px] rounded-lg border border-white/10 bg-white/[0.03] text-portfolio-secondary flex items-center justify-center">
                <Car size={16} />
              </div>
            </div>

            {/* Orbit Graphic Background */}
            <div className="absolute right-4 top-6 w-36 h-36 opacity-20 pointer-events-none" aria-hidden="true">
              <span className="absolute inset-0 border border-white/40 rounded-full transform rotate-30 scale-y-45" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[10px] text-white/50">
                02
              </span>
            </div>

            {/* Middle copy */}
            <div className="z-10 my-auto py-4">
              <h3 className="text-[21px] font-medium tracking-heading-sub text-portfolio-primary mb-2">
                {projects[1].title}
              </h3>
              <p className="text-[12px] leading-[1.8] text-portfolio-body mb-3">
                {projects[1].lead}
              </p>
              <div className="inline-flex items-center gap-2 text-[10px] font-mono text-[#a3e635]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
                <span>{projects[1].metric}</span>
              </div>
            </div>

            {/* Bottom tags & arrow */}
            <div className="flex items-center justify-between gap-4 z-10 pt-4 border-t border-white/[0.05]">
              <div className="flex flex-wrap gap-1.5">
                {projects[1].tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-[4px] border border-white/[0.08] bg-white/[0.02] font-mono text-[8px] text-[#86868f]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="w-[30px] h-[30px] rounded-full border border-white/15 text-portfolio-sub flex items-center justify-center group-hover:bg-[#e4e4e7] group-hover:text-[#09090b] group-hover:rotate-45 transition-all">
                <ArrowUpRight size={15} />
              </div>
            </div>
          </a>
        </motion.div>

        {/* Project 3: Full Width / 12 cols */}
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
          className="lg:col-span-12"
        >
          <a
            href={`#${projects[2].id}`}
            className="bento-tile min-h-[260px] p-7 rounded-xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-white/[0.008] hover:border-white/[0.2] flex flex-col justify-between group transition-all"
          >
            {/* Top row */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] tracking-mono-wide text-portfolio-muted">
                  {projects[2].index}
                </span>
                <span className="px-2 py-0.5 rounded border border-white/10 bg-white/[0.02] font-mono text-[8px] text-portfolio-secondary">
                  {projects[2].year}
                </span>
              </div>
              <div className="w-[34px] h-[34px] rounded-lg border border-white/10 bg-white/[0.03] text-portfolio-secondary flex items-center justify-center">
                <Layers size={16} />
              </div>
            </div>

            {/* Middle copy */}
            <div className="z-10 my-auto py-3">
              <h3 className="text-[22px] font-medium tracking-heading-sub text-portfolio-primary mb-2">
                {projects[2].title}
              </h3>
              <p className="text-[12px] leading-[1.8] text-portfolio-body max-w-[680px] mb-3">
                {projects[2].lead}
              </p>
              <div className="inline-flex items-center gap-2 text-[10px] font-mono text-[#a3e635]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
                <span>{projects[2].metric}</span>
              </div>
            </div>

            {/* Bottom tags & arrow */}
            <div className="flex items-center justify-between gap-4 z-10 pt-4 border-t border-white/[0.05]">
              <div className="flex flex-wrap gap-1.5">
                {projects[2].tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-[4px] border border-white/[0.08] bg-white/[0.02] font-mono text-[8px] text-[#86868f]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="w-[30px] h-[30px] rounded-full border border-white/15 text-portfolio-sub flex items-center justify-center group-hover:bg-[#e4e4e7] group-hover:text-[#09090b] group-hover:rotate-45 transition-all">
                <ArrowUpRight size={15} />
              </div>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Deep-Dive Hub Rows (Arkajeet-Style Detailed Breakdown) */}
      <div className="pt-8">
        <div className="flex items-center justify-between pb-6 mb-2 border-b border-line text-portfolio-muted font-mono text-[9px] tracking-mono-wider">
          <span>DEEP DIVE // ARCHITECTURAL BREAKDOWNS</span>
          <span>03 CASE STUDIES</span>
        </div>

        {projects.map((project, idx) => (
          <motion.article
            key={project.id}
            id={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-[0.5fr_1.6fr_0.9fr] gap-6 lg:gap-8 items-start py-9 border-b border-line"
          >
            {/* Column 1: Index & Year */}
            <div className="font-mono text-[9px] tracking-mono-wide text-portfolio-muted flex lg:flex-col gap-3">
              <span>{project.index}</span>
              <span className="text-portfolio-secondary">{project.year}</span>
            </div>

            {/* Column 2: Title, Description & Technical Highlights */}
            <div>
              <h3 className="text-[20px] font-medium tracking-heading-sub text-portfolio-primary mb-2">
                {project.title}
              </h3>
              <p className="text-[12px] leading-[1.7] text-portfolio-secondary mb-4">
                {project.lead}
              </p>
              
              <ul className="space-y-2 mt-3 text-[12px] text-portfolio-body leading-[1.8] list-none p-0">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Tech Tags Cloud */}
            <div className="flex flex-wrap gap-1.5 lg:justify-end">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1.5 rounded-[4px] border border-white/[0.08] bg-white/[0.015] font-mono text-[8px] text-[#86868f]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
