import { InstagramButton } from './InstagramButton'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pb-24 pt-28 md:px-8 md:pb-32 md:pt-32"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-el-purple/30 blur-3xl animate-glow-pulse"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-el-blue/25 blur-3xl animate-glow-pulse"
        style={{ animationDelay: '1.2s' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-el-blue/90 opacity-0-animate animate-fade-up">
          Digital gift studio
        </p>
        <h1
          id="hero-heading"
          className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white opacity-0-animate animate-fade-up animate-delay-100 md:text-6xl lg:text-7xl"
        >
          Turn Emotions Into{' '}
          <span className="text-gradient">Technology</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 opacity-0-animate animate-fade-up animate-delay-200 md:text-xl">
          Personalized digital gifts — interactive websites, videos, mini-games, and 3D experiences.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row opacity-0-animate animate-fade-up animate-delay-300">
          <InstagramButton variant="primary" className="min-w-[220px] !py-3.5">
            Order via Instagram
          </InstagramButton>
          <a
            href="#portfolio"
            className="text-sm font-medium text-white/50 transition-colors hover:text-el-purple"
          >
            See demo projects →
          </a>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0-animate animate-fade-up animate-delay-400"
        aria-hidden
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/20 pt-2">
          <span className="h-2 w-1 animate-bounce rounded-full bg-el-blue/80" />
        </div>
      </div>
    </section>
  )
}
