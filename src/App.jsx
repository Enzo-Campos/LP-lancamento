import { useEffect, useRef, useState } from 'react'
import './App.css'
import ProductShowcase from './components/ProductShowcase'

import logoSvg from './assets/indusparquet.svg'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`fade-in ${inView ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email) setSubmitted(true)
  }

  return (
    <div className="app">

      {/* NAV */}
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="https://grupoindusparquet.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={logoSvg} alt="Indusparquet" className="nav-logo" />
          </a>
        </div>
      </nav>

      {/* SEÇÃO 1 — HERO */}
      <section className="hero">
        <div className="hero-bg"/>
        <div className="hero-overlay" />
        <div className="hero-content container">
          <FadeIn delay={100}>
            <h1 className="hero-title">
              Novos Lançamentos 2026.
            </h1>
          </FadeIn>
          <FadeIn delay={460}>
            <p className="hero-subtitle">
              Coleções criadas para projetos que exigem sofisticação, desempenho e identidade.
            </p>
          </FadeIn>
          <FadeIn delay={660}>
          </FadeIn>
        </div>
        <div className="hero-scroll-hint">
          <span className="scroll-line" />
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <ProductShowcase />

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <img src={logoSvg} alt="Indusparquet" className="footer-logo" />
          <div className="footer-socials">
            <a href="https://grupoindusparquet.com.br/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/grupoindusparquet/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://www.facebook.com/grupoindusparquet/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Desenvolvido por <a href="https://iblanco.com.br">Iblanco</a></span>
        </div>
      </footer>
    </div>
  )
}
