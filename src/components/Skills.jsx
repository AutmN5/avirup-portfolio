import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  BarChart3, 
  FileSpreadsheet, 
  Cpu 
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      index: "01 / 07",
      title: "Programming Languages",
      icon: Code2,
      description: "Core algorithmic foundations and multi-paradigm system languages.",
      skills: ["Java", "Python", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
    },
    {
      index: "02 / 07",
      title: "Frontend & UI",
      icon: Layout,
      description: "State-driven interfaces, responsive designs, and mobile components.",
      skills: ["React.js", "Responsive Web Design", "State Management", "Bootstrap", "Flutterflow"],
    },
    {
      index: "03 / 07",
      title: "Backend & APIs",
      icon: Server,
      description: "Scalable server architectures, microservices, and cryptographic auth.",
      skills: ["Node.js", "Express.js", "Spring Boot", "RESTful APIs", "JWT Authentication", "Microservices"],
    },
    {
      index: "04 / 07",
      title: "Databases & Cloud",
      icon: Database,
      description: "Relational normalization, NoSQL document modeling, and cloud storage.",
      skills: ["MySQL", "MongoDB", "Firebase Firestore", "NoSQL Modeling", "Google Cloud Platform"],
    },
    {
      index: "05 / 07",
      title: "Data Analytics & Methods",
      icon: BarChart3,
      description: "Analytical pipelines, structured data querying, and operational trends.",
      skills: ["Data Cleaning", "Structured Querying (SQL)", "Trend Analysis", "Process Optimization"],
    },
    {
      index: "06 / 07",
      title: "Productivity & Office Tools",
      icon: FileSpreadsheet,
      description: "Executive documentation, multi-criteria modeling, and dataset filtering.",
      skills: [
        "Microsoft Excel (VLOOKUP, Pivot Tables, Formulas, Data Filtering)",
        "Microsoft Word",
        "PowerPoint",
      ],
    },
    {
      index: "07 / 07",
      title: "Core Competencies",
      icon: Cpu,
      description: "Software engineering methodologies, algorithmic rigor, and version control.",
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "SDLC",
        "Debugging",
        "Git",
      ],
    },
  ];

  return (
    <section id="skills" className="section-pad pt-28 pb-28 border-b border-line relative">
      {/* Section Label */}
      <div className="flex items-center gap-3.5 text-portfolio-muted font-mono text-[9px] tracking-mono-wider mb-14">
        <span className="text-portfolio-secondary">02</span>
        <span className="w-7 h-[1px] bg-[#3f3f46] inline-block" />
        <span>TECHNICAL TOOLING &amp; CAPABILITIES</span>
      </div>

      {/* Section Heading Row */}
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-14">
        <div>
          <p className="font-mono text-[9px] tracking-mono-widest text-portfolio-muted uppercase mb-3">
            TECHNICAL TOOLING
          </p>
          <h2 className="text-[clamp(36px,5vw,62px)] leading-[1.05] tracking-heading-tight font-medium text-portfolio-primary m-0">
            Engineered for <span className="text-portfolio-contrast-dim">performance &amp; scale.</span>
          </h2>
        </div>
        <p className="text-[11px] leading-[1.8] text-portfolio-muted max-w-[320px] m-0">
          From microservice design to data analytics pipelines.
          <br />
          The tooling changes shape; the precision remains.
        </p>
      </div>

      {/* Grid of Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, idx) => {
          const IconComponent = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4 }}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.08, 
                ease: [0.2, 0.8, 0.2, 1] 
              }}
              className="bento-tile p-6 rounded-xl border border-white/[0.07] bg-gradient-to-br from-white/[0.035] to-white/[0.006] hover:border-white/[0.18] flex flex-col justify-between"
            >
              <div>
                {/* Header: Index + Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[9px] tracking-mono-wide text-portfolio-muted">
                    {category.index}
                  </span>
                  <div className="w-[34px] height-[34px] p-2 rounded-lg border border-white/10 bg-white/[0.03] text-portfolio-secondary flex items-center justify-center">
                    <IconComponent size={16} />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-[19px] font-medium tracking-heading-sub text-portfolio-primary mb-2">
                  {category.title}
                </h3>
                <p className="text-[12px] leading-[1.7] text-portfolio-body mb-6">
                  {category.description}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05]">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-[4px] border border-white/[0.08] bg-white/[0.015] font-mono text-[8.5px] text-[#86868f] hover:text-portfolio-primary hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
