import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { BUSINESS } from '@/lib/business';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#style', label: 'For Him & Her' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-ivory-50/95 py-3 shadow-[0_10px_30px_-20px_rgba(18,17,14,0.35)] backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
        <Logo tone={solid ? 'onLight' : 'onDark'} />

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`group relative text-sm tracking-wide transition-colors duration-300 ${
                  solid ? 'text-ink-700 hover:text-ink-900' : 'text-ivory-100/90 hover:text-gold-200'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gold-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${BUSINESS.phoneIntl}`}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition duration-300 ${
              solid ? 'text-ink-900 hover:bg-gold-100' : 'text-ivory-50 hover:bg-ivory-50/10'
            }`}
          >
            <Phone size={15} aria-hidden="true" />
            Call Now
          </a>
          <a href="#book" className="btn-gold !px-5 !py-2.5">
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={`flex h-11 w-11 items-center justify-center rounded-full transition duration-300 lg:hidden ${
            solid ? 'text-ink-900 hover:bg-gold-100' : 'text-ivory-50 hover:bg-ivory-50/10'
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden bg-ivory-50 transition-all duration-500 lg:hidden ${
          open ? 'max-h-[80vh] border-t border-beige-200 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-6 sm:px-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 font-display text-2xl text-ink-900 transition hover:bg-gold-100"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href="#book" onClick={() => setOpen(false)} className="btn-gold flex-1">
              Book Appointment
            </a>
            <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-outline-dark flex-1">
              <Phone size={16} aria-hidden="true" />
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
