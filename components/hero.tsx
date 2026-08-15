import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-secondary/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-gold">
            Excellence is Our Only Standard
          </span>
          <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            We Bring
            <br />
            <span className="text-gold">The Silence</span>
          </h1>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            The official apparel collection from Valiant Garage Door LLC. Built
            like the work — heavy, quiet, and finished to the last stitch. Four
            signature pieces, one standard.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#lineup"
              className="inline-flex h-12 items-center rounded-sm bg-gold px-7 font-display text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              View the Lineup
            </a>
            <a
              href="#crest"
              className="inline-flex h-12 items-center rounded-sm border border-border px-7 font-display text-sm font-semibold uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-secondary"
            >
              The Crest
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-b from-secondary/40 to-transparent" />
          <div className="relative aspect-square overflow-hidden rounded-lg border border-border/60 bg-secondary">
            <Image
              src="/products/jacket-showcase.jpeg"
              alt="Valiant Garage Door signature jacket shown from front, back, and detail angles"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-4 rounded-sm border border-gold/40 bg-background/90 px-4 py-2 backdrop-blur">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Signature Hooded Bomber
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
