export function SectionHeading({ id, title, subtitle, className = '' }) {
  return (
    <header className={`mx-auto mb-12 max-w-3xl text-center md:mb-16 ${className}`}>
      {title && (
        <h2
          id={id}
          className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
        >
          <span className="text-gradient">{title}</span>
        </h2>
      )}
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">{subtitle}</p>
      )}
    </header>
  )
}
