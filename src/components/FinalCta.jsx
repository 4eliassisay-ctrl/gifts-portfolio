import { InstagramButton } from './InstagramButton'

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative px-4 py-20 md:px-8 md:py-28"
      aria-labelledby="cta-heading"
    >
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-el-blue/20 bg-linear-to-br from-el-card via-el-surface to-el-card p-10 text-center md:p-16 glow-ring">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-el-blue/20 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-el-purple/25 blur-3xl" aria-hidden />

        <h2
          id="cta-heading"
          className="relative font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
        >
          Ready to create something{' '}
          <span className="text-gradient">unforgettable?</span>
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-white/65">
          Tell us who it’s for and what you want them to feel—we’ll handle the rest.
        </p>
        <div className="relative mt-10 flex justify-center">
          <InstagramButton variant="cta">Message us on Instagram</InstagramButton>
        </div>
      </div>
    </section>
  )
}
