export function Founder() {
  return (
    <section className="bg-[#050505] px-6 py-24 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="aspect-[3/4] max-w-md overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80"
                alt="Islom Jamoldinov"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-white/50">
              Asoschi Haqida
            </span>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
              Islom Jamoldinov
            </h2>
            <p className="mb-4 text-xl font-medium text-white/90">
              Tashkilotchi va G'oya muallifi
            </p>
            <p className="mb-6 text-lg leading-relaxed text-white/70">
              Islom Jamoldinov — Namangandagi yetakchi media futbol yaratuvchisi.
              U mahalliy havaskor futbolini professional media platformasiga
              aylantirishni muvaffaqiyatli amalga oshirdi.
            </p>
            <p className="text-lg leading-relaxed text-white/70">
              Har bir uchrashuvni katta shou sifatida ko'rib, NamFootballni
              shaharning eng yirik yoshlar sport-brendiga aylantirdi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
