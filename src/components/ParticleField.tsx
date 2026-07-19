import { useEffect, useRef } from 'react'

/**
 * Lightweight canvas particle network for the hero/background.
 * - Particles drift slowly and connect with faint lines.
 * - Reacts to the mouse (nearby particles link to the cursor and are gently pushed).
 * - Theme-aware (reads the `.dark` class) and disabled under prefers-reduced-motion.
 */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: -9999, y: -9999 }

    type P = { x: number; y: number; vx: number; vy: number }
    let particles: P[] = []

    const density = () => {
      // scale particle count with viewport area, capped for perf
      const target = Math.round((width * height) / 22000)
      return Math.max(28, Math.min(72, target))
    }

    const seed = () => {
      particles = Array.from({ length: density() }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }))
    }

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    const isDark = () => document.documentElement.classList.contains('dark')

    let raf = 0
    let running = true

    const step = () => {
      if (!running) return
      ctx.clearRect(0, 0, width, height)
      const dark = isDark()
      const dot = dark ? '129,140,248' : '99,102,241' // indigo-300 / indigo-600
      const link = dark ? '129,140,248' : '99,102,241'
      const LINK_DIST = 130
      const MOUSE_DIST = 170

      for (const p of particles) {
        // gentle mouse repulsion
        const mdx = p.x - mouse.x
        const mdy = p.y - mouse.y
        const md = Math.hypot(mdx, mdy)
        if (md < MOUSE_DIST && md > 0.01) {
          const force = (1 - md / MOUSE_DIST) * 0.6
          p.vx += (mdx / md) * force * 0.15
          p.vy += (mdy / md) * force * 0.15
        }
        p.x += p.vx
        p.y += p.vy
        // damping + speed clamp
        p.vx *= 0.98
        p.vy *= 0.98
        // wrap around edges
        if (p.x < 0) p.x = width
        else if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        else if (p.y > height) p.y = 0
      }

      // links between particles
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * (dark ? 0.28 : 0.18)
            ctx.strokeStyle = `rgba(${link},${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        // link to mouse
        const dmx = a.x - mouse.x
        const dmy = a.y - mouse.y
        const dm = Math.hypot(dmx, dmy)
        if (dm < MOUSE_DIST) {
          const alpha = (1 - dm / MOUSE_DIST) * (dark ? 0.4 : 0.28)
          ctx.strokeStyle = `rgba(${link},${alpha})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
        // dot
        ctx.fillStyle = `rgba(${dot},${dark ? 0.55 : 0.45})`
        ctx.beginPath()
        ctx.arc(a.x, a.y, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(step)
    }

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }
    const onVisibility = () => {
      running = !document.hidden
      if (running) {
        raf = requestAnimationFrame(step)
      } else {
        cancelAnimationFrame(raf)
      }
    }

    resize()
    raf = requestAnimationFrame(step)
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseout', onLeave)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}
