/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#09090b",
        line: "rgba(255, 255, 255, 0.075)",
        surface: {
          DEFAULT: "rgba(255, 255, 255, 0.039)",
          hover: "rgba(255, 255, 255, 0.043)",
          border: "rgba(255, 255, 255, 0.07)",
          "border-hover": "rgba(255, 255, 255, 0.16)",
        },
        portfolio: {
          primary: "#f4f4f5",
          secondary: "#d4d4d8",
          sub: "#a1a1aa",
          body: "#85858e",
          "body-alt": "#82828c",
          muted: "#71717a",
          "contrast-dim": "#66666f",
          dim: "#52525b",
          status: "#a3e635",
          btn: "#e4e4e7",
          "btn-dark": "#09090b",
        },
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"DM Mono"', "monospace"],
      },
      letterSpacing: {
        "display-tighter": "-0.09em",
        "display-tight": "-0.085em",
        "heading-tight": "-0.075em",
        "heading-sub": "-0.045em",
        "mono-wide": "0.11em",
        "mono-wider": "0.13em",
        "mono-widest": "0.16em",
      },
      boxShadow: {
        nav: "0 12px 40px rgba(0, 0, 0, 0.25)",
        "status-glow": "0 0 12px rgba(163, 230, 53, 0.50)",
        "dot-active": "0 0 0 4px rgba(212, 212, 216, 0.07), 0 0 20px rgba(212, 212, 216, 0.40)",
        banner: "0 14px 50px rgba(0, 0, 0, 0.55)",
      },
      backdropBlur: {
        nav: "22px",
        banner: "24px",
      },
    },
  },
  plugins: [],
};
