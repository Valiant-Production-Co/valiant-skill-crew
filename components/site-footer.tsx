export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-gold/50 bg-secondary font-display text-lg font-bold text-gold">
            V
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
              Valiant Garage Door LLC
            </span>
            <span className="text-xs text-muted-foreground">
              Excellence is Our Only Standard™
            </span>
          </div>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          We Bring The Silence™
        </p>
      </div>
      <div className="border-t border-border/60 py-4">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Valiant Garage Door LLC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
