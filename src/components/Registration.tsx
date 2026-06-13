import { Button } from "@/components/ui/button"
import { IconFileText, IconUsers, IconCalendarCheck, IconArrowRight } from "@tabler/icons-react"

const steps = [
  {
    icon: IconFileText,
    title: "Arizani to'ldirish",
    description: "Online ariza yoki Telegram orqali menejer bilan bog'laning."
  },
  {
    icon: IconUsers,
    title: "Tarkibni tasdiqlash",
    description: "Jamoangiz tarkibi va logotipini yuboring."
  },
  {
    icon: IconCalendarCheck,
    title: "Chempionatda ishtirok etish",
    description: "Rasmiy o'yinlar jadvaliga qo'shiling va maydonga tushing."
  }
]

export function Registration() {
  return (
    <section id="registration" className="bg-[#050505] px-6 py-24 lg:px-16">
      <div className="container mx-auto">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-white/50">
            Jamoalar uchun
          </span>
          <h2 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
            Ro'yxatdan o'ting va o'ynang.
          </h2>
          <p className="text-lg leading-relaxed text-white/70">
            Yangi mavsumda o'z jamoangiz bilan qatnashmoqchimisiz? Hozir ariza
            qoldiring!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl bg-white/5 p-8 transition-colors hover:bg-white/[0.07]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <step.icon className="mb-4 text-white" size={28} />
              <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
              <p className="leading-relaxed text-white/60">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button className="h-12 rounded-full bg-white px-8 text-sm font-semibold text-black hover:bg-white/90">
            Jamoani Ro'yxatdan O'tkazish
            <IconArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}
