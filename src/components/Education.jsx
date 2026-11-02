import React from "react";
import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Education() {
  const educationItems = [
    {
      status: "IN PROGRESS",
      active: true,
      degree: "Master of Computer Applications (MCA)",
      field: "Computer Science",
      institution: "Techno India University, Kolkata, India",
      period: "Sep 2024 – Jul 2026",
      score: "CGPA: 7.9",
      notes: "Advanced distributed computing, modern software architectures, data mining, and algorithms.",
    },
    {
      status: "COMPLETED",
      active: false,
      degree: "Bachelor of Computer Applications (BCA)",
      field: "Computer Applications",
      institution: "Techno India Institute of Technology, Kolkata, India",
      period: "Sep 2021 – Jun 2024",
      score: "CGPA: 7.73",
      notes: "Core computer science fundamentals, OOP, database design, software engineering methodologies, and web engineering.",
    },
  ];

  const certifications = [
    {
      title: "Google AI/ML Virtual Internship",
      issuer: "Google Cloud Skills Boost",
      date: "Apr 2025",
      domain: "Machine Learning & AI Pipelines",
      icon: Sparkles,
      badge: "Google Cloud",
    },
    {
      title: "Google Cloud Computing Foundations",
      issuer: "Google Cloud Skills Boost",
      date: "Jun 2025",
      domain: "Cloud Infrastructure, Networking & Storage",
      icon: Award,
      badge: "Google Cloud",
    },
    {
      title: "Google Cloud Cybersecurity Certificate",
      issuer: "Google Cloud / Coursera",
      date: "Credentialed",
      domain: "Network Security & Access Management",
      icon: ShieldCheck,
      badge: "Security",
    },
    {
      title: "AngularJS Certification",
      issuer: "Technical Assessment",
      date: "Credentialed",
      domain: "Single Page Application Architecture",
      icon: Award,
      badge: "Frontend Architecture",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Security Assessment",
      date: "Credentialed",
      domain: "Threat Analysis & Enterprise Best Practices",
      icon: ShieldCheck,
      badge: "Infosec",
    },
  ];

  return (
    <section id="education" className="section-pad pt-28 pb-28 border-b border-line relative overflow-hidden">
      {/* Ambient Radial Core Glow */}
      <div
        className="absolute w-[80vw] h-[60vw] max-h-[700px] left-1/2 top-1/4 -translate-x-1/2 pointer-events-none opacity-50"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(103, 45, 167, 0.20), rgba(35, 90, 142, 0.09) 38%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Section Label */}
      <motion.div 
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center gap-3.5 text-portfolio-muted font-mono text-[9px] tracking-mono-wider mb-14"
      >
        <span className="text-portfolio-secondary">04</span>
        <span className="w-7 h-[1px] bg-[#3f3f46] inline-block" />
        <span>TRAJECTORY &amp; CREDENTIALS</span>
      </motion.div>

      {/* Centered Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative z-10 max-w-[780px] mx-auto text-center mb-16"
      >
        <Sparkles size={20} className="mx-auto text-portfolio-sub mb-4 opacity-80" />
        <p className="font-mono text-[9px] tracking-mono-widest text-portfolio-muted uppercase mb-3">
          ACADEMIC &amp; TECHNICAL TRAJECTORY
        </p>
        <h2 className="text-[clamp(36px,5.5vw,72px)] leading-[1.02] tracking-display-tighter font-medium text-portfolio-primary m-0">
          Rigorous computational study.
          <br />
          <span className="text-[#74747e]">Continuous technical mastery.</span>
        </h2>
        <p className="max-w-[500px] mx-auto text-[12px] leading-[1.9] text-portfolio-body mt-5">
          Balancing higher academic computer science degrees with specialized cloud computing, 
          artificial intelligence, and cybersecurity credentials.
        </p>
      </motion.div>

      {/* Education Timeline */}
      <div className="relative z-10 max-w-[850px] mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {educationItems.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.2, 0.8, 0.2, 1] }}
              className="p-7 rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm relative flex flex-col justify-between"
            >
              {/* Header status */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[8.5px] tracking-mono-wider px-2 py-0.5 rounded border border-white/10 bg-white/[0.02] text-portfolio-secondary">
                  {item.period}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${item.active ? "bg-[#a3e635] shadow-status-glow animate-pulse" : "bg-portfolio-muted"}`} />
                  <span className="font-mono text-[8.5px] tracking-mono-wide text-portfolio-muted">
                    {item.status}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="my-2">
                <div className="flex items-start gap-3 mb-2">
                  <GraduationCap size={18} className="text-portfolio-sub mt-1 shrink-0" />
                  <div>
                    <h3 className="text-[19px] font-medium tracking-heading-sub text-portfolio-primary m-0">
                      {item.degree}
                    </h3>
                    <p className="text-[12px] text-portfolio-secondary mt-1">
                      {item.field}
                    </p>
                  </div>
                </div>

                <p className="text-[12px] text-portfolio-sub mb-2">
                  {item.institution}
                </p>
                <div className="inline-block font-mono text-[10px] text-[#a3e635] px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 mb-3">
                  {item.score}
                </div>
                <p className="text-[12px] leading-[1.7] text-portfolio-body m-0">
                  {item.notes}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications Showcase */}
      <div className="relative z-10 max-w-[950px] mx-auto">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-line text-portfolio-muted font-mono text-[9px] tracking-mono-wider">
          <span>PROFESSIONAL CERTIFICATIONS</span>
          <span>05 VERIFIED CREDENTIALS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, idx) => {
            const IconComp = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.015] hover:border-white/[0.16] hover:bg-white/[0.03] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <IconComp size={14} className="text-portfolio-sub" />
                      <span className="font-mono text-[8px] tracking-mono-wider px-2 py-0.5 rounded border border-white/10 text-portfolio-secondary">
                        {cert.badge}
                      </span>
                    </div>
                    <span className="font-mono text-[8px] text-portfolio-muted">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="text-[15px] font-medium tracking-heading-sub text-portfolio-primary mb-1.5">
                    {cert.title}
                  </h4>
                  <p className="text-[11px] text-portfolio-sub mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-[11px] text-portfolio-body leading-relaxed m-0">
                    {cert.domain}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-portfolio-muted">
                  <span className="flex items-center gap-1.5 text-[#a3e635]">
                    <CheckCircle2 size={11} /> Verified
                  </span>
                  <span>Skills Boost</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
