import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, FileText } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className="nav-shell"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {/* Brand Wordmark */}
      <a href="#top" className="wordmark flex items-center gap-3" aria-label="Avirup Mondal home">
        <span className="font-extrabold text-[22px] tracking-[-0.1em] text-portfolio-primary">
          A<span className="text-portfolio-sub">.</span>
        </span>
        <span className="font-mono text-[9px] tracking-mono-wide text-portfolio-secondary uppercase hidden sm:inline-block">
          AVIRUP MONDAL
        </span>
      </a>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 text-[11px] text-portfolio-sub" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="transition-colors duration-200 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Action Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <a
          href="/Avirup_Mondal_Resume.pdf"
          download="Avirup_Mondal_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="h-[37px] px-3.5 border border-white/10 rounded-[7px] flex items-center gap-2 text-[11px] text-portfolio-sub hover:text-white transition-colors"
        >
          <FileText size={13} />
          <span>Resume</span>
        </a>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.035 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="h-[37px] px-3.5 bg-portfolio-btn text-portfolio-btn-dark rounded-[7px] flex items-center gap-2 text-[11px] font-bold shadow-sm"
        >
          <span>Contact Me</span>
          <ArrowUpRight size={13} />
        </motion.a>
      </div>

      {/* Mobile Hamburger Toggle */}
      <button
        type="button"
        className="md:hidden text-portfolio-primary p-2 focus:outline-none"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%+8px)] left-0 right-0 p-3 rounded-xl border border-white/10 bg-[#0c0c0f] shadow-2xl flex flex-col gap-1.5 md:hidden z-50"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3.5 py-2.5 rounded-lg text-xs text-[#b4b4bc] hover:bg-white/[0.05] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="h-[1px] bg-line my-1" />
            <a
              href="/Avirup_Mondal_Resume.pdf"
              download="Avirup_Mondal_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-xs text-portfolio-secondary flex items-center justify-between hover:bg-white/[0.05]"
            >
              <span>Download Resume</span>
              <FileText size={14} />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-xs font-bold bg-portfolio-btn text-portfolio-btn-dark flex items-center justify-between"
            >
              <span>Contact Me</span>
              <ArrowUpRight size={14} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
