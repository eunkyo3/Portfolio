import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { ScrollProgress } from './components/ScrollProgress'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-full flex flex-col relative overflow-hidden">
        <ScrollProgress />
        {/* global animated background for all pages */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -inset-40 bg-gradient-to-br from-blue-100 via-purple-50 to-cyan-100 dark:from-[#020617] dark:via-[#020617] dark:to-slate-900 opacity-80 bg-animated" />
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
