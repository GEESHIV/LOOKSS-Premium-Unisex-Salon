import { ArrowRight, Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { pexelsImage } from '@/lib/images';
import type { EnquiryPrefill } from '@/lib/enquiry';

interface StyleSectionProps {
  onEnquire: (prefill: Omit<EnquiryPrefill, 'key'>) => void;
}

interface StyleProfile {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  cta: string;
  prefill: Omit<EnquiryPrefill, 'key'>;
  tone: 'dark' | 'light';
}

const PROFILES: StyleProfile[] = [
  {
    id: 'for-him',
    eyebrow: 'Men',
    title: 'For Him',
    intro: 'Sharp cuts, refined beards and grooming that keeps you looking sharp every day.',
    image: 'https://images.pexels.com/photos/7460150/pexels-photo-7460150.jpeg',
    imageAlt: 'Stylish man with a beard and a modern haircut',
    highlights: ["Men's haircuts and fades", 'Beard styling and trimming', 'Everyday grooming and styling', 'Modern hairstyles for every occasion'],
    cta: 'Enquire for Him',
    prefill: { service: "Men's Haircut", gender: 'Male' },
    tone: 'dark',
  },
  {
    id: 'for-her',
    eyebrow: 'Women',
    title: 'For Her',
    intro: 'Expressive colour, styled hair and beauty treatments that bring out your natural glow.',
    image: 'https://images.pexels.com/photos/17697574/pexels-photo-17697574.jpeg',
    imageAlt: 'Woman with vibrant dyed hair against a bold background',
    highlights: ["Women's haircuts and styling", 'Hair colouring and highlights', 'Facials, skin care and waxing', 'Makeup for parties and bridal occasions'],
    cta: 'Enquire for Her',
    prefill: { service: 'Hair Colour', gender: 'Female' },
    tone: 'light',
  },
];

export default function StyleSection({ onEnquire }: StyleSectionProps) {
  return (
    <section id="style" className="scroll-mt-20 bg-beige-50">
      {PROFILES.map((profile, index) => {
        const isDark = profile.tone === 'dark';
        const imageFirst = index % 2 === 0;
        return (
          <div
            key={profile.id}
            id={profile.id}
            className={`scroll-mt-20 ${isDark ? 'bg-ink-900 text-ivory-50' : 'bg-beige-100 text-ink-900'}`}
          >
            <div
              className={`mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20 ${
                imageFirst ? '' : 'lg:[&>div:first-child]:order-2'
              }`}
            >
              <Reveal className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/6] lg:aspect-[4/5]">
                  <img
                    src={pexelsImage(profile.image, 1200)}
                    alt={profile.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" aria-hidden="true" />
                </div>
                <p
                  className={`absolute -bottom-5 right-6 rounded-full px-5 py-2 font-display text-lg italic shadow-lg ${
                    isDark ? 'bg-gold-300 text-ink-900' : 'bg-ink-900 text-gold-200'
                  }`}
                >
                  {profile.eyebrow}
                </p>
              </Reveal>

              <Reveal delay={150}>
                <p className={`section-label ${isDark ? '!text-gold-300' : ''}`}>Style Edit</p>
                <h2 className="mt-4 text-5xl font-medium sm:text-6xl">{profile.title}</h2>
                <p className={`mt-6 text-base leading-[1.5] sm:text-lg ${isDark ? 'text-beige-200/90' : 'text-ink-600'}`}>
                  {profile.intro}
                </p>

                <ul className="mt-10 space-y-4">
                  {profile.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-4">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                          isDark ? 'bg-gold-300/15 text-gold-300' : 'bg-gold-200 text-gold-800'
                        }`}
                      >
                        <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => onEnquire(profile.prefill)}
                  className={`group mt-12 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 ${
                    isDark
                      ? 'bg-gold-300 text-ink-900 hover:bg-gold-200 focus-visible:ring-offset-ink-900'
                      : 'bg-ink-900 text-ivory-50 hover:bg-ink-700 focus-visible:ring-offset-beige-100'
                  }`}
                >
                  {profile.cta}
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </button>
              </Reveal>
            </div>
          </div>
        );
      })}
    </section>
  );
}
