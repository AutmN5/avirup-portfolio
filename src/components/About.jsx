import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-pad pt-28 pb-28 border-b border-line relative overflow-hidden">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3.5 text-portfolio-muted font-mono text-[9px] tracking-mono-wider mb-14"
      >
        <span className="text-portfolio-secondary">01</span>
        <span className="w-7 h-[1px] bg-[#3f3f46] inline-block" />
        <span>ABOUT &amp; COMPUTATIONAL FOUNDATIONS</span>
      </motion.div>

      {/* 2-Column Asymmetric Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-[8vw] items-end">
        {/* Left Column: Display H2 */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 className="text-[clamp(36px,5.2vw,66px)] leading-[1.08] tracking-heading-tight font-medium text-portfolio-primary m-0">
            Computational foundations.
            <br />
            <span className="text-portfolio-contrast-dim">
              Driven by deep curiosity.
            </span>
          </h2>
        </motion.div>

        {/* Right Column: Editorial Summary */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-[500px]"
        >
          <p className="text-[13px] leading-[1.95] text-portfolio-body-alt mb-4">
            Versatile, technology-driven professional with strong computational foundations and hands-on experience across software development, data analytics, and IT operations.
          </p>
          <p className="text-[13px] leading-[1.95] text-portfolio-body-alt mb-4">
            Proficient in <span className="text-portfolio-primary font-medium">Java, Python, JavaScript, React.js, Node.js, Spring Boot</span>, and database systems (<span className="text-portfolio-primary font-medium">SQL, MySQL, MongoDB</span>). Advanced proficiency in Microsoft Office tools (Excel, Word, PowerPoint) for data querying, analysis, and executive technical documentation.
          </p>
          <p className="text-[13px] leading-[1.95] text-portfolio-body-alt mb-6">
            Driven by deep curiosity for emerging software and computing systems, with a demonstrated ability to rapidly master new technologies, troubleshoot complex architectures, and deliver clean, scalable business solutions.
          </p>

          <a
            href="#education"
            className="inline-flex items-center gap-2 text-[11px] text-portfolio-secondary hover:text-white transition-colors"
          >
            <span>Review academic &amp; technical trajectory</span>
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>

      {/* Stat / Metric Bar */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 mt-20 border-t border-line"
      >
        <div className="flex flex-col gap-2">
          <strong className="text-[34px] font-medium tracking-display-tight text-portfolio-primary leading-none">
            7.9<span className="text-[20px] text-[#8a8a94] font-normal"> CGPA</span>
          </strong>
          <small className="font-mono text-[8px] tracking-mono-wide text-portfolio-muted uppercase">
            MCA IN COMPUTER SCIENCE
          </small>
        </div>

        <div className="flex flex-col gap-2">
          <strong className="text-[34px] font-medium tracking-display-tight text-portfolio-primary leading-none">
            07<span className="text-[20px] text-[#8a8a94] font-normal"> DOMAINS</span>
          </strong>
          <small className="font-mono text-[8px] tracking-mono-wide text-portfolio-muted uppercase">
            FULL-STACK &amp; DATA SYSTEMS
          </small>
        </div>

        <div className="flex flex-col gap-2">
          <strong className="text-[34px] font-medium tracking-display-tight text-portfolio-primary leading-none">
            05<span className="text-[20px] text-[#8a8a94] font-normal">+</span>
          </strong>
          <small className="font-mono text-[8px] tracking-mono-wide text-portfolio-muted uppercase">
            GOOGLE &amp; INDUSTRY CERTS
          </small>
        </div>

        <div className="flex flex-col justify-center text-portfolio-muted font-mono text-[9px] tracking-mono-wide leading-[1.8]">
          <span className="text-portfolio-secondary font-medium">CURIOUS BY DEFAULT.</span>
          <span>PRECISE BY DESIGN.</span>
        </div>
      </motion.div>
    </section>
  );
}
