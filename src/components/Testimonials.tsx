import { ScrollReveal } from "@/components/ScrollReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We cut our release cycle from 3 days to 4 hours. The delta deployment alone saved us 120 engineering hours last quarter.",
    name: "Marcus Chen",
    role: "VP of Engineering",
    company: "Meridian Financial Services",
    metric: "120hrs saved/quarter",
  },
  {
    quote: "Before SFDX Platform, our team of 14 admins was doing manual changesets. Now we deploy 40+ times a week with zero rollback incidents.",
    name: "Sarah Okonkwo",
    role: "Salesforce Program Director",
    company: "Healthbridge Systems",
    metric: "0 rollbacks in 6 months",
  },
  {
    quote: "The multi-tenant isolation is exactly what we needed for our managed services practice. Each client org is fully sandboxed — our compliance team signed off in two days.",
    name: "Raj Patel",
    role: "CTO",
    company: "CloudForge Consulting",
    metric: "SOC 2 compliant",
  },
  {
    quote: "We evaluated Copado, Gearset, and Flosum. SFDX Platform was the only tool that gave us full CLI transparency with a guided workflow. It's what our DevOps engineers actually wanted.",
    name: "Elena Vasquez",
    role: "Release Manager",
    company: "Apex Retail Group",
    metric: "4.2x deploy frequency",
  },
  {
    quote: "The free tier let us prove ROI to leadership in two weeks. By week three, we had budget approval for Pro across all five teams.",
    name: "James Whitfield",
    role: "Sr. Salesforce Architect",
    company: "NovaTech Industries",
    metric: "2-week ROI proof",
  },
  {
    quote: "Auto-retry on failing components is a game-changer. We went from dreading Friday deploys to shipping confidently any day of the week.",
    name: "Anika Sorensen",
    role: "DevOps Lead",
    company: "Baltic Energy Partners",
    metric: "89% fewer errors",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 border-y border-border bg-surface/30">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Teams that ship with confidence
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From 5-person startups to 500-seat enterprises, Salesforce teams trust SFDX Platform for production deployments.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 80}>
              <div className="group p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-all duration-300 h-full flex flex-col">
                <Quote className="h-5 w-5 text-primary/40 mb-4 shrink-0" strokeWidth={1.5} />
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  "{t.quote}"
                </p>
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-border">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-xs font-mono font-bold text-primary">
                        {t.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground/70 mt-1">{t.company}</p>
                  </div>
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded shrink-0">
                    {t.metric}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
