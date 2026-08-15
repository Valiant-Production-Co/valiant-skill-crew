import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Lineup } from '@/components/lineup'
import { CrestSection } from '@/components/crest-section'
import { Showcase } from '@/components/showcase'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-dvh bg-background">
      <SiteHeader />
      <Hero />
      <Lineup />
      <CrestSection />
      <Showcase />
      <SiteFooter />
    </main>
  )
}
