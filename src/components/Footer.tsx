import { IconBrandInstagram, IconBrandTelegram, IconBrandYoutube } from "@tabler/icons-react"

export function Footer() {
  return (
    <footer className="bg-[#050505] px-6 py-12 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-12 sm:flex-row">
          <a href="#" className="text-xl font-bold tracking-tight text-white">
            NamFootball
          </a>

          <div className="flex items-center gap-6">
            <a href="#" className="text-white/50 transition-colors hover:text-white">
              <IconBrandTelegram size={22} />
            </a>
            <a href="#" className="text-white/50 transition-colors hover:text-white">
              <IconBrandInstagram size={22} />
            </a>
            <a href="#" className="text-white/50 transition-colors hover:text-white">
              <IconBrandYoutube size={22} />
            </a>
          </div>

          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} NamFootball. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  )
}
