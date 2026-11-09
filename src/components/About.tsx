import { MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { pexelsImage } from '@/lib/images';

const ABOUT_IMAGE = 'https://images.pexels.com/photos/7750120/pexels-photo-7750120.jpeg';

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-ivory-100 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
        <Reveal className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-gold-400/60 sm:-left-6 sm:-top-6" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(18,17,14,0.45)]">
            <img
              src={pexelsImage(ABOUT_IMAGE, 1200)}
              alt="Elegant and cozy modern salon interior with natural light"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition duration-1000 hover:scale-105 sm:aspect-[5/4]"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="section-label">About Us</p>
          <h2 className="mt-4 text-4xl font-medium sm:text-5xl">
            Welcome to <span className="italic text-gold-700">LOOKSS PREMIUM UNISEX SALON</span>
          </h2>
          <span aria-hidden="true" className="mt-6 block h-px w-16 bg-gradient-to-r from-gold-300 to-gold-600" />
          <p className="mt-8 text-base leading-[1.5] text-ink-600 sm:text-lg">
            At LOOKSS PREMIUM UNISEX SALON, we believe that great style is an expression of confidence and personality. Our aim is to provide a welcoming salon experience where clients can explore their style and enjoy beauty and grooming services.
          </p>

          <div className="mt-10 flex items-start gap-4 rounded-2xl border border-beige-300 bg-ivory-50 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
              <MapPin size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink-900">Find us in Sector 126</p>
              <p className="mt-1 text-sm leading-[1.5] text-ink-500">Raipur Khadar, Sector 126, Noida, Uttar Pradesh 201313</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
