import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { ScrollProgress } from './components/ScrollProgress'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
      <div className="min-h-full flex flex-col relative">
        <ScrollProgress />
        {/* aurora background layer for all pages */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-[#060913] dark:via-[#060913] dark:to-[#0b1224]" />
          <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-indigo-400/30 blur-3xl dark:bg-indigo-500/20 animate-[bg-move_22s_ease-in-out_infinite_alternate]" />
          <div className="absolute -bottom-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-400/15 animate-[float-slow_28s_ease-in-out_infinite_alternate]" />
          <div
            className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]"
            style={{
              backgroundImage:
                'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              color: 'rgb(99 102 241)',
              maskImage: 'radial-gradient(ellipse at center, black, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 75%)',
            }}
          />
        </div>
        <Navbar />
        <main className="flex-1 py-10">
          <div className="container-responsive">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
