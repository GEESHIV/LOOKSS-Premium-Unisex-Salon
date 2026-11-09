import Logo from '@/components/Logo';
import { BUSINESS, GENERAL_WHATSAPP_URL } from '@/lib/business';

const QUICK_LINKS = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Our Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#style', label: 'For Him & Her' },
  { href: '#book', label: 'Book Appointment' },
  { href: '#contact', label: 'Contact' },
];

const SERVICE_LINKS = [
  { href: '#services', label: 'Hair Services' },
  { href: '#services', label: 'Men\u2019s Grooming' },
  { href: '#services', label: 'Beauty Services' },
  { href: '#services', label: 'Bridal & Makeup' },
];

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-beige-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div className="lg:col-span-1">
          <Logo tone="onDark" />
          <p className="mt-6 max-w-xs text-sm leading-[1.5] text-beige-300/90">
            A premium unisex salon in Sector 126, Noida, offering hair, grooming, beauty and bridal services in one welcoming place.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h3 className="section-label !text-gold-300">Quick Links</h3>
          <ul className="mt-6 space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm transition hover:text-gold-200">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Service categories">
          <h3 className="section-label !text-gold-300">Services</h3>
          <ul className="mt-6 space-y-3">
            {SERVICE_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm transition hover:text-gold-200">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="section-label !text-gold-300">Contact</h3>
          <address className="mt-6 space-y-4 not-italic">
            <p className="text-sm leading-[1.5]">
              {BUSINESS.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p className="text-sm">
              <a href={`tel:${BUSINESS.phoneIntl}`} className="transition hover:text-gold-200">
                {BUSINESS.phone}
              </a>
            </p>
            <p className="text-sm">
              <a href={`tel:+91${BUSINESS.altPhone}`} className="transition hover:text-gold-200">
                Ref: {BUSINESS.altPhone}
              </a>
            </p>
            <p className="text-sm">
              <a
                href={GENERAL_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold-300 transition hover:text-gold-200"
              >
                Chat on WhatsApp
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-ivory-50/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs text-beige-300/80 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>&copy; {YEAR} {BUSINESS.name}. All rights reserved.</p>
          <p>Raipur Khadar, Sector 126, Noida</p>
        </div>
      </div>
    </footer>
  );
}
