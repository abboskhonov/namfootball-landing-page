import { Button } from "@/components/ui/button"
import { IconArrowRight, IconBrandApple, IconBrandGooglePlay } from "@tabler/icons-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] w-full items-center justify-start overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80"
          alt="Soccer stadium"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-32 text-left lg:px-16">
        <span className="mb-8 inline-block text-sm font-medium uppercase tracking-widest text-white/70">
          🎥 Namangandagi N1 Media Turnir
        </span>

        <h1 className="mb-6 max-w-4xl text-6xl font-black uppercase tracking-tight text-white sm:text-7xl lg:text-8xl">
          NamFootball
        </h1>

        <p className="mb-12 max-w-2xl text-xl leading-relaxed text-white/80">
          Namanganning eng shov-shuvli media futbol chempionati!
        </p>

        <div className="flex flex-col items-start gap-4 sm:flex-row">
          <Button className="h-12 rounded-full bg-white px-6 text-sm font-semibold text-black hover:bg-white/90">
            <IconBrandApple className="mr-2" size={20} />
            App Store
          </Button>
          <Button className="h-12 rounded-full bg-white px-6 text-sm font-semibold text-black hover:bg-white/90">
            <IconBrandGooglePlay className="mr-2" size={20} />
            Google Play
          </Button>
          <Button
            variant="outline"
            asChild
            className="h-12 rounded-full border-white/30 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
          >
            <a href="#registration">
              Jamoani Ro'yxatdan O'tkazish
              <IconArrowRight className="ml-2" size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
