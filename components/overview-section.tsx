"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function OverviewSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="overview" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div
            className={`opacity-0 ${visible ? "animate-slide-left" : ""}`}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-4">
              Overview
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Engineered for
              <br />
              <span className="text-primary">Victory</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-base md:text-lg">
              The BMW M4 GT3 is the pinnacle of BMW M Motorsport{"'"}s racing
              technology. Developed as a successor to the legendary BMW M6 GT3, it
              combines cutting-edge aerodynamics with a powerful twin-turbocharged
              inline-six engine to deliver unmatched performance on the world{"'"}s most
              prestigious racing circuits.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-base md:text-lg">
              From the Nurburgring 24 Hours to the GT World Challenge, the M4 GT3
              has proven itself as a dominant force in GT racing, accumulating
              victories across multiple championships worldwide.
            </p>
          </div>

          {/* Image */}
          <div
            className={`relative aspect-[4/3] rounded-sm overflow-hidden opacity-0 ${
              visible ? "animate-slide-right" : ""
            }`}
          >
            <Image
              src="/images/bmw-m4-gt3-side.jpg"
              alt="BMW M4 GT3 on the race track at speed"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
