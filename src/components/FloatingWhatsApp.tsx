import { MessageCircle } from 'lucide-react';
import { GENERAL_WHATSAPP_URL } from '@/lib/business';

export default function FloatingWhatsApp() {
  return (
    <a
      href={GENERAL_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with LOOKSS PREMIUM UNISEX SALON on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-8 sm:right-8"
    >
      <span className="pointer-events-none hidden rounded-full bg-ink-900 px-4 py-2 text-sm font-medium text-ivory-50 opacity-0 shadow-lg transition duration-300 group-hover:opacity-100 md:block">
        Chat with us
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_-10px_rgba(37,211,102,0.8)] transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-focus-visible:ring-4 group-focus-visible:ring-gold-300">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" aria-hidden="true" />
        <MessageCircle size={26} strokeWidth={1.75} className="relative" aria-hidden="true" />
      </span>
    </a>
  );
}
