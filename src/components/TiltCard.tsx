import { useTilt } from './useTilt'

/** Card wrapper that adds cursor-follow spotlight + subtle 3D tilt (see `.tilt-card` CSS). */
export function TiltCard({ className = '', children }: { className?: string; children: React.ReactNode }) {
  const tilt = useTilt<HTMLDivElement>()
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  )
}
