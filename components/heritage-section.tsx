"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const timeline = [
  {
    year: "2020",
    title: "Development Begins",
    description:
      "BMW M Motorsport starts development of the M4 GT3, based on the new G82 M4 platform with the goal of creating the most competitive GT3 car ever built.",
  },
  {
    year: "2021",
    title: "Extensive Testing",
    description:
      "Over 14,000 kilometers of testing across multiple circuits worldwide. The car undergoes rigorous development at the Nurburgring Nordschleife.",
  },
  {
    year: "2022",
    title: "Competition Debut",
    description:
      "The BMW M4 GT3 makes its racing debut at the Daytona 24 Hours, immediately showing its competitiveness against established GT3 rivals.",
  },
  {
    year: "2023",
    title: "Championship Victories",
    description:
      "Multiple overall and class victories across GTWC, IMSA, and national GT championships. The M4 GT3 becomes a proven winner worldwide.",
  },
  {
    year: "2024",
    title: "Global Dominance",
    description:
      "The M4 GT3 solidifies its position as the benchmark in GT3 racing, with customer teams achieving podiums and victories across every major series.",
  },
]

export function HeritageSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="heritage" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className={`text-center mb-16 opacity-0 ${visible ? "animate-fade-up" : ""}`}>
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-4">
            Heritage
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            A Legacy of Motorsport
          </h2>
        </div>

        {/* Hero Track Image */}
        <div
          className={`relative aspect-[21/9] rounded-sm overflow-hidden mb-16 opacity-0 ${
            visible ? "animate-fade-up animation-delay-200" : ""
          }`}
        >
          <Image
            src="/images/bmw-m4-gt3-track.jpg"
            alt="BMW M4 GT3 racing on circuit"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
              Proven on Track
            </p>
            <p
              className="text-foreground text-2xl md:text-4xl font-bold uppercase tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Where Champions Are Made
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 opacity-0 ${
                  visible ? "animate-fade-up" : ""
                } ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                style={{ animationDelay: `${0.3 + i * 0.15}s` }}
              >
                {/* Content */}
                <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <span
                    className="text-primary text-3xl md:text-4xl font-bold"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.year}
                  </span>
                  <h3 className="text-foreground font-bold text-lg mt-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2 max-w-md inline-block">
                    {item.description}
                  </p>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-2 md:mt-0 ring-4 ring-background" />

                {/* Spacer for other side */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
