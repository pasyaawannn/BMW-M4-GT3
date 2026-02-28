"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Gauge, Wind, Cog, Shield } from "lucide-react"

const features = [
  {
    icon: Gauge,
    title: "Twin-Turbo Power",
    description:
      "The P58 3.0-liter twin-turbocharged inline-six delivers a staggering 590 HP, providing explosive acceleration and relentless top-end power on every straight.",
  },
  {
    icon: Wind,
    title: "Advanced Aerodynamics",
    description:
      "Every surface is sculpted for maximum downforce. The large rear wing, front splitter, and underbody diffuser work in harmony to keep the car planted at extreme speeds.",
  },
  {
    icon: Cog,
    title: "Sequential Gearbox",
    description:
      "The 6-speed sequential racing gearbox delivers lightning-fast shifts with paddle-actuated controls, optimized for minimum power loss during gear changes.",
  },
  {
    icon: Shield,
    title: "Safety Cell",
    description:
      "Built around an FIA-homologated safety cell with integrated roll cage, the M4 GT3 provides maximum driver protection while maintaining structural rigidity for performance.",
  },
]

export function PerformanceSection() {
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
    <section id="performance" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className={`text-center mb-16 opacity-0 ${visible ? "animate-fade-up" : ""}`}>
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-4">
            Performance
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Built Without Compromise
          </h2>
        </div>

        {/* Feature images row */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div
            className={`relative aspect-[16/10] rounded-sm overflow-hidden opacity-0 ${
              visible ? "animate-slide-left" : ""
            }`}
          >
            <Image
              src="/images/bmw-m4-gt3-engine.jpg"
              alt="BMW M4 GT3 twin-turbo inline-6 engine bay"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-foreground font-bold text-lg">P58 Powerplant</p>
              <p className="text-muted-foreground text-sm">590 HP Twin-Turbo I6</p>
            </div>
          </div>
          <div
            className={`relative aspect-[16/10] rounded-sm overflow-hidden opacity-0 ${
              visible ? "animate-slide-right" : ""
            }`}
          >
            <Image
              src="/images/bmw-m4-gt3-cockpit.jpg"
              alt="BMW M4 GT3 racing cockpit interior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-foreground font-bold text-lg">Racing Cockpit</p>
              <p className="text-muted-foreground text-sm">Purpose-Built for Victory</p>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`p-6 border border-border rounded-sm hover:border-primary/50 transition-all duration-300 group opacity-0 ${
                visible ? "animate-fade-up" : ""
              }`}
              style={{ animationDelay: `${0.3 + i * 0.15}s` }}
            >
              <feature.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-foreground font-bold text-base mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
