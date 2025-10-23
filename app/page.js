import Link from "next/link";

const highlights = [
  {
    title: "Beachfront Villas",
    description:
      "Architectural villas with wraparound terraces, private plunge pools, and uninterrupted views of the Gulf of Thailand.",
    badge: "Signature Stays",
  },
  {
    title: "Wellness Journeys",
    description:
      "Holistic spa rituals that blend Thai healing traditions with island botanicals in serene jungle treatment salas.",
    badge: "Mind & Body",
  },
  {
    title: "Epicurean Dining",
    description:
      "Sunset tastings of locally caught seafood, bespoke beach picnics, and refined Thai cuisine crafted by resident chefs.",
    badge: "Dining",
  },
];

const experiences = [
  {
    title: "Island Immersions",
    copy:
      "Curated day trips to Ang Thong Marine Park, sunrise paddleboarding, and cultural excursions through nearby fishing villages.",
    icon: "🌊",
  },
  {
    title: "Art of Relaxation",
    copy:
      "Daily yoga, sound-bath meditation, and mindfulness workshops guided by in-house wellness experts.",
    icon: "🧘",
  },
  {
    title: "Tailored Celebrations",
    copy:
      "Intimate beachfront weddings, milestone gatherings, and corporate retreats supported by dedicated celebration curators.",
    icon: "🎉",
  },
];

const residenceCollections = [
  {
    name: "Pool Residences",
    summary:
      "Expansive multi-bedroom sanctuaries featuring infinity pools, outdoor living pavilions, and private butler service.",
  },
  {
    name: "Ocean Suites",
    summary:
      "Elegant suites with floor-to-ceiling glass, soaking tubs framed by the horizon, and elevated lounges for sundowners.",
  },
  {
    name: "Jungle Hideaways",
    summary:
      "Secluded hillside retreats immersed in tropical greenery with nature-inspired interiors and wraparound decks.",
  },
];

const testimonials = [
  {
    quote:
      "Every detail felt intentional—from the fragrant cold towels on arrival to bespoke excursions that revealed the island's soul.",
    guest: "Ananya & Marc",
    origin: "Singapore",
  },
  {
    quote:
      "The spa's moonlit journey reset our minds completely. Pairing it with chef's tasting menu made for a perfect finale.",
    guest: "Louise M.",
    origin: "France",
  },
];

