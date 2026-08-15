'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { Product } from '@/lib/products'

const accentClasses: Record<Product['accent'], string> = {
  gold: 'text-gold border-gold/40',
  'silence-red': 'text-silence-red border-silence-red/40',
  'v-orange': 'text-v-orange border-v-orange/40',
}

export function ProductCard({ product }: { product: Product }) {
  const colorways = product.colorways
  const [activeIdx, setActiveIdx] = useState(0)
  const [showBack, setShowBack] = useState(false)

  const active = colorways ? colorways[activeIdx] : null
  const frontImage = active ? active.front : product.image
  const backImage = active ? active.back : product.backImage
  const hasBack = Boolean(backImage)
  const currentImage = showBack && backImage ? backImage : frontImage
  const colorwayLabel = active ? active.label : product.colorway

  function selectColorway(idx: number) {
    setActiveIdx(idx)
    // reset to front so we never show a back that a colorway doesn't have
    setShowBack(false)
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border/60 bg-card transition-colors hover:border-gold/40">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <Image
          src={currentImage || '/placeholder.svg'}
          alt={`${product.name} — ${colorwayLabel}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-sm bg-gold px-2.5 py-1 font-display text-[10px] font-semibold uppercase tracking-[0.15em] text-primary-foreground">
            {product.badge}
          </span>
        )}
        {hasBack && (
          <button
            type="button"
            onClick={() => setShowBack((v) => !v)}
            className="absolute bottom-3 right-3 rounded-sm border border-border bg-background/85 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-foreground backdrop-blur transition-colors hover:bg-background"
          >
            {showBack ? 'Front' : 'Back'}
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <span
            className={`rounded-sm border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] ${accentClasses[product.accent]}`}
          >
            {product.category}
          </span>
          <span className="font-display text-lg font-semibold text-foreground">
            ${product.price}
          </span>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-foreground text-balance">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground">{colorwayLabel}</p>
        </div>

        {colorways && (
          <div className="flex items-center gap-2" role="group" aria-label="Choose a colorway">
            {colorways.map((cw, idx) => {
              const isActive = idx === activeIdx
              return (
                <button
                  key={cw.id}
                  type="button"
                  onClick={() => selectColorway(idx)}
                  aria-label={cw.label}
                  aria-pressed={isActive}
                  className={`h-7 w-7 rounded-full border-2 transition-transform ${
                    isActive
                      ? 'border-gold scale-110'
                      : 'border-border hover:border-muted-foreground'
                  }`}
                  style={{ backgroundColor: cw.swatch }}
                />
              )
            })}
          </div>
        )}

        <p className="text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <ul className="mt-1 flex flex-col gap-1.5">
          {product.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <span className={`h-1 w-1 rounded-full ${accentClasses[product.accent].split(' ')[0].replace('text-', 'bg-')}`} />
              {feature}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="mt-auto inline-flex h-11 items-center justify-center rounded-sm bg-secondary font-display text-xs font-semibold uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-gold hover:text-primary-foreground"
        >
          Add to Order
        </button>
      </div>
    </article>
  )
}
