import { IconPlayerPlay, IconDeviceTv, IconTrophy, IconUsers } from "@tabler/icons-react"

const highlights = [
  { icon: IconDeviceTv, label: "Har bir o'yin", value: "YouTube translyatsiyasi" },
  { icon: IconTrophy, label: "Mavsum yakuni", value: "Kubok va sovrinlar" },
  { icon: IconUsers, label: "Jamoalar", value: "50+ ishtirokchi" }
]

export function About() {
  return (
    <section className="bg-[#050505] px-6 py-24 lg:px-16">
      <div className="container mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-white/50">
            Turnir Haqida
          </span>
          <h2 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
            Bu shunchaki liga emas. Bu futbol-shou.
          </h2>
          <p className="text-lg leading-relaxed text-white/70">
            NamFootball — bu shunchaki havaskorlar ligasi emas. Bu har bir
            uchrashuvi YouTube'da translyatsiya qilinadigan, Namangandagi eng
            katta futbol-shoudir.
          </p>
        </div>

        <div className="relative mx-auto mb-16 aspect-video max-w-5xl overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80"
            alt="NamFootball match highlight"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-black transition-transform hover:scale-110">
              <IconPlayerPlay size={32} />
            </button>
          </div>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="text-center">
              <item.icon className="mx-auto mb-4 text-white/50" size={28} />
              <p className="text-xl font-bold text-white">{item.value}</p>
              <p className="mt-1 text-sm text-white/50">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
