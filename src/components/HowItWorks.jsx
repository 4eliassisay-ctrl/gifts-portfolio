import { howItWorksSteps } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative px-4 py-20 md:px-8 md:py-28"
      aria-labelledby="how-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-el-purple/40 to-transparent" aria-hidden />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="how-heading"
          title="How It Works"
          subtitle="Four calm steps from idea to a link they’ll never forget."
        />
        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((item, i) => (
            <li key={item.step}>
              <article className="relative h-full rounded-2xl border border-white/8 bg-el-card/60 p-6 transition-all duration-300 hover:border-el-purple/25 glow-card">
                <span className="font-display text-4xl font-bold text-white/10">{item.step}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{item.body}</p>
                {i < howItWorksSteps.length - 1 && (
                  <span
                    className="absolute -right-4 top-1/2 hidden h-px w-8 bg-linear-to-r from-el-blue/50 to-transparent lg:block"
                    aria-hidden
                  />
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
