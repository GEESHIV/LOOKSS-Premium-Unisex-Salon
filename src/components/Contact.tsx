import { MapPin, MessageCircle, Navigation, Phone, Store } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { BUSINESS, GENERAL_WHATSAPP_URL } from '@/lib/business';

interface ContactDetail {
  icon: typeof Phone;
  label: string;
  value: string[];
}

const DETAILS: ContactDetail[] = [
  { icon: Store, label: 'Business Name', value: [BUSINESS.name] },
  { icon: Phone, label: 'Phone Number', value: [BUSINESS.phone] },
  { icon: Phone, label: 'Additional Contact Reference', value: [BUSINESS.altPhone] },
  { icon: MapPin, label: 'Address', value: [...BUSINESS.addressLines] },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-beige-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            label="Contact Us"
            title="We Would Love to Hear From You"
            description="Call, message or visit us in Sector 126. Our team is happy to help you plan your next look."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="grid h-full gap-px overflow-hidden rounded-3xl bg-beige-300/60 ring-1 ring-beige-300 sm:grid-cols-2">
              {DETAILS.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div key={detail.label} className="flex gap-5 bg-ivory-50 p-7 sm:p-8">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                      <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="section-label !text-ink-400 !tracking-[0.2em]">{detail.label}</p>
                      {detail.value.map((line) => (
                        <p key={line} className="mt-2 text-base font-semibold leading-[1.5] text-ink-900">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-2">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-ink-900 p-8 text-ivory-50 sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-gold-400/20" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rounded-full border border-gold-400/30" aria-hidden="true" />

              <div className="relative">
                <p className="section-label !text-gold-300">Plan Your Visit</p>
                <p className="mt-4 font-display text-3xl leading-[1.2]">Raipur Khadar, Sector 126</p>
                <p className="mt-2 text-sm text-beige-200/85">Noida, Uttar Pradesh 201313</p>
              </div>

              <div className="relative mt-10 flex flex-col gap-3">
                <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-gold w-full">
                  <Phone size={16} aria-hidden="true" />
                  Call Now
                </a>
                <a
                  href={GENERAL_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-light w-full"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  WhatsApp Us
                </a>
                <a
                  href={BUSINESS.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-light w-full"
                >
                  <Navigation size={16} aria-hidden="true" />
                  Get Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
