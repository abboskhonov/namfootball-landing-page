import { Button } from "@/components/ui/button"
import { IconMenu2 } from "@tabler/icons-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-black/20 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-16">
        <a href="#" className="text-xl font-bold tracking-tight text-white">
          Namfootball
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {["Turnir", "Jamoalar", "Ilova", "Yangiliklar"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 lg:hidden">
            <IconMenu2 size={22} />
          </Button>
        </div>
      </div>
    </nav>
  )
}
