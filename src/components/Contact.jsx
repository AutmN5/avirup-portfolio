import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  ArrowUpRight, 
  Send, 
  Check, 
  Copy, 
  CheckCircle2, 
  ArrowUp 
} from "lucide-react";
import { LinkedInIcon } from "./Icons";

const CURRENT_YEAR = new Date().getFullYear();

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate interactive submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("avirupmondal.official.02@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <footer id="contact" className="section-pad pt-28 pb-12 relative overflow-hidden">
      {/* Section Label */}
      <div className="flex items-center gap-3.5 text-portfolio-muted font-mono text-[9px] tracking-mono-wider mb-14">
        <span className="text-portfolio-secondary">05</span>
        <span className="w-7 h-[1px] bg-[#3f3f46] inline-block" />
        <span>INITIATE CONTACT</span>
      </div>

      {/* Hero CTA Statement */}
      <motion.div 
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="max-w-[850px] mx-auto text-center mb-16"
      >
        <p className="font-mono text-[9px] tracking-mono-widest text-portfolio-muted uppercase mb-3">
          HAVE A GOOD PROBLEM TO SOLVE?
        </p>
        <h2 className="text-[clamp(44px,7.5vw,96px)] leading-[0.98] tracking-display-tighter font-medium text-portfolio-primary m-0">
          Let’s make
          <br />
          <span className="text-portfolio-sub">something matter.</span>
        </h2>
        <p className="max-w-[460px] mx-auto text-[13px] leading-[1.8] text-portfolio-body mt-6">
          Open for software development roles, data analytics projects, and technology consulting.
        </p>
      </motion.div>

      {/* Main Grid: Direct Contact Channels & Interactive Form */}
      <div className="max-w-[1050px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 items-start mb-24">
        {/* Left Column: Direct Contact Cards */}
        <motion.div 
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="space-y-4"
        >
          <div className="pb-3 border-b border-line">
            <span className="font-mono text-[9px] tracking-mono-wider text-portfolio-muted uppercase">
              DIRECT CHANNELS
            </span>
          </div>

          {/* Email Card */}
          <div className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-white/[0.18] transition-all flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] text-portfolio-secondary flex items-center justify-center">
                <Mail size={18} />
              </div>
              <div>
                <p className="font-mono text-[8.5px] text-portfolio-muted uppercase m-0">EMAIL ADDRESS</p>
                <a
                  href="mailto:avirupmondal.official.02@gmail.com"
                  className="text-[13px] text-portfolio-primary hover:text-white transition-colors block mt-0.5"
                >
                  avirupmondal.official.02@gmail.com
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="p-2 rounded-md border border-white/10 text-portfolio-muted hover:text-white hover:border-white/20 transition-all text-xs"
              title="Copy email to clipboard"
            >
              {copiedEmail ? <Check size={14} className="text-[#a3e635]" /> : <Copy size={14} />}
            </button>
          </div>

          {/* Phone Card */}
          <a
            href="tel:+917003778087"
            className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-white/[0.18] transition-all flex items-center justify-between group block"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] text-portfolio-secondary flex items-center justify-center">
                <Phone size={18} />
              </div>
              <div>
                <p className="font-mono text-[8.5px] text-portfolio-muted uppercase m-0">DIRECT PHONE</p>
                <p className="text-[13px] text-portfolio-primary group-hover:text-white transition-colors mt-0.5 m-0">
                  +91-7003778087
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-portfolio-muted group-hover:text-white group-hover:border-white/30 transition-all">
              <ArrowUpRight size={14} />
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/avirup-mondal-"
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-white/[0.18] transition-all flex items-center justify-between group block"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] text-portfolio-secondary flex items-center justify-center">
                <LinkedInIcon size={18} />
              </div>
              <div>
                <p className="font-mono text-[8.5px] text-portfolio-muted uppercase m-0">PROFESSIONAL NETWORK</p>
                <p className="text-[13px] text-portfolio-primary group-hover:text-white transition-colors mt-0.5 m-0">
                  linkedin.com/in/avirup-mondal-
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-portfolio-muted group-hover:text-white group-hover:border-white/30 transition-all">
              <ArrowUpRight size={14} />
            </div>
          </a>
        </motion.div>

        {/* Right Column: Clean Interactive Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm"
        >
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-line">
            <span className="font-mono text-[9px] tracking-mono-wider text-portfolio-muted uppercase">
              TRANSMIT A MESSAGE
            </span>
            <span className="font-mono text-[9px] text-[#a3e635] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
              ONLINE
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[8.5px] uppercase tracking-mono-wider text-portfolio-muted mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ada Lovelace"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-white/[0.02] text-xs text-portfolio-primary placeholder:text-portfolio-muted/50 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-[8.5px] uppercase tracking-mono-wider text-portfolio-muted mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-white/[0.02] text-xs text-portfolio-primary placeholder:text-portfolio-muted/50 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[8.5px] uppercase tracking-mono-wider text-portfolio-muted mb-1.5">
                Subject
              </label>
              <input
                type="text"
                placeholder="Software Development Collaboration"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-white/[0.02] text-xs text-portfolio-primary placeholder:text-portfolio-muted/50 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            <div>
              <label className="block font-mono text-[8.5px] uppercase tracking-mono-wider text-portfolio-muted mb-1.5">
                Message Content
              </label>
              <textarea
                required
                rows={4}
                placeholder="Let's build something remarkable..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-white/[0.02] text-xs text-portfolio-primary placeholder:text-portfolio-muted/50 focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full h-11 bg-portfolio-btn text-portfolio-btn-dark rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-sm"
            >
              {isSubmitting ? (
                <span>Transmitting...</span>
              ) : submitted ? (
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} /> Message Received
                </span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={13} />
                </>
              )}
            </motion.button>

            <AnimatePresence>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="font-mono text-[10px] text-[#a3e635] text-center pt-1"
                >
                  Thank you! Your message has been logged. I will get back to you shortly.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="pt-8 border-t border-line flex flex-wrap items-center justify-between gap-4 font-mono text-[9px] text-portfolio-muted tracking-mono-wide">
        <div>
          <span>&copy; {CURRENT_YEAR} AVIRUP MONDAL</span>
          <span className="mx-2 text-[#3f3f46]">/</span>
          <span className="text-[#a1a1aa]">KOLKATA, INDIA</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:avirupmondal.official.02@gmail.com"
            className="hover:text-white transition-colors"
          >
            EMAIL
          </a>
          <a
            href="https://linkedin.com/in/avirup-mondal-"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="#top"
            className="flex items-center gap-1 hover:text-white transition-colors text-portfolio-secondary"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={11} />
          </a>
        </div>
      </div>
    </footer>
  );
}
