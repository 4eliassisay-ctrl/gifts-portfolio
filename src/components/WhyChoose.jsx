import { whyChoose } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

export function WhyChoose() {
  return (
    <section
      id="why-us"
      className="relative px-4 py-20 md:px-8 md:py-28"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="why-heading"
          title="Why Choose ElTechnologies"
          subtitle="Built for real relationships—not generic templates."
        />
        <ul className="mx-auto grid max-w-3xl gap-4">
          {whyChoose.map((line) => (
            <li
              key={line}
              className="flex items-start gap-4 rounded-xl border border-white/8 bg-el-surface/50 px-5 py-4 transition-all duration-300 hover:border-el-blue/30 hover:bg-el-card/40"
            >
              <span
                className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-el-blue/20 text-el-blue"
                aria-hidden
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-base text-white/80">{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