const contactDetails = [
  {
    label: "Reservations",
    value: "+66 (0) 77 933 888",
    href: "tel:+6677933888",
  },
  {
    label: "Email",
    value: "escape@thaipaipan.com",
    href: "mailto:escape@thaipaipan.com",
  },
  {
    label: "Location",
    value: "Koh Samui, Surat Thani 84320, Thailand",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-zinc-900 text-white">
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25) 0, rgba(255,255,255,0) 55%), radial-gradient(circle at 80% 0%, rgba(79,70,229,0.35) 0, rgba(79,70,229,0) 50%)",
        }} />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 py-24 sm:px-10 md:flex-row md:items-center md:py-32 lg:px-16">
          <div className="w-full md:w-7/12">
            <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium tracking-wide backdrop-blur">
              THAI PAIPAN PRIVATE RESORT
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              Reimagine island luxury on Koh Samui's most exclusive shoreline.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
              Discover a secluded world where contemporary Thai design, curated wellness, and intuitive service converge. Thai Paipan crafts bespoke journeys that celebrate the rhythm of the sea and the spirit of the island.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#residences"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-950 transition hover:bg-indigo-100"
              >
                Explore Residences
              </Link>
              <Link
                href="#experiences"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Tailored Experiences
              </Link>
            </div>
          </div>
          <div className="w-full space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur md:w-5/12">
            <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-indigo-100">
              Signature Highlights
            </h2>
            <div className="space-y-6">
              {highlights.map((highlight) => (
                <article key={highlight.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-indigo-900/20">
                  <span className="text-xs font-semibold uppercase tracking-widest text-indigo-200">
                    {highlight.badge}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-sm text-indigo-100/80">
                    {highlight.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="grid gap-10 md:grid-cols-[1.25fr_1fr] md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">
                Essence of Thai Paipan
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-zinc-900 md:text-4xl">
                Elevated hospitality shaped by the tides and the forest canopy.
              </h2>
              <p className="mt-6 text-lg text-zinc-600">
                Every stay is choreographed by a personal Experience Curator, ensuring every sunrise meditation, island discovery, and dining ritual reflects your rhythm. We weave local craftsmanship into refined design, creating restful spaces grounded in authenticity.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {experiences.map((experience) => (
                  <article key={experience.title} className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm shadow-indigo-100/60">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-2xl">
                      {experience.icon}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-zinc-900">
                      {experience.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600">
                      {experience.copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>
            <aside className="flex flex-col justify-center gap-6 rounded-3xl border border-indigo-100 bg-indigo-50/50 p-10">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-700">
                  Private Transfers
                </h3>
                <p className="mt-3 text-base text-indigo-900">
                  Seaplane, yacht tender, or chauffeured luxury SUV arrivals coordinated to suit your schedule.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-700">
                  Sustainability
                </h3>
                <p className="mt-3 text-base text-indigo-900">
                  Solar-powered suites, zero single-use plastics, and partnerships that protect local coral reefs and communities.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-700">
                  Club Privileges
                </h3>
                <p className="mt-3 text-base text-indigo-900">
                  Exclusive lounge access with mixology ateliers, culinary residencies, and art showcases from regional creatives.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section id="residences" className="relative isolate overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-slate-100 py-24">
          <div className="absolute inset-y-0 -left-40 w-80 rounded-full bg-indigo-200/30 blur-3xl" />
          <div className="absolute inset-y-0 -right-40 w-96 rounded-full bg-sky-200/20 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-700">
                Secluded Residences
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-zinc-900 md:text-4xl">
                Crafted sanctuaries tuned for privacy, indulgence, and effortless living.
              </h2>
              <p className="mt-6 text-lg text-zinc-600">
                Each residence is designed with bespoke furnishings, layered textures, and technology that disappears into the background. Butler teams ensure every desire—from bespoke wellness setups to cinematic evenings under the stars—is anticipated.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {residenceCollections.map((residence) => (
                <article key={residence.name} className="flex flex-col justify-between rounded-3xl border border-white/60 bg-white/80 p-8 shadow-lg shadow-indigo-200/40 backdrop-blur">
                  <h3 className="text-xl font-semibold text-indigo-900">
                    {residence.name}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-600">
                    {residence.summary}
                  </p>
                  <Link
                    href="#contact"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-indigo-700 hover:text-indigo-900"
                  >
                    Reserve your stay →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">
                Dining & Mixology
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-zinc-900 md:text-4xl">
                Flavours that dance between Thai heritage and modern gastronomy.
              </h2>
              <p className="text-lg text-zinc-600">
                From chef's table degustations to barefoot beach barbecues, our culinary philosophy honours island produce and artisan techniques. Pair dishes with our curated cellar of biodynamic wines and Thai-inspired craft cocktails.
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-zinc-900">Saaitara Restaurant</h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    Elevated cliffside dining at golden hour with panoramic ocean views.
                  </p>
                </div>
                <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-zinc-900">The Tides Bar</h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    Sunset lounge featuring Thai-infused mixology and live acoustic performances.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-indigo-100 bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500 p-10 text-white shadow-2xl">
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4) 0, rgba(255,255,255,0) 55%), radial-gradient(circle at 80% 80%, rgba(14,165,233,0.5) 0, rgba(14,165,233,0) 45%)",
              }} />
              <div className="relative space-y-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-100">
                  Wellness Atelier
                </h3>
                <p className="text-2xl font-semibold leading-snug">
                  Tailor your wellness blueprint with resident naturopaths, visiting yogis, and transformative sound healers.
                </p>
                <ul className="space-y-3 text-sm text-indigo-50/90">
                  <li>• Oceanfront hydrotherapy circuit</li>
                  <li>• Crystal energy journeys under the canopy</li>
                  <li>• Integrative nutrition consultations</li>
                </ul>
                <Link
                  href="#experiences"
                  className="inline-flex items-center text-sm font-semibold text-white hover:text-indigo-100"
                >
                  View all wellness programs →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="experiences" className="bg-zinc-900 py-24 text-white">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-200">
                  Curated Adventures
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                  Experiences designed to honour the rhythm of land and sea.
                </h2>
                <p className="mt-6 text-lg text-white/70">
                  Dive beneath coral gardens with marine biologists, embark on private longtail boat safaris, or learn Thai culinary secrets in immersive masterclasses. Our team curates personalised itineraries that unfold effortlessly.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                  Marine Discoveries
                </span>
                <span className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                  Cultural Journeys
                </span>
                <span className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                  Wellness Retreats
                </span>
              </div>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-indigo-500/20 backdrop-blur">
                <h3 className="text-xl font-semibold text-white">Sailing The Archipelago</h3>
                <p className="mt-3 text-sm text-white/70">
                  Charter our luxury catamaran for hidden lagoon swims, guided snorkelling, and a sunset champagne cruise.
                </p>
              </article>
              <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-indigo-500/20 backdrop-blur">
                <h3 className="text-xl font-semibold text-white">Jungle Canopy Trail</h3>
                <p className="mt-3 text-sm text-white/70">
                  Follow naturalists through lush trails, encountering cascading waterfalls and sacred temples along the way.
                </p>
              </article>
              <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-indigo-500/20 backdrop-blur">
                <h3 className="text-xl font-semibold text-white">Chef's Thai Atelier</h3>
                <p className="mt-3 text-sm text-white/70">
                  Harvest herbs from our garden, master classic recipes, and dine on your culinary creations under the stars.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">
                Voices from Our Guests
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-zinc-900 md:text-4xl">
                Moments that linger long after departure.
              </h2>
              <p className="mt-6 text-lg text-zinc-600">
                Stories from travellers who have discovered the artistry of Thai Paipan hospitality.
              </p>
            </div>
            <div className="grid gap-6">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.guest} className="rounded-3xl border border-indigo-100 bg-white p-8 shadow-md shadow-indigo-100/60">
                  <blockquote className="text-base text-zinc-700">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-indigo-700">
                    {testimonial.guest} · {testimonial.origin}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-br from-indigo-900 via-slate-900 to-zinc-900 py-24 text-white">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-200">
                  Begin Your Journey
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                  Connect with our Experience Curators to design your stay.
                </h2>
                <p className="mt-6 text-lg text-white/75">
                  Share your aspirations and we will craft a personalised itinerary, from arrival to farewell.
                </p>
              </div>
              <div className="w-full max-w-md space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex flex-col gap-1 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-200">
                      {detail.label}
                    </span>
                    {detail.href ? (
                      <Link
                        href={detail.href}
                        className="text-base font-semibold text-white hover:text-indigo-100"
                      >
                        {detail.value}
                      </Link>
                    ) : (
                      <span className="text-base font-semibold text-white/85">
                        {detail.value}
                      </span>
                    )}
                  </div>
                ))}
                <Link
                  href="https://maps.app.goo.gl/QXYZ"
                  className="inline-flex items-center text-sm font-semibold text-indigo-100 hover:text-white"
                >
                  View detailed directions →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Thai Paipan Private Resort. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
            <Link href="#residences" className="hover:text-zinc-700">
              Residences
            </Link>
            <Link href="#experiences" className="hover:text-zinc-700">
              Experiences
            </Link>
            <Link href="#contact" className="hover:text-zinc-700">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
