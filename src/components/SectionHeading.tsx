interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
  align?: 'center' | 'left';
}

export default function SectionHeading({
  label,
  title,
  description,
  tone = 'light',
  align = 'center',
}: SectionHeadingProps) {
  const isDark = tone === 'dark';
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className={`section-label ${isDark ? '!text-gold-300' : ''}`}>{label}</p>
      <h2
        className={`mt-4 text-4xl font-medium sm:text-5xl ${isDark ? 'text-ivory-50' : 'text-ink-900'}`}
      >
        {title}
      </h2>
      <span
        aria-hidden="true"
        className={`mt-6 block h-px w-16 bg-gradient-to-r from-gold-300 to-gold-600 ${align === 'center' ? 'mx-auto' : ''}`}
      />
      {description && (
        <p
          className={`mt-6 text-base leading-[1.5] sm:text-lg ${isDark ? 'text-beige-200' : 'text-ink-500'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
