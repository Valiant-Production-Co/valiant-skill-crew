import { products } from '@/lib/products'
import { ProductCard } from './product-card'

export function Lineup() {
  return (
    <section id="lineup" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="mb-10 flex flex-col gap-3 border-b border-border/60 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            The Full Lineup
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-balance sm:text-5xl">
            Four Pieces. One Standard.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Every piece carries the Valiant crest. Toggle the jackets to see the
          embroidered back — the crest that started it all.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
