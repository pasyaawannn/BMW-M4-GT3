"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  { src: "/images/bmw-m4-gt3-hero.jpg", alt: "BMW M4 GT3 dramatic studio shot" },
  { src: "/images/bmw-m4-gt3-side.jpg", alt: "BMW M4 GT3 side profile on track" },
  { src: "/images/bmw-m4-gt3-engine.jpg", alt: "BMW M4 GT3 engine bay" },
  { src: "/images/bmw-m4-gt3-cockpit.jpg", alt: "BMW M4 GT3 cockpit interior" },
  { src: "/images/bmw-m4-gt3-track.jpg", alt: "BMW M4 GT3 racing on circuit" },
  { src: "/images/bmw-m4-gt3-rear.jpg", alt: "BMW M4 GT3 rear view" },
]

export function GallerySection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

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

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === "Escape") setLightboxIndex(null)
      if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : null))
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null))
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [lightboxIndex])

  return (
    <>
      <section id="gallery" className="py-24 md:py-32 bg-card" ref={ref}>
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className={`text-center mb-16 opacity-0 ${visible ? "animate-fade-up" : ""}`}>
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-4">
              Gallery
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Every Angle, Pure Power
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {images.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(i)}
                className={`relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer group opacity-0 ${
                  visible ? "animate-fade-up" : ""
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
                aria-label={`View ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-foreground text-sm font-semibold uppercase tracking-wider bg-background/60 px-4 py-2 rounded-sm backdrop-blur-sm">
                    View
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightboxIndex(null)
            }}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)
            }}
            className="absolute left-4 md:left-8 text-foreground hover:text-primary transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightboxIndex((lightboxIndex + 1) % images.length)
            }}
            className="absolute right-4 md:right-8 text-foreground hover:text-primary transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div
            className="relative w-[90vw] h-[70vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Dots */}
          <div className="absolute bottom-8 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex(i)
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === lightboxIndex ? "bg-primary" : "bg-muted-foreground/40"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
