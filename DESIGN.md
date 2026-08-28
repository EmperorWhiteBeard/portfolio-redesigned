---
version: alpha
name: DevOps-Portfolio-Modern
description: A modern DevOps/Cloud Engineering portfolio design combining Vercel's precision, Linear's technical sophistication, and Stripe's elegant gradients. Features a deep dark canvas (#0a0a0a), electric blue accent (#3b82f6), and atmospheric gradient overlays for visual depth.

colors:
  primary: "#3b82f6"
  primary-hover: "#60a5fa"
  primary-deep: "#2563eb"
  accent: "#8b5cf6"
  accent-hover: "#a78bfa"
  ink: "#ffffff"
  ink-secondary: "#e5e7eb"
  ink-muted: "#9ca3af"
  ink-subtle: "#6b7280"
  canvas: "#0a0a0a"
  surface-1: "#111111"
  surface-2: "#1a1a1a"
  surface-3: "#222222"
  hairline: "#2a2a2a"
  hairline-strong: "#3a3a3a"
  success: "#10b981"
  warning: "#f59e0b"
  error: "#ef4444"
  gradient-start: "#3b82f6"
  gradient-end: "#8b5cf6"
  glow: "rgba(59, 130, 246, 0.3)"

typography:
  display-xl:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -2px
  display-lg:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1.5px
  display-md:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -1px
  heading-lg:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.5px
  heading-md:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.3px
  heading-sm:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-lg:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.5px
  mono:
    fontFamily: "'Fira Code', 'Consolas', monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: 24px
  full: 9999px

spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  section: 120px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    fontWeight: 500
    rounded: "{rounded.md}"
    padding: 12px 24px
    transition: all 0.2s ease
    hover:
      backgroundColor: "{colors.primary-hover}"
      transform: translateY(-1px)
      boxShadow: "0 8px 24px {colors.glow}"
  
  button-secondary:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    fontWeight: 500
    rounded: "{rounded.md}"
    padding: 12px 24px
    border: "1px solid {colors.hairline}"
    transition: all 0.2s ease
    hover:
      backgroundColor: "{colors.surface-3}"
      borderColor: "{colors.hairline-strong}"

  card:
    backgroundColor: "{colors.surface-1}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.lg}"
    padding: 24px
    transition: all 0.3s ease
    hover:
      borderColor: "{colors.primary}"
      boxShadow: "0 8px 32px {colors.glow}"
      transform: translateY(-2px)

  card-glass:
    backgroundColor: "rgba(17, 17, 17, 0.6)"
    backdropFilter: blur(12px)
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.lg}"
    padding: 24px

  input:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.md}"
    padding: 10px 16px
    typography: "{typography.body-md}"
    focus:
      borderColor: "{colors.primary}"
      outline: "2px solid {colors.glow}"

shadows:
  sm: "0 1px 2px rgba(0, 0, 0, 0.5)"
  md: "0 4px 6px rgba(0, 0, 0, 0.5)"
  lg: "0 10px 15px rgba(0, 0, 0, 0.5)"
  xl: "0 20px 25px rgba(0, 0, 0, 0.5)"
  glow: "0 0 20px {colors.glow}"

animations:
  duration-fast: 150ms
  duration-base: 200ms
  duration-slow: 300ms
  easing: cubic-bezier(0.4, 0, 0.2, 1)

layout:
  maxWidth: 1280px
  containerPadding: 24px
  sectionSpacing: "{spacing.section}"
  gridGap: 24px

---

## Visual Theme & Atmosphere

This portfolio embodies a **technical sophistication** aesthetic — dark, precise, and confident. The near-black canvas (#0a0a0a) creates a premium foundation, while electric blue accents (#3b82f6) provide energy and focus. The design feels like a professional cloud platform interface rather than a traditional portfolio.

**Mood**: Professional, modern, technical, trustworthy
**Density**: Medium — breathing room around key content, tighter in data-rich sections
**Philosophy**: Form follows function. Every element serves a purpose. Visual hierarchy guides the eye through achievements and technical expertise.

## Do's and Don'ts

### Do
- Use gradient overlays sparingly for visual depth on hero and section headers
- Maintain consistent spacing rhythm (8px base unit)
- Let cards breathe with generous padding
- Use hover states to reward interaction
- Keep text readable with high contrast
- Use monospace fonts for code, technical labels, and metrics

### Don't
- Overuse gradients — they're accent elements, not backgrounds
- Mix more than 2-3 accent colors per section
- Create walls of text — break content into scannable chunks
- Use animations longer than 300ms
- Sacrifice readability for aesthetics

## Responsive Behavior

**Breakpoints**:
- Mobile: 0-640px
- Tablet: 641-1024px
- Desktop: 1025px+

**Touch targets**: Minimum 44×44px
**Mobile strategy**: Stack cards vertically, increase font sizes slightly, ensure thumb-friendly navigation
