import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
          Margaux Giles
        </h1>
        <p className="text-xl text-muted">Product Designer</p>
      </header>

      {/* About */}
      <section className="mb-16">
        <p className="text-lg leading-relaxed text-muted">
          Product designer specializing in health tech and behavior change solutions. 
          Currently leading design and product strategy at Pelago Health, helping people 
          overcome substance use disorders through thoughtful digital experiences.
        </p>
      </section>

      {/* Featured Work */}
      <section className="mb-16">
        <h2 className="text-xs font-medium text-muted uppercase tracking-widest mb-8">
          Case Study
        </h2>

        <Link href="/work/wayfinder" className="group block">
          <div className="relative aspect-[16/9] mb-6 rounded-xl overflow-hidden bg-neutral-100">
            <Image
              src="/images/wayfinder/hero.png"
              alt="Wayfinder Project"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <h3 className="text-xl font-medium mb-2 group-hover:opacity-60 transition-opacity">
            Wayfinder: Redesigning the Home Experience
          </h3>
          <p className="text-muted">
            A complete redesign of Pelago's home experience that increased Week 5 retention by 56%.
          </p>
        </Link>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="text-xs font-medium text-muted uppercase tracking-widest mb-8">
          Experience
        </h2>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-medium">Senior Product Designer</h3>
              <span className="text-sm text-muted">2023 —</span>
            </div>
            <p className="text-muted">Pelago Health</p>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-medium">Product Designer</h3>
              <span className="text-sm text-muted">2021 — 2023</span>
            </div>
            <p className="text-muted">Pelago Health</p>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-medium">Founding Designer</h3>
              <span className="text-sm text-muted">2020 — 2021</span>
            </div>
            <p className="text-muted">Madefor</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-xs font-medium text-muted uppercase tracking-widest mb-8">
          Education
        </h2>

        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-medium">Stanford University</h3>
            <span className="text-sm text-muted">2019</span>
          </div>
          <p className="text-muted">M.S. Science, Technology and Society</p>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xs font-medium text-muted uppercase tracking-widest mb-8">
          Contact
        </h2>

        <div className="flex gap-6">
          <a 
            href="mailto:margaux.giles@gmail.com" 
            className="underline underline-offset-4 hover:opacity-60 transition-opacity"
          >
            Email
          </a>
          <a 
            href="https://linkedin.com/in/margauxgiles" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-60 transition-opacity"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border text-sm text-muted">
        San Francisco, California
      </footer>
    </main>
  );
}
