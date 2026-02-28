export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-foreground font-bold text-lg tracking-wider">BMW</span>
              <span className="text-primary text-xs tracking-[0.3em] font-semibold ml-2">M4 GT3</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The ultimate GT3 racing machine from BMW M Motorsport. Born to dominate the world{"'"}s greatest circuits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Overview", href: "#overview" },
                { label: "Specifications", href: "#specs" },
                { label: "Performance", href: "#performance" },
                { label: "Gallery", href: "#gallery" },
                { label: "Heritage", href: "#heritage" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Motorsport */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">
              Motorsport
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "GT World Challenge",
                "IMSA WeatherTech",
                "Nurburgring 24H",
                "Intercontinental GT",
                "National GT Series",
              ].map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* BMW M Motorsport */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">
              BMW M Motorsport
            </h4>
            <ul className="flex flex-col gap-2">
              {["Customer Racing", "Factory Teams", "Technical Support", "Parts & Service", "Racing Academy"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            BMW M4 GT3 Showcase. Built with passion for motorsport.
          </p>
          <p className="text-muted-foreground text-xs">
            This is a fan-made showcase website. Not affiliated with BMW AG.
          </p>
        </div>
      </div>
    </footer>
  )
}
