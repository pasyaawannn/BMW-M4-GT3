"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bmw-m4-gt3-hero.jpg"
          alt="BMW M4 GT3 race car in dramatic studio lighting"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary text-sm md:text-base tracking-[0.4em] uppercase font-semibold mb-4">
            Born to Race
          </p>
        </div>

        <h1
          className={`font-[var(--font-heading)] text-5xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tighter text-foreground leading-none transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ fontFamily: "var(--font-heading)" }}
        >
          BMW M4 GT3
        </h1>

        <p
          className={`mt-6 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          The ultimate GT3 racing machine. 590 HP of pure motorsport engineering,
          crafted for the world{"'"}s most demanding circuits.
        </p>

        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#specs"
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors"
          >
            Explore Specs
          </a>
          <a
            href="#gallery"
            className="px-8 py-3 border border-foreground/30 text-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-foreground/10 transition-colors"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#overview" aria-label="Scroll down">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  )
}
