import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section
      id="about"
      className="relative px-4 py-20 md:px-8 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="about-heading"
          title="About ElTechnologies"
          subtitle="We are a creative digital gift studio—where emotional storytelling meets modern technology."
        />
        <div className="mx-auto max-w-3xl space-y-6 text-center text-base leading-relaxed text-white/70 md:text-lg">
          <p>
            Every project starts with a feeling: pride, longing, celebration, or quiet gratitude. We shape that
            feeling into a fully custom-made digital gift—something they can open on their phone or laptop and
            immediately know it was built for them alone.
          </p>
          <p>
            From interactive pages to motion-rich video and playful mini-games, we combine craft, code, and care so
            your message lands with warmth—not cold tech, but technology in service of connection.
          </p>
        </div>
      </div>
    </section>
  )
}
