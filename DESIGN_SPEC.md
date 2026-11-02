# Design Specification: Arkajeet Mukherjee Portfolio Aesthetic

> **Target Site Analyzed:** [https://arkajeetm.vercel.app/](https://arkajeetm.vercel.app/)  
> **Aesthetic Philosophy:** Dark obsidian luxury minimalism, technical editorial precision, aerospace/systems engineering HUD elegance, spatial typography, and high-performance micro-interactions.

---

## 1. Color Palette & Token System

### 1.1 Base Background Colors
- **App Canvas (`--bg`)**: `#09090b` (Deep obsidian zinc black, pitch dark base)
- **Floating Nav Shell**: `rgba(9, 9, 11, 0.68)` (`#09090bad`) with `backdrop-filter: blur(22px)`
- **Mobile Navigation Drawer**: `rgba(9, 9, 11, 0.94)` (`#09090bf0`) with `backdrop-filter: blur(22px)`
- **Floating Cookie / Notification Banner**: `rgba(15, 15, 18, 0.94)` (`#0f0f12f0`) with `backdrop-filter: blur(24px)`
- **Bento Card Default**: `linear-gradient(135deg, rgba(255, 255, 255, 0.039) 0%, rgba(255, 255, 255, 0.008) 65%)`
- **Bento Card Hover**: `linear-gradient(135deg, rgba(255, 255, 255, 0.043) 0%, rgba(255, 255, 255, 0.008) 70%)`
- **Selection Highlight**: `background: #d4d4d8`, `color: #09090b`

### 1.2 Text Hierarchy & Contrast
- **Primary Text (`text-primary`)**: `#f4f4f5` (Zinc 100 — highest contrast headings, active titles, high-priority labels)
- **Secondary Highlight (`text-secondary`)**: `#d4d4d8` (Zinc 300 — wordmark name, lead quotes, active trajectory stops, section numbers)
- **Subheadings & Icons (`text-muted-foreground`)**: `#a1a1aa` (Zinc 400 — subtitle spans, wordmark dot, secondary links, icon strokes)
- **Body & Paragraphs (`text-body`)**: `#85858e` / `#82828c` (Refined technical neutral gray — description copy, 1.9+ line-height)
- **Low-contrast Contrast Spans (`text-contrast-dim`)**: `#66666f` / `#74747e` (Secondary clauses in large headings that recede into the dark canvas)
- **Technical Metadata / Monospace Labels (`text-mono-muted`)**: `#71717a` (Zinc 500 — eyebrows, status lines, trajectory meta)
- **Subtle Indices & Dividers (`text-dim`)**: `#52525b` (Zinc 600 — section indices, vertical side notes, future stops)

### 1.3 Accents & Status Indicators
- **Active / Online Status Dot**: `#a3e635` (Lime 400), with glowing halo `box-shadow: 0 0 12px rgba(163, 230, 53, 0.50)`
- **Interactive High-Contrast Buttons**: `#e4e4e7` (Zinc 200) background with `#09090b` foreground text
- **Active Trajectory Dot**: `#d4d4d8` with `box-shadow: 0 0 0 4px rgba(212, 212, 216, 0.07), 0 0 20px rgba(212, 212, 216, 0.40)`

### 1.4 Borders & Dividers
- **Global Divider (`--line`)**: `rgba(255, 255, 255, 0.075)` (`1px solid var(--line)`)
- **Card Default Border**: `rgba(255, 255, 255, 0.07)`
- **Card Hover Border**: `rgba(255, 255, 255, 0.16)` (`#ffffff28`)
- **Interactive Button / Pill Border**: `rgba(255, 255, 255, 0.10)` (`#ffffff1a`)
- **Tag Pill Border**: `rgba(255, 255, 255, 0.07)` (`#ffffff12`)
- **Section Label Rule**: `#3f3f46` (28px × 1px line)
- **Eyebrow Line**: `#71717a` (22px × 1px line)
- **Inactive Trajectory Track**: `#2b2b31`

### 1.5 Ambient Gradients & Atmospheric Lighting
- **Hero Ambient Nebula**:
  - `radial-gradient(ellipse 42% 62% at 75% 46%, rgba(92, 48, 150, 0.20), transparent 72%)` (deep violet)
  - `radial-gradient(ellipse 30% 43% at 82% 55%, rgba(28, 102, 156, 0.16), transparent 74%)` (deep celestial blue)
- **Hero Radial Vignette**:
  - `radial-gradient(ellipse 62% 72% at 50% 48%, transparent 38%, rgba(9, 9, 11, 0.34) 78%, #09090b 125%)`
- **Manifesto Ambient Core**:
  - `radial-gradient(ellipse at 50% 50%, rgba(103, 45, 167, 0.20), rgba(35, 90, 142, 0.09) 37%, transparent 70%)`
- **Trajectory Active Connector**:
  - `linear-gradient(90deg, #d4d4d8, #52525b)`
- **Trajectory Future Connector**:
  - `linear-gradient(90deg, #52525b, #2b2b31)`

---

## 2. Typography System

### 2.1 Font Families
- **Sans-Serif (Primary)**: `'Manrope', Inter, ui-sans-serif, system-ui, sans-serif`
  - Loaded weights: `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold), `800` (ExtraBold)
  - Used for: Brand mark, all display titles, section headings, body paragraphs, interactive buttons.
- **Monospace (Technical / HUD)**: `'DM Mono', monospace` (`--mono`)
  - Loaded weights: `400` (Regular), `500` (Medium)
  - Used for: Section labels, category indices (`01 / 04`), eyebrows, tag pills, timestamps, copyright notes, trajectory statuses.

### 2.2 Typographic Hierarchy & Specifications
| Element | Font | Weight | Size | Line Height | Tracking (Letter Spacing) | Color |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero & Display H1** | `Manrope` | 500 – 550 | `clamp(52px, 8.8vw, 116px)` | `0.98` | `-0.085em` | `#f4f4f5` |
| **Hero Title Subline** | `Manrope` | 500 | `0.48em` of H1 | `1.2 – 1.4` | `-0.055em` | `#a1a1aa` |
| **Section Heading (H2)** | `Manrope` | 500 | `clamp(38px, 5.2vw, 68px)` | `1.05 – 1.13` | `-0.07em` to `-0.075em` | `#f4f4f5` (contrast span: `#66666f`) |
| **Manifesto & Contact H2**| `Manrope` | 500 | `clamp(54px, 8vw, 100px)` | `0.99` | `-0.09em` | `#f4f4f5` (contrast span: `#74747e`) |
| **Stat Big Number** | `Manrope` | 500 | `35px` (suffix: `21px`) | `1.0` | `-0.08em` | `#f4f4f5` (suffix: `#8a8a94`) |
| **Bento Tile Heading** | `Manrope` | 500 | `24px` | `1.2` | `-0.045em` | `#f4f4f5` |
| **Hub Item Heading** | `Manrope` | 500 | `21px` | `1.2` | `-0.05em` | `#f4f4f5` |
| **Hub Item Lead** | `Manrope` | 400 | `12px` | `1.5` | `normal` | `#d4d4d8` |
| **Body Descriptions** | `Manrope` | 400 | `13px – 14px` | `1.9 – 1.95` | `normal` | `#82828c` / `#85858e` |
| **Buttons & Action Links**| `Manrope` | 700 / 500 | `11px` | `1.0` | `normal` | `#09090b` (btn) / `#a1a1aa` (link) |
| **Wordmark Logo** | `Manrope` | 800 | `22px` | `1.0` | `-0.10em` | `#ffffff` (dot: `#a1a1aa`) |
| **Wordmark Subname** | `DM Mono` | 400 | `9px` | `1.0` | `0.11em` | `#d4d4d8` |
| **Eyebrows & Section Labels**| `DM Mono` | 400 / 500 | `9px` | `1.0` | `0.13em – 0.16em` | `#71717a` / `#a1a1aa` (uppercase) |
| **Tag Pills & Indices** | `DM Mono` | 400 | `8px` | `1.0` | `0.10em – 0.13em` | `#86868f` / `#777780` |
| **Footer & Disclaimers** | `DM Mono` | 400 | `8px` | `1.4` | `0.10em` | `#66666f` |

---

## 3. Layout Architecture & Spacing

### 3.1 Container & Grid Standards
- **Global Responsive Padding (`.section-pad`)**: `padding-left: max(7.1vw, 24px); padding-right: max(7.1vw, 24px);`
- **Max Content Constraint**: `width: min(100%, 1180px)` (or `1050px` for hero identity) centered.
- **Section Dividers**: Full-width `border-bottom: 1px solid var(--line)`.

### 3.2 Floating Navigation Bar
- **Positioning**: Fixed at top: `top: 16px`, `left: 50%`, `transform: translate(-50%)`, `z-index: 20`
- **Dimensions**: `width: min(1180px, calc(100% - 48px))`, `height: 72px`, `padding: 0 20px`, `border-radius: 12px`
- **Materiality**: Glassmorphism (`background: #09090bad`, `backdrop-filter: blur(22px)`, `border: 1px solid rgba(255, 255, 255, 0.075)`, `box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25)`)
- **Structure**:
  - Left: Brand wordmark (`A.` in 22px bold + subname in 9px mono).
  - Center: Nav link cluster (`Practice areas`, `About`, `Trajectory`) in 11px, gap: `36px`.
  - Right: Contact action pill (`WhatsApp` + `ArrowUpRight` icon, height: `37px`, border radius: `7px`).
  - Mobile: Hamburger button reveals dark glass dropdown panel (`top: calc(100% + 8px)`).

### 3.3 Hero & 3D Interactive Canvas
- **Dimensions**: `height: 100svh`, `min-height: 820px`, `max-height: 1100px`.
- **Canvas Integration**: Interactive Three.js globe / celestial mesh canvas spanning right 70% to full width with subtle grab cursor.
- **Atmosphere**: Radial gradient vignettes overlaying the canvas so text remains razor-sharp.
- **Bottom HUD**: `SCROLL TO EXPLORE` with a `34px × 1px` rule.

### 3.4 Identity Reveal Section
- **Dimensions**: `min-height: 92svh`, `padding: 130px max(10vw, 28px) 110px`.
- **Composition**: Left-aligned high-impact typography with eyebrow header, massive clamp H1 with muted sub-clause, 540px max-width description, action button group (primary WhatsApp button + secondary text link with ArrowDown), and bottom-right section index marker `01 / INDEPENDENT BUILDER`.

### 3.5 Intro / Philosophy Section
- **Header**: Section label `01 — A MULTIDISCIPLINARY PRACTICE`
- **Layout**: 2-column asymmetric grid (`1.25fr 0.75fr`, gap: `9vw`, `align-items: end`).
  - Left: Display H2 `Different disciplines. One way of thinking.`
  - Right: Double editorial paragraphs with inline link `A little more about me ->`.
- **Metrics Bar**: 4-column metric row separated by top rule:
  - `10+` YEARS IN AUDIO
  - `04` DISCIPLINES, ONE PRACTICE
  - `∞` THINGS LEFT TO BUILD
  - Editorial Mono Note: `CURIOUS BY DEFAULT. / PRECISE BY DESIGN.`

### 3.6 Bento Grid Practice Section
- **Header**: Section label `02 — FOUR DIRECTIONS, ONE NORTH STAR` + Section title row with editorial aside quote.
- **Bento Grid**: Asymmetric 2x2 grid (`grid-template-columns: 1.15fr 0.85fr; grid-template-rows: 290px 290px; gap: 12px`).
  - **Tile 1 (Top Left, 1.15fr)**: Software Engineering (CodeXml icon, tags: Python, C++, Tauri, Microservices).
  - **Tile 2 (Top Right, 0.85fr)**: Audio Production (AudioLines icon, tags: Spatial audio, Sound design, 10+ years).
  - **Tile 3 (Bottom Left, 1.15fr)**: Digital Deployments (RadioTower icon, tags: Full-stack, Growth, Launch).
  - **Tile 4 (Bottom Right, 0.85fr)**: Aerospace Trajectory (Orbit icon, tags: BCA in progress, GATE prep, Systems engineering).
- **Tile Architecture**:
  - Corner header: Index mono `01 / 04` + 34px squared glass icon container (`border-radius: 7px`).
  - Subtle background orbital vector graphics (`graphic-orbit` ellipse wireframes at `-30deg` / `45deg`).
  - Middle: H3 title + 320px max-width description.
  - Bottom: Pill tags list + 30px circular interactive arrow button (`tile-arrow`).

### 3.7 Practice Hub Breakdown (List Rows)
- 4 full-width structured rows for deep-dive reading.
- 3-column layout: `grid-template-columns: 0.55fr 1.5fr 0.9fr; gap: 28px; padding: 32px 0; border-top: 1px solid var(--line)`.
  - Column 1: `01 / PRACTICE` index.
  - Column 2: Item H3 + Lead text + full descriptive paragraph.
  - Column 3: Tag pills flex cluster aligned to right.

### 3.8 Trajectory Timeline & Manifesto
- **Atmosphere**: Radial purple glow centered behind content (`rgba(103, 45, 167, 0.20)`).
- **Header**: Section label `03 — THE LONG VIEW` + Sparkles icon + Kicker `A SYSTEM IN MOTION`.
- **Heading & Body**: Centered display title `From the studio to the stars.` + 510px description.
- **Interactive Roadmap**:
  - Stop 1 (`IN PROGRESS`): Glowing active stop dot, title `Bachelor of Computer Applications`, sub `BCA student`.
  - Connector 1: 100% illuminated gradient track (`linear-gradient(90deg, #d4d4d8, #52525b)`).
  - Stop 2 (`FUTURE STUDY`): Hollow stop dot, title `Further study`, sub `MCA considered`.
  - Connector 2: Muted gradient track (`linear-gradient(90deg, #52525b, #2b2b31)`).
  - Stop 3 (`LONG-TERM GOAL`): 50% opacity stop, title `Aerospace Systems`, sub `GATE preparation`.

### 3.9 Contact & Footer Architecture
- **Header**: Section label `04 — THE NEXT CHAPTER`.
- **Hero CTA**: Centered `HAVE A GOOD PROBLEM?` + 2-line display title `Let's make / something matter.` (second line in `#a1a1aa`).
- **Actions**: High-contrast Zinc primary WhatsApp button (`height: 49px`, `gap: 32px`, `padding: 0 18px`) + text email link.
- **Address & Social Grid**: Horizontal row of contact channels with upward diagonal arrows (`+91 9002753627`, `mukherjeearkajeet98@gmail.com`, `GitHub ↗`, `LinkedIn ↗`, `Spotify ↗`, `Kolkata, India`).
- **Footer Bar**: Mono metadata row: `© 2026 ARKAJEET MUKHERJEE`, `PRIVACY / TERMS`, `BACK TO TOP ↑`.

---

## 4. Micro-Interactions, Hover States & Scroll Animations

### 4.1 Bento Card Micro-interactions
- **Card Lift**: On hover, transitions `transform: translateY(-3px)`, `border-color: rgba(255, 255, 255, 0.16)` over `0.45s cubic-bezier(0.2, 0.8, 0.2, 1)`.
- **Card Arrow Action Button**:
  - Default: Circular 30px pill with subtle border `rgba(255,255,255,0.08)`, color `#a1a1aa`.
  - Hover: Background flips to solid `#e4e4e7` (zinc 200), icon turns `#09090b` (black), rotates 45 degrees (`transform: rotate(45deg)`).

### 4.2 Button & Navigation Physics
- **Primary Buttons (`button-primary`, `nav-contact`)**:
  - Framer Motion spring physics: `type: "spring", stiffness: 500, damping: 30`.
  - `whileHover: { scale: 1.035 }`, `whileTap: { scale: 0.97 }`.
  - Smooth color transitions on all anchor links: `transition: color 0.2s ease` from `#a1a1aa` to `#ffffff`.

### 4.3 3D Perspective Scroll Animations
- Containers configured with `perspective: 1200px` and `transform-style: preserve-3d`.
- **Identity Reveal H1**: Scrolled in with `rotateX: 16deg`, `rotateY: -12deg`, `z: -240px`, `y: 110px`, `opacity: 0.05` -> `rotateX: 0deg`, `rotateY: 0deg`, `z: 0px`, `y: 0px`, `opacity: 1`.
- **Bento Tiles**: Scrolled in with staggered 3D tilt (`rotateX: 24deg`, `rotateY: ±16deg`, `z: -300px`, `y: 180px`, `opacity: 0.18`).
- **Trajectory Connector**: Animates `scaleX: 0` to `1` with `transform-origin: left center` on scroll into view.
- **Status Indicator**: Breathing glow animation on the live status dot.
- **Accessibility**: Strict `@media (prefers-reduced-motion: reduce)` disabling transform delays and 3D rotations.

---

## 5. Technology Stack Specifications
- **Build Tool**: Vite 6+ / React 18+ (TypeScript or JSX)
- **Styling**: Tailwind CSS configured with custom color tokens, font families, letter-spacing, and utility layers.
- **Fonts**: Google Fonts CDN preconnect for `Manrope` (weights 400, 500, 600, 700, 800) and `DM Mono` (weights 400, 500).
- **Icons**: `lucide-react` (icons: `ArrowUpRight`, `ArrowDown`, `ArrowRight`, `CodeXml`, `AudioLines`, `RadioTower`, `Orbit`, `Sparkles`, `Menu`, `X`).
- **Motion Engine**: `framer-motion` for spring interactions, layout transitions, and scroll animations.
