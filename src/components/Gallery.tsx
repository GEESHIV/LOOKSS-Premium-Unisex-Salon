import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { GALLERY_ITEMS, type GalleryItem } from '@/data/gallery';
import { pexelsImage } from '@/lib/images';

const SPAN_CLASS: Record<GalleryItem['span'], string> = {
  tall: 'row-span-2',
  wide: 'col-span-2',
  square: '',
};

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 bg-ivory-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            label="Our Gallery"
            title="Style, Captured"
            description="A glimpse of the atmosphere, craft and looks that define the LOOKSS experience."
          />
        </Reveal>

        <div className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-5 lg:grid-cols-4">
          {GALLERY_ITEMS.map((item, index) => (
            <Reveal key={item.caption} delay={(index % 4) * 80} className={`h-full ${SPAN_CLASS[item.span]}`}>
              <figure className="group relative h-full w-full overflow-hidden rounded-3xl bg-beige-200">
                <img
                  src={pexelsImage(item.image, 900)}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink-950/85 to-transparent p-5 pt-12 transition duration-500 group-hover:translate-y-0">
                  <span className="font-display text-xl text-ivory-50">{item.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-[1.5] text-ink-400">
          Gallery images are royalty-free stock photography shown for illustration. They do not depict LOOKSS staff or clients.
        </p>
      </div>
    </section>
  );
}
