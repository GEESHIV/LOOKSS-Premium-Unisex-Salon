import { CalendarCheck, Gem, Heart, MapPin, MessageSquare, Palette, Sparkles, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

const REASONS: Reason[] = [
  {
    icon: Users,
    title: 'Unisex Salon Experience',
    description: 'One welcoming address for men and women, from everyday grooming to special occasions.',
  },
  {
    icon: Palette,
    title: 'Hair and Beauty Services',
    description: 'Hair, skin, grooming and bridal services brought together under one roof.',
  },
  {
    icon: Sparkles,
    title: 'Personalized Style Enquiries',
    description: 'Tell us what you have in mind and we will guide you toward the right service.',
  },
  {
    icon: MapPin,
    title: 'Convenient Sector 126 Location',
    description: 'Easy to find in Raipur Khadar, Sector 126, Noida.',
  },
  {
    icon: CalendarCheck,
    title: 'Easy Appointment Booking',
    description: 'Share your preferred date and time through our booking form or on WhatsApp.',
  },
  {
    icon: Heart,
    title: 'Welcoming Salon Experience',
    description: 'A calm, comfortable setting where every visit feels personal.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative scroll-mt-20 overflow-hidden bg-ink-900 py-24 text-ivory-50 sm:py-32">
      <div className="pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-gold-500/10 blur-3xl" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            tone="dark"
            label="Why Choose Us"
            title="A Salon Made for Everyone"
            description="Thoughtful service, a welcoming space and an easy way to plan your visit."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-ivory-50/10 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={index * 90} className="h-full">
                <div className="group flex h-full flex-col bg-ink-900 p-8 transition duration-500 hover:bg-ink-800 sm:p-10">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-400/40 text-gold-300 transition duration-500 group-hover:scale-110 group-hover:border-gold-300 group-hover:bg-gold-300/10">
                    <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-8 text-2xl font-medium text-ivory-50">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-[1.5] text-beige-200/85">{reason.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150}>
          <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-gold-400/25 bg-ink-800/60 p-8 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-4">
              <Gem size={28} className="shrink-0 text-gold-300" strokeWidth={1.5} aria-hidden="true" />
              <p className="font-display text-2xl text-ivory-50">Ready to discover your next look?</p>
            </div>
            <a href="#book" className="btn-gold">
              <MessageSquare size={16} aria-hidden="true" />
              Start Your Enquiry
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
