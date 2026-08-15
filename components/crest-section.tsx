import Image from 'next/image'

const crests = [
  {
    image: '/products/logo-crest.jpeg',
    label: 'The Crest',
    note: 'Riveted steel shield, gold script V.',
  },
  {
    image: '/products/logo-full-gray.jpeg',
    label: 'Full Mark',
    note: 'The complete lockup, print colorway.',
  },
  {
    image: '/products/crest-black.jpeg',
    label: 'Embroidered',
    note: 'Threaded onto black shell fabric.',
  },
]

export function CrestSection() {
  return (
    <section id="crest" className="border-y border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-5">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              The Mark
            </span>
            <h2 className="font-display text-4xl font-bold uppercase leading-tight tracking-tight text-balance sm:text-5xl">
              A Crest Built to
              <br />
              <span className="text-gold">Be Earned</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              At the center sits the riveted steel shield and the gold script
              V. Around it, the words that define the work:{' '}
              <span className="text-gold">Excellence is Our Only Standard</span>{' '}
              and <span className="text-silence-red">We Bring The Silence</span>.
              Every jacket carries it front and back.
            </p>
            <dl className="mt-2 grid grid-cols-2 gap-4">
              <div className="rounded-sm border border-border/60 bg-card p-4">
                <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Colorways
                </dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-foreground">
                  Gold · Red · Orange
                </dd>
              </div>
              <div className="rounded-sm border border-border/60 bg-card p-4">
                <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Finish
                </dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-foreground">
                  Embroidered
                </dd>
              </div>
            </dl>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-lg border border-border/60 bg-secondary">
              <Image
                src={crests[0].image || '/placeholder.svg'}
                alt="Close-up of the Valiant crest — steel shield with gold script V"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 rounded-sm bg-background/85 px-3 py-1.5 backdrop-blur">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                  {crests[0].label}
                </p>
                <p className="text-[11px] text-muted-foreground">{crests[0].note}</p>
              </div>
            </div>
            {crests.slice(1).map((crest) => (
              <div
                key={crest.label}
                className="relative aspect-square overflow-hidden rounded-lg border border-border/60 bg-secondary"
              >
                <Image
                  src={crest.image || '/placeholder.svg'}
                  alt={`Valiant crest — ${crest.label}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 rounded-sm bg-background/85 px-2.5 py-1 backdrop-blur">
                  <p className="font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground">
                    {crest.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
