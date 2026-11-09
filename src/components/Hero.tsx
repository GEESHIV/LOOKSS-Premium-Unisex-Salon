import { ArrowRight, Phone, ChevronDown } from 'lucide-react';
import { BUSINESS } from '@/lib/business';
import { pexelsImage } from '@/lib/images';

const HERO_IMAGE = 'https://images.pexels.com/photos/7195803/pexels-photo-7195803.jpeg';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-950 text-ivory-50">
      <img
        src={pexelsImage(HERO_IMAGE, 2000)}
        alt="Contemporary salon interior with sleek chairs and warm lighting"
        className="absolute inset-0 h-full w-full animate-slow-zoom object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/70 to-ink-950/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-32 sm:px-8 lg:pt-40">
        <div className="max-w-3xl">
          <p className="animate-fade-up section-label !text-gold-300" style={{ animationDelay: '0.1s' }}>
            Raipur Khadar, Sector 126, Noida
          </p>

          <h1
            className="animate-fade-up mt-6 text-5xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.25s' }}
          >
            <span className="block">Your Style.</span>
            <span className="block">Your Confidence.</span>
            <span className="block italic text-gold-300">Your Look.</span>
          </h1>

          <p
            className="animate-fade-up mt-8 max-w-xl text-base leading-[1.5] text-beige-100/90 sm:text-lg"
            style={{ animationDelay: '0.4s' }}
          >
            Discover your perfect look at LOOKSS PREMIUM UNISEX SALON. Experience beauty, style and grooming in one place.
          </p>

          <div className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row sm:items-center" style={{ animationDelay: '0.55s' }}>
            <a href="#book" className="btn-gold group">
              Book an Appointment
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#services" className="btn-outline-light">
              Explore Our Services
            </a>
          </div>

          <a
            href={`tel:${BUSINESS.phoneIntl}`}
            className="animate-fade-up mt-8 inline-flex items-center gap-2.5 rounded-full border border-gold-300/50 bg-ink-950/30 px-5 py-2.5 text-sm font-semibold text-gold-200 backdrop-blur-sm transition duration-300 hover:border-gold-300 hover:bg-gold-300 hover:text-ink-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            style={{ animationDelay: '0.7s' }}
          >
            <Phone size={15} aria-hidden="true" />
            Call Now
            <span className="opacity-80">{BUSINESS.phone}</span>
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about us"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-beige-100/70 transition hover:text-gold-200 sm:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-luxe">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
