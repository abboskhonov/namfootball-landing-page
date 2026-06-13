import { Button } from "@/components/ui/button"
import { IconBrandApple, IconBrandGooglePlay, IconBrandTelegram, IconCalendar, IconListNumbers, IconTrophy, IconUser } from "@tabler/icons-react"

export function AppSection() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-24 lg:px-16">
      <div className="container mx-auto">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-white/50">
            Bizning Ilova va Bot
          </span>
          <h2 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
            Hamma narsa cho'ntakda.
          </h2>
          <p className="text-lg leading-relaxed text-white/70">
            O'yinlar jadvali, natijalar, to'purarlar va futbolchilar reytingi —
            bularning barchasi ilovada va Telegram botda.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white/5 p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <IconBrandApple className="text-white" size={24} />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">iOS & Android Ilovamiz</h3>
            <ul className="mb-8 space-y-4">
              {[
                { icon: IconCalendar, text: "Turnir jadvallari va o'yinlar taqvimi" },
                { icon: IconTrophy, text: "To'purarlar ro'yxati" },
                { icon: IconUser, text: "Har bir futbolchining shaxsiy reyting ballari" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-white/70">
                  <item.icon size={20} className="mt-0.5 shrink-0 text-white/50" />
                  {item.text}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button className="h-11 rounded-full bg-white px-5 text-sm font-semibold text-black hover:bg-white/90">
                <IconBrandApple className="mr-2" size={18} />
                App Store
              </Button>
              <Button className="h-11 rounded-full bg-white px-5 text-sm font-semibold text-black hover:bg-white/90">
                <IconBrandGooglePlay className="mr-2" size={18} />
                Google Play
              </Button>
            </div>
          </div>

          <div className="rounded-3xl bg-[#229ED9]/10 p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#229ED9]/20">
              <IconBrandTelegram className="text-[#229ED9]" size={24} />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">Telegram Bot</h3>
            <ul className="mb-8 space-y-4">
              {[
                { icon: IconListNumbers, text: "O'yin natijalari haqida tezkor bildirishnomalar" },
                { icon: IconTrophy, text: "Jonli gollar va muhim lahzalar" },
                { icon: IconCalendar, text: "Kun tartibi va eslatmalar" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-white/70">
                  <item.icon size={20} className="mt-0.5 shrink-0 text-[#229ED9]" />
                  {item.text}
                </li>
              ))}
            </ul>
            <Button className="h-11 rounded-full bg-[#229ED9] px-5 text-sm font-semibold text-white hover:bg-[#229ED9]/90">
              <IconBrandTelegram className="mr-2" size={18} />
              Botga Ulanish
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
