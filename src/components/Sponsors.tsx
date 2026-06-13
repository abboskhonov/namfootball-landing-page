import { Button } from "@/components/ui/button"
import { IconFileDownload, IconBrandTelegram, IconUsers, IconDeviceTv } from "@tabler/icons-react"

export function Sponsors() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-24 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-white/50">
              Homiylik va Hamkorlik
            </span>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
              Brendingiz stadionda va efirda.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-white/70">
              NamFootball — Namangandagi eng faol yoshlar auditoriyasini
              to'plagan lokal marketing kanali. Brendingiz translyatsiyalarda va
              stadionda ko'rinadi.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white/5 p-5">
                <IconDeviceTv className="mb-3 text-white/50" size={24} />
                <p className="text-2xl font-bold text-white">10M+</p>
                <p className="text-sm text-white/50">Umumiy ko'rishlar</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-5">
                <IconUsers className="mb-3 text-white/50" size={24} />
                <p className="text-2xl font-bold text-white">50+</p>
                <p className="text-sm text-white/50">Jamoalar</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="h-11 rounded-full bg-white px-5 text-sm font-semibold text-black hover:bg-white/90">
                <IconFileDownload className="mr-2" size={18} />
                Hamkorlik PDF
              </Button>
              <Button
                variant="outline"
                className="h-11 rounded-full border-white/20 bg-transparent px-5 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                <IconBrandTelegram className="mr-2" size={18} />
                Bog'lanish
              </Button>
            </div>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1522778119026-d647f0565c6a?auto=format&fit=crop&q=80"
              alt="Sponsor branding at stadium"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
