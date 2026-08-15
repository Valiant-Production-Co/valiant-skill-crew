import Image from 'next/image'

export function Showcase() {
  return (
    <section id="showcase" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="mb-10 text-center">
        <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Every Angle
        </span>
        <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-balance sm:text-5xl">
          The Signature Bomber
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border/60 bg-secondary">
          <Image
            src="/products/black-bomber-orange-v.jpeg"
            alt="Signature hooded bomber, front view with orange script V"
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover"
          />
          <span className="absolute bottom-3 left-3 rounded-sm bg-background/85 px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground backdrop-blur">
            Front
          </span>
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border/60 bg-secondary">
          <Image
            src="/products/jacket-back-crest.jpeg"
            alt="Signature hooded bomber, back view with embroidered crest"
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover object-top"
          />
          <span className="absolute bottom-3 left-3 rounded-sm bg-background/85 px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground backdrop-blur">
            Back Crest
          </span>
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border/60 bg-secondary">
          <Image
            src="/products/black-hoodie-sleeve.jpeg"
            alt="Tech zip hoodie, side view with gold sleeve signature"
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover"
          />
          <span className="absolute bottom-3 left-3 rounded-sm bg-background/85 px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground backdrop-blur">
            Sleeve Detail
          </span>
        </div>
      </div>
    </section>
  )
}
