import { PageLayout } from "@/components/PageLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Clock,
  TrendingUp,
  Users,
  Shield,
  Zap,
  CheckCircle2,
  Quote,
} from "lucide-react";

const caseStudies = [
  {
    company: "Meridian Financial Services",
    industry: "Financial Services",
    logo: "MFS",
    size: "2,400 employees · 18 Salesforce orgs",
    challenge:
      "Meridian's release team spent 40+ hours per sprint manually building change sets across 18 production and sandbox orgs. Deployments failed 34% of the time, requiring weekend rollbacks. Their DevOps lead described it as 'flying blind with every release.'",
    solution:
      "Deployed SFDX Platform across all 18 orgs with project-level isolation. Introduced chunked retrieval to handle their 12,000+ metadata component footprint, and delta deployments with auto-retry to eliminate manual rollback procedures.",
    results: [
      { metric: "82%", label: "Reduction in deployment failures" },
      { metric: "37hrs", label: "Saved per sprint (from 40+ to ~3)" },
      { metric: "4.7x", label: "More releases shipped per quarter" },
      { metric: "$340K", label: "Annual savings in release operations" },
    ],
    timeline: "12 weeks from pilot to full rollout",
    quote:
      "We went from dreading release weekends to pushing changes on a Tuesday afternoon with full confidence. The diff viewer alone paid for the entire investment.",
    quotePerson: "Rachel Nguyen, VP of Engineering",
    tags: ["Multi-org", "Auto-retry", "Delta deploy"],
  },
  {
    company: "Vantage Health Group",
    industry: "Healthcare",
    logo: "VHG",
    size: "6,100 employees · 7 Salesforce orgs",
    challenge:
      "Vantage operated under strict HIPAA compliance requirements. Every metadata change needed an audit trail, and their existing process — screenshots of change set contents emailed to a compliance team — was unsustainable. Deployments took 3–5 business days for approval alone.",
    solution:
      "Implemented SFDX Platform with the HTML comparison report feature as the audit artifact. Each deployment now generates a timestamped, filterable diff report showing exactly what changed, what was added, and what was removed — directly shareable with compliance reviewers.",
    results: [
      { metric: "91%", label: "Faster compliance review cycles" },
      { metric: "3 days → 2hrs", label: "Approval turnaround time" },
      { metric: "100%", label: "Audit coverage (vs ~60% before)" },
      { metric: "Zero", label: "Compliance incidents post-adoption" },
    ],
    timeline: "8 weeks pilot · 6 weeks enterprise rollout",
    quote:
      "Our compliance team actually looks forward to reviewing deployments now. The HTML report gives them everything they need in one document instead of chasing screenshots across Slack threads.",
    quotePerson: "Dr. Michael Torres, CISO",
    tags: ["HIPAA", "Audit trail", "Compliance"],
  },
  {
    company: "Atlas Retail Group",
    industry: "Retail & Commerce",
    logo: "ARG",
    size: "14,000 employees · 23 Salesforce orgs",
    challenge:
      "Atlas manages Salesforce instances for 23 regional brands. Each brand has unique customizations, and the central IT team was drowning in manual retrieval and comparison work. A single cross-brand deployment took a dedicated team of 4 engineers an entire week.",
    solution:
      "Rolled out SFDX Platform with per-brand project isolation. Each brand's Salesforce admin can now run their own retrieval and diff workflows, while the central DevOps team handles final deployments. Chunked retrieval made it possible to process their largest org (47,000+ components) without timeouts.",
    results: [
      { metric: "23→1", label: "Deployment workflow standardized" },
      { metric: "5 days → 6hrs", label: "Cross-brand deploy cycle" },
      { metric: "3 FTEs", label: "Reallocated from manual ops to dev" },
      { metric: "$1.2M", label: "Estimated annual productivity gain" },
    ],
    timeline: "16 weeks phased rollout across all 23 brands",
    quote:
      "We tried Copado and Gearset — both needed extensive configuration per org. SFDX Platform gave us project isolation out of the box. Twenty-three orgs, zero cross-contamination.",
    quotePerson: "James Whitfield, Director of Salesforce Engineering",
    tags: ["Multi-tenant", "Chunked retrieval", "Enterprise scale"],
  },
  {
    company: "Kinetic Energy Solutions",
    industry: "Energy & Utilities",
    logo: "KES",
    size: "890 employees · 4 Salesforce orgs",
    challenge:
      "Kinetic's small but overworked Salesforce team (2 admins, 1 developer) managed four interconnected orgs. They had no CI/CD pipeline and relied entirely on change sets. A botched deployment to production cost them $180K in lost billing data recovery.",
    solution:
      "Started on the Free tier to validate the workflow. Within two weeks, the team upgraded to Pro after seeing the time savings. Auto-retry deployments eliminated the class of failures that caused their $180K incident — failing components are automatically excluded and reported.",
    results: [
      { metric: "100%", label: "Elimination of destructive deploy errors" },
      { metric: "$180K", label: "Incident cost that triggered adoption" },
      { metric: "14 days", label: "Free tier to paid conversion" },
      { metric: "8hrs/week", label: "Saved across the 3-person team" },
    ],
    timeline: "2 weeks Free tier · instant Pro upgrade",
    quote:
      "The free tier wasn't a demo — it was genuinely usable. We ran real deployments on it for two weeks before deciding to upgrade. No other tool let us do that without a sales call.",
    quotePerson: "Priya Sharma, Lead Salesforce Admin",
    tags: ["Free tier", "Auto-retry", "Small team"],
  },
  {
    company: "Northward Consulting",
    industry: "Salesforce SI / Consultancy",
    logo: "NWC",
    size: "320 consultants · 80+ client orgs",
    challenge:
      "As a Salesforce implementation partner, Northward managed metadata across 80+ client orgs simultaneously. Each consultant needed access to specific client orgs without seeing other clients' data. Their previous workflow involved shared credentials and a single deployment server — a compliance nightmare.",
    solution:
      "Deployed SFDX Platform's multi-user model with per-consultant workspace isolation. Each consultant gets their own sandboxed filesystem with access only to assigned client orgs. The admin console provides the practice lead with visibility across all projects without breaching isolation.",
    results: [
      { metric: "80+", label: "Client orgs managed from one platform" },
      { metric: "Zero", label: "Cross-client data exposure incidents" },
      { metric: "62%", label: "Faster client onboarding for new projects" },
      { metric: "SOC 2", label: "Audit passed with platform as evidence" },
    ],
    timeline: "6 weeks pilot with 10 consultants · 4 weeks full rollout",
    quote:
      "Every other tool we evaluated assumed a single-org model. SFDX Platform understood that consultancies need strict client isolation by design, not as an afterthought.",
    quotePerson: "David Okafor, Managing Partner",
    tags: ["Consultancy", "Multi-user", "SOC 2"],
  },
];

