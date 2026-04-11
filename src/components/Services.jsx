import { services } from '../data/siteContent'
import { InstagramButton } from './InstagramButton'
import { SectionHeading } from './SectionHeading'

export function Services() {
  return (
    <section
      id="services"
      className="relative px-4 py-20 md:px-8 md:py-28"
      aria-labelledby="services-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-el-blue/40 to-transparent" aria-hidden />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="services-heading"
          title="Services"
          subtitle="Pick a format—we’ll tailor every pixel and beat to your story."
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.title}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-el-card/80 p-6 transition-all duration-500 glow-card md:p-8">
                <div
                  className="absolute inset-0 bg-linear-to-br from-el-blue/5 via-transparent to-el-purple/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative flex flex-1 flex-col">
                  <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{s.description}</p>
                  <div className="mt-6">
                    <InstagramButton variant="ghost" className="w-full !text-sm">
                      Order This Gift
                    </InstagramButton>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
