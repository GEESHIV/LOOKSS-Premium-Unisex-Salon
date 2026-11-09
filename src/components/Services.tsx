import { useState } from 'react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import { SERVICES, SERVICE_CATEGORIES, type ServiceCategoryId } from '@/data/services';

interface ServicesProps {
  onEnquire: (serviceName: string) => void;
}

export default function Services({ onEnquire }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategoryId>('hair');
  const visibleServices = SERVICES.filter((service) => service.category === activeCategory);

  return (
    <section id="services" className="scroll-mt-20 bg-beige-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            label="Our Services"
            title="Crafted for Every Style"
            description="Explore hair, grooming, beauty and bridal services. Choose a category, then send an enquiry for the service you have in mind."
          />
        </Reveal>

        <Reveal delay={100}>
          <div
            role="tablist"
            aria-label="Service categories"
            className="mt-12 flex gap-2 overflow-x-auto pb-2 sm:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {SERVICE_CATEGORIES.map((category) => {
              const isActive = category.id === activeCategory;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category.id)}
                  className={`shrink-0 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-beige-100 ${
                    isActive
                      ? 'bg-ink-900 text-ivory-50 shadow-[0_12px_24px_-14px_rgba(18,17,14,0.7)]'
                      : 'bg-ivory-50 text-ink-700 ring-1 ring-beige-300 hover:text-ink-900 hover:ring-gold-500'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div role="tabpanel" key={activeCategory} className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {visibleServices.map((service, index) => (
            <Reveal key={service.name} delay={index * 80}>
              <ServiceCard service={service} onEnquire={onEnquire} />
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-[1.5] text-ink-400">
          Service imagery is illustrative. Service details and availability are confirmed when you enquire.
        </p>
      </div>
    </section>
  );
}
