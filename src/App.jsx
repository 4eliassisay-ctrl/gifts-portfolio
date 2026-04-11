import { About } from './components/About'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Portfolio } from './components/Portfolio'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { WhyChoose } from './components/WhyChoose'

function App() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-el-card focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <HowItWorks />
        <WhyChoose />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

export default App
