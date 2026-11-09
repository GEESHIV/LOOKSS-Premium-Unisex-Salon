import { Scissors } from 'lucide-react';
import { BUSINESS } from '@/lib/business';

interface LogoProps {
  tone: 'onDark' | 'onLight';
}

export default function Logo({ tone }: LogoProps) {
  const isDark = tone === 'onDark';
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label={`${BUSINESS.name} home`}>
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 text-ink-900 shadow-[0_8px_20px_-8px_rgba(194,160,97,0.8)] transition duration-500 group-hover:rotate-12">
        <Scissors size={19} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-2xl font-semibold tracking-[0.22em] ${isDark ? 'text-ivory-50' : 'text-ink-900'}`}
        >
          LOOKSS
        </span>
        <span
          className={`mt-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.32em] ${isDark ? 'text-gold-300' : 'text-gold-700'}`}
        >
          Premium Unisex Salon
        </span>
      </span>
    </a>
  );
}
