import { Link } from "react-router-dom";

const footerLinks = {
  Product: [
    { label: "Features", to: "/features" },
    { label: "Pricing", to: "/pricing" },
    { label: "Comparisons", to: "/comparisons" },
  ],
  Company: [
    { label: "About", to: "/about" },
    { label: "Documentation", to: "https://sfdx.duckdns.org/docs", external: true },
  ],
  Legal: [
    { label: "Privacy", to: "/privacy" },
    { label: "Terms", to: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background relative overflow-hidden">
      <div className="container py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <span className="font-mono text-sm font-bold text-primary-foreground">SF</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">SFDX</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-[240px] leading-relaxed">
              Deploy Salesforce metadata with surgical precision.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold mb-4 text-foreground">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SFDX DevOps Platform. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built for Salesforce teams who ship with confidence.
          </p>
        </div>
      </div>

      {/* Giant watermark */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden">
        <span
          className="block text-[20vw] font-bold leading-none tracking-tighter text-border/20"
          style={{ WebkitTextStroke: '1px hsl(var(--border) / 0.15)' }}
        >
          SFDX
        </span>
      </div>
    </footer>
  );
}
