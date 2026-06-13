import { createFileRoute } from "@tanstack/react-router"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { AppSection } from "@/components/AppSection"
import { Registration } from "@/components/Registration"
import { Sponsors } from "@/components/Sponsors"
import { Founder } from "@/components/Founder"
import { Footer } from "@/components/Footer"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans antialiased selection:bg-[#E2FF00] selection:text-black">
      {/* Cinematic Film Grain Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <Navbar />
      <Hero />
      <About />
      <AppSection />
      <Registration />
      <Sponsors />
      <Founder />
      <Footer />
    </div>
  )
}
