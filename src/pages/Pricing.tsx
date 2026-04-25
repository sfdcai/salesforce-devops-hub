import { PageLayout } from "@/components/PageLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Get started with Salesforce DevOps fundamentals.",
    cta: "Start Free",
    href: "https://sfdx.duckdns.org",
    highlight: false,
    features: [
      { label: "1 project", included: true },
      { label: "2 orgs (source + destination)", included: true },
      { label: "2 GB storage", included: true },
      { label: "30 retrieves / month", included: true },
      { label: "30 diffs / month", included: true },
      { label: "10 deploys / month", included: true },
      { label: "7-day history retention", included: true },
      { label: "Advanced retry", included: false },
      { label: "Admin tools", included: false },
      { label: "Priority support", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    desc: "For teams shipping regularly across multiple orgs.",
    cta: "Get Pro",
    href: "https://sfdx.duckdns.org/register",
    highlight: true,
    features: [
      { label: "20 projects", included: true },
      { label: "10 orgs", included: true },
      { label: "50 GB storage", included: true },
      { label: "300 retrieves / month", included: true },
      { label: "300 diffs / month", included: true },
      { label: "100 deploys / month", included: true },
      { label: "90-day history retention", included: true },
      { label: "Advanced retry", included: true },
      { label: "Admin tools", included: true },
      { label: "Priority email support", included: true },
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact sales",
    desc: "Unlimited scale with SLA, RBAC, and audit logs.",
    cta: "Contact Sales",
    href: "mailto:sales@sfdx.duckdns.org",
    highlight: false,
    features: [
      { label: "Unlimited projects", included: true },
      { label: "Unlimited orgs", included: true },
      { label: "500 GB+ storage", included: true },
      { label: "Unlimited runs (fair-use)", included: true },
      { label: "Unlimited diffs", included: true },
      { label: "Unlimited deploys", included: true },
      { label: "365-day history retention", included: true },
      { label: "Configurable retry policies", included: true },
      { label: "RBAC + audit logs", included: true },
      { label: "SLA + onboarding", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <PageLayout>
      <section className="py-24 md:py-32">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="font-mono text-xs text-primary mb-4 block">PRICING</span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Start free. Scale as you ship.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No hidden fees. No per-seat licensing. Pay for the capacity your team needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 120}>
                <div
                  className={`rounded-lg border p-6 h-full flex flex-col ${
                    plan.highlight
                      ? "border-primary bg-card border-glow"
                      : "border-border bg-card"
                  }`}
                >
                  {plan.highlight && (
                    <span className="inline-block text-xs font-mono text-primary mb-3">MOST POPULAR</span>
                  )}
                  <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold font-mono">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">/ {plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f.label} className="flex items-center gap-2 text-sm">
                        {f.included ? (
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        ) : (
                          <X className="h-4 w-4 text-muted-foreground/40 shrink-0" />
                        )}
                        <span className={f.included ? "text-foreground" : "text-muted-foreground/60"}>
                          {f.label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a href={plan.href} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant={plan.highlight ? "default" : "outline"}
                      className="w-full"
                      size="lg"
                    >
                      {plan.cta} {plan.highlight && <ArrowRight className="ml-1 h-4 w-4" />}
                    </Button>
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
