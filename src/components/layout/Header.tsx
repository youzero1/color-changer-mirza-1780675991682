import { useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import clsx from 'clsx';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'Stats', href: '#stats' },
    { label: 'Contact', href: '#cta' },
  ];

  return (
    <header className="bg-red-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Flame className="w-7 h-7 text-red-200" />
            <span className="text-xl font-bold tracking-tight">RedApp</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-red-100 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-red-700 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={clsx(
          'md:hidden overflow-hidden transition-all duration-300',
          menuOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <nav className="px-4 pb-4 flex flex-col gap-2 bg-red-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-red-100 hover:text-white py-2 font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="mt-2 bg-white text-red-600 px-4 py-2 rounded-lg font-semibold text-center hover:bg-red-50 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
