import Link from 'next/link'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold/50 bg-secondary font-display text-lg font-bold text-gold">
            V
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
              Valiant Skill Crew
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Clothing Brand
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#lineup" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Lineup
          </a>
          <a href="#crest" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            The Crest
          </a>
          <a href="#showcase" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Showcase
          </a>
        </nav>
        <a
          href="#lineup"
          className="inline-flex h-10 items-center rounded-sm bg-gold px-5 font-display text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90"
        >
          Shop the Line
        </a>
      </div>
    </header>
  )
}