const aggregateStats = [
  { value: "52+", label: "Enterprise deployments" },
  { value: "$2.1M", label: "Combined annual savings" },
  { value: "99.7%", label: "Deployment success rate" },
  { value: "147", label: "Orgs managed" },
];

export default function CaseStudies() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.06),transparent_60%)]" />
        <div className="container relative py-24 md:py-36">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border bg-surface text-xs font-mono text-primary mb-6">
                <Building2 className="h-3.5 w-3.5" />
                Enterprise Success Stories
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
                Real teams.{" "}
                <span className="text-gradient">Real results.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                See how Salesforce teams across industries have cut deployment time,
                eliminated errors, and reclaimed engineering hours with SFDX Platform.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Aggregate Stats */}
      <section className="border-y border-border bg-surface/50">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aggregateStats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 80}>
                <div className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-primary font-mono">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28">
        <div className="container space-y-20">
          {caseStudies.map((cs, idx) => (
            <ScrollReveal key={cs.company} delay={100}>
              <article className="rounded-lg border border-border bg-card overflow-hidden">
                {/* Header */}
                <div className="p-6 md:p-8 border-b border-border bg-surface/30">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <span className="font-mono text-sm font-bold text-primary">
                          {cs.logo}
                        </span>
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold">{cs.company}</h2>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {cs.industry} · {cs.size}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono rounded-md border border-border bg-background text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-8">
                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Shield className="h-4 w-4 text-destructive" />
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-destructive">
                          Challenge
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="h-4 w-4 text-primary" />
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                          Solution
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                        Results
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {cs.results.map((r) => (
                        <div
                          key={r.label}
                          className="p-4 rounded-md border border-border bg-background"
                        >
                          <div className="text-2xl font-bold text-primary font-mono">
                            {r.metric}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1 leading-snug">
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground">
                      <span className="font-medium text-foreground">Timeline:</span>{" "}
                      {cs.timeline}
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="relative p-6 rounded-md border border-primary/20 bg-primary/5">
                    <Quote className="absolute top-4 left-4 h-6 w-6 text-primary/30" />
                    <blockquote className="pl-8">
                      <p className="text-sm leading-relaxed italic text-foreground/90">
                        "{cs.quote}"
                      </p>
                      <footer className="mt-3 text-xs font-medium text-primary">
                        — {cs.quotePerson}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border bg-surface/30">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Your team could be next
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                Start with the free tier — no sales call, no credit card. Run real
                deployments and see the difference in your first sprint.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://sfdx.duckdns.org/register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="hero" size="xl">
                    Start Free <ArrowRight className="ml-1 h-5 w-5" />
                  </Button>
                </a>
                <Link to="/pricing">
                  <Button variant="hero-outline" size="xl">
                    View Plans
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
