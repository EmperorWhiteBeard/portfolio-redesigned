"use client"

export function Footer() {
  return (
    <footer className="py-8 border-t border-hairline bg-canvas">
      <div className="container-nvidia px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-caption text-ink-subtle">
          © 2025 Mizhab Mujeeb NP
        </span>
        <span className="font-mono text-caption text-ink-subtle">
          Built with Next.js + Tailwind
        </span>
      </div>
    </footer>
  )
}