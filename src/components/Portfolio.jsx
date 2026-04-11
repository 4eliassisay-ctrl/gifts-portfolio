import { portfolioProjects } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative px-4 py-20 md:px-8 md:py-28"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="portfolio-heading"
          title="Portfolio"
          subtitle="Demo concepts—each real build is one-of-one, shaped around your memories."
        />
        <ul className="grid gap-6 md:grid-cols-2">
          {portfolioProjects.map((p, index) => (
            <li
              key={p.title}
              className="opacity-0-animate animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.12}s` }}
            >
              <article
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-el-surface transition-all duration-500 hover:-translate-y-1 glow-card"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden bg-linear-to-br ${p.accent}`}
                  aria-hidden
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-40 transition-opacity duration-500 group-hover:opacity-70">
                    <div className="h-32 w-32 rounded-full border border-white/20 bg-white/5 blur-sm transition-transform duration-700 group-hover:scale-125" />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-el-void via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-el-blue backdrop-blur-sm">
                    {p.tag}
                  </span>
                </div>
                <div className="relative p-6 md:p-8">
                  <h3 className="font-display text-xl font-semibold text-white transition-colors duration-300 group-hover:text-el-blue">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60 transition-all duration-500 group-hover:text-white/80">
                    {p.description}
                  </p>
                  <div className="mt-4 h-0.5 w-0 rounded-full bg-linear-to-r from-el-blue to-el-purple transition-all duration-500 group-hover:w-24" />
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
