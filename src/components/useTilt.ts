import { useRef } from 'react'

/**
 * Cursor-follow spotlight + subtle 3D tilt for cards.
 * Spread the returned props onto a card element that also has the `tilt-card` class.
 * Honors prefers-reduced-motion (skips the transform update).
 */
export function useTilt<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  const onMouseMove = (e: React.MouseEvent<T>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty('--mx', `${x}px`)
    el.style.setProperty('--my', `${y}px`)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rx = (y / rect.height - 0.5) * -5
    const ry = (x / rect.width - 0.5) * 5
    el.style.setProperty('--rx', `${rx}deg`)
    el.style.setProperty('--ry', `${ry}deg`)
  }

  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return { ref, onMouseMove, onMouseLeave }
}
