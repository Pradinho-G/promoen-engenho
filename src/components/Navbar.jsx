import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Integrantes', href: '/integrantes' },
  { label: 'Revistas', href: '/revistas' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavigation = () => {
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-md backdrop-blur-md'
          : 'bg-white'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo PROMOEN ENGENHO"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden items-center gap-8 md:flex">

          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-medium text-slate-700 transition-colors hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}

          <a
            href="/sobre"
            className="rounded-full bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Conheça o projeto →
          </a>

        </div>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-2xl text-slate-700 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </nav>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">

          <div className="flex flex-col gap-4">

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavigation}
                className="font-medium text-slate-700 hover:text-blue-700"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/sobre"
              onClick={handleNavigation}
              className="rounded-full bg-blue-700 px-5 py-3 text-center font-semibold text-white"
            >
              Conheça o projeto →
            </a>

          </div>

        </div>
      )}

    </header>
  )
}