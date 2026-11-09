import { ArrowRight } from 'lucide-react';
import { pexelsImage } from '@/lib/images';
import type { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  onEnquire: (serviceName: string) => void;
}

export default function ServiceCard({ service, onEnquire }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-ivory-50 shadow-[0_18px_40px_-28px_rgba(18,17,14,0.4)] ring-1 ring-beige-300/70 transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_50px_-28px_rgba(18,17,14,0.5)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={pexelsImage(service.image, 800)}
          alt={`${service.name} at LOOKSS PREMIUM UNISEX SALON`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" aria-hidden="true" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-medium text-ink-900">{service.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-[1.5] text-ink-500">{service.description}</p>

        <button
          type="button"
          onClick={() => onEnquire(service.name)}
          className="mt-6 inline-flex w-full items-center justify-between rounded-full border border-ink-900/15 px-5 py-3 text-sm font-semibold text-ink-900 transition duration-300 hover:border-gold-600 hover:bg-gold-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
        >
          Enquire Now
          <ArrowRight size={16} className="text-gold-700 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
