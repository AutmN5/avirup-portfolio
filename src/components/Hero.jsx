import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Mail, Phone, MapPin } from "lucide-react";
import BackgroundCanvas from "./BackgroundCanvas";
import { LinkedInIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col justify-between pt-32 pb-12 section-pad overflow-hidden border-b border-line">
      {/* 3D Celestial / Systems Interactive Canvas */}
      <BackgroundCanvas />

      {/* Hero Meta Bar (Top HUD) */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-2 text-portfolio-muted font-mono text-[9px] tracking-mono-wider uppercase">
        <div className="flex items-center gap-2.5">
          <span className="status-dot animate-pulse" />
          <span className="text-portfolio-secondary">AVAILABLE FOR OPPORTUNITIES</span>
          <span className="text-[#3f3f46]">/</span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-portfolio-sub">
            <MapPin size={11} className="text-portfolio-muted" /> KOLKATA, INDIA
          </span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[#71717a]">
          <span>INDEX: 01 // INDEPENDENT BUILDER</span>
        </div>
      </div>

      {/* Main Hero Identity Copy */}
      <div className="relative z-10 my-auto py-12 max-w-[1050px]">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2.5 mb-7 text-portfolio-sub font-mono text-[9px] tracking-mono-widest uppercase"
        >
          <span className="w-[22px] h-[1px] bg-portfolio-muted inline-block" />
          <span>SOFTWARE ENGINEER &bull; DATA ANALYST &bull; TECHNOLOGY SPECIALIST</span>
        </motion.div>

        {/* Massive Display Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-[clamp(48px,8.2vw,110px)] font-medium leading-[0.98] tracking-display-tight text-portfolio-primary m-0"
        >
          Avirup Mondal<span className="text-portfolio-sub">.</span>
          <br />
          <span className="block mt-2.5 text-[0.46em] tracking-[-0.05em] text-portfolio-sub font-normal leading-[1.3]">
            Software Engineer | Data Analyst | Technology Specialist
          </span>
        </motion.h1>

        {/* Lead Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="max-w-[620px] text-[13px] sm:text-[14px] leading-[1.9] text-portfolio-body mt-7 mb-9"
        >
          Versatile technologist with strong computational foundations across full-stack engineering, 
          distributed systems, and predictive data analytics. Rapidly mastering emerging stacks to build 
          dependable, high-performance software architectures.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap items-center gap-4 sm:gap-6"
        >
          {/* View Projects CTA */}
          <a
            href="#projects"
            className="h-[46px] inline-flex items-center gap-6 px-5 bg-portfolio-btn text-portfolio-btn-dark rounded-[7px] text-[11px] font-bold transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            <span>View Projects</span>
            <ArrowDown size={14} />
          </a>

          {/* Contact Me CTA */}
          <a
            href="#contact"
            className="h-[46px] inline-flex items-center gap-3 px-5 rounded-[7px] border border-white/15 bg-white/[0.03] text-portfolio-primary text-[11px] font-medium hover:border-white/30 hover:bg-white/[0.06] transition-all"
          >
            <span>Contact Me</span>
            <ArrowUpRight size={14} className="text-portfolio-sub" />
          </a>

          {/* Download Resume CTA */}
          <a
            href="/Avirup_Mondal_Resume.pdf"
            download="Avirup_Mondal_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="h-[46px] inline-flex items-center gap-2.5 px-4 text-portfolio-sub text-[11px] font-medium hover:text-white transition-colors"
          >
            <Download size={14} />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Social & Contact Direct Links Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-wrap items-center gap-3 sm:gap-4 mt-9 pt-7 border-t border-white/[0.06]"
        >
          <a
            href="mailto:avirupmondal.official.02@gmail.com"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.02] text-portfolio-sub hover:text-white hover:border-white/20 text-[10px] font-mono transition-all max-w-full"
          >
            <Mail size={12} className="text-portfolio-muted shrink-0" />
            <span className="truncate">avirupmondal.official.02@gmail.com</span>
          </a>

          <a
            href="tel:+917003778087"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.02] text-portfolio-sub hover:text-white hover:border-white/20 text-[10px] font-mono transition-all"
          >
            <Phone size={12} className="text-portfolio-muted" />
            <span>+91-7003778087</span>
          </a>

          <a
            href="https://linkedin.com/in/avirup-mondal-"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.02] text-portfolio-sub hover:text-white hover:border-white/20 text-[10px] font-mono transition-all"
          >
            <LinkedInIcon size={12} className="text-portfolio-muted" />
            <span>LinkedIn</span>
            <ArrowUpRight size={11} className="text-portfolio-muted" />
          </a>
        </motion.div>
      </div>

      {/* Bottom HUD: Scroll Cue */}
      <div className="relative z-10 flex items-center justify-between text-portfolio-muted font-mono text-[9px] tracking-mono-widest">
        <div className="flex items-center gap-3">
          <span className="w-[34px] h-[1px] bg-[#52525b] inline-block animate-pulse" />
          <span>SCROLL TO EXPLORE</span>
        </div>
        <span className="text-[#52525b]">2026 EDITION</span>
      </div>
    </section>
  );
}
