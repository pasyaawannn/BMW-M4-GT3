"use client"

import { useEffect, useRef, useState } from "react"

const specs = [
  { label: "Engine", value: "P58 3.0L Twin-Turbo Inline-6" },
  { label: "Power Output", value: "590 HP (440 kW)" },
  { label: "Torque", value: "650 Nm" },
  { label: "Transmission", value: "6-Speed Sequential Racing" },
  { label: "Weight", value: "1,310 kg (2,888 lbs)" },
  { label: "Drivetrain", value: "Rear-Wheel Drive" },
  { label: "Top Speed", value: "295+ km/h" },
  { label: "0-100 km/h", value: "~3.0 seconds" },
  { label: "Aerodynamics", value: "Active Rear Wing, Full Splitter" },
  { label: "Brakes", value: "6-Piston Front, 4-Piston Rear" },
  { label: "Suspension", value: "4-Way Adjustable Dampers" },
  { label: "Fuel System", value: "FIA-Compliant 120L Cell" },
]

const highlights = [
  { number: "590", suffix: "HP", label: "Maximum Power" },
  { number: "650", suffix: "Nm", label: "Peak Torque" },
  { number: "1,310", suffix: "kg", label: "Dry Weight" },
  { number: "295", suffix: "+km/h", label: "Top Speed" },
]

export function SpecsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="specs" className="py-24 md:py-32 bg-card" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className={`text-center mb-16 opacity-0 ${visible ? "animate-fade-up" : ""}`}>
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-4">
            Technical Data
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Specifications
          </h2>
        </div>

        {/* Key Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, i) => (
            <div
              key={item.label}
              className={`text-center p-6 border border-border rounded-sm opacity-0 ${
                visible ? "animate-count" : ""
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex items-baseline justify-center gap-1">
                <span
                  className="text-4xl md:text-5xl font-bold text-primary"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.number}
                </span>
                <span className="text-sm md:text-base text-muted-foreground font-semibold">
                  {item.suffix}
                </span>
              </div>
              <p className="mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Spec Table */}
        <div
          className={`max-w-3xl mx-auto opacity-0 ${
            visible ? "animate-fade-up animation-delay-400" : ""
          }`}
        >
          <div className="divide-y divide-border">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center justify-between py-4 group hover:bg-secondary/50 px-4 -mx-4 transition-colors rounded-sm"
              >
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  {spec.label}
                </span>
                <span className="text-sm font-semibold text-foreground text-right">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
