import { testimonials } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative px-4 py-20 md:px-8 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-30" aria-hidden>
        <div className="mx-auto h-96 max-w-4xl rounded-full bg-el-purple/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          id="testimonials-heading"
          title="Stories"
          subtitle="Placeholder love notes from clients—your story could be next."
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-el-card/70 p-6 shadow-[0_0_40px_-12px_rgba(192,132,252,0.15)] transition-all duration-300 hover:border-el-purple/30 hover:shadow-[0_0_48px_-8px_rgba(56,189,248,0.2)] md:p-8">
                <blockquote className="flex-1 text-sm leading-relaxed text-white/75">
                  <span className="text-el-purple/90">“</span>
                  {t.quote}
                  <span className="text-el-purple/90">”</span>
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <cite className="not-italic font-semibold text-white">{t.name}</cite>
                  <p className="text-xs text-white/45">{t.role}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
