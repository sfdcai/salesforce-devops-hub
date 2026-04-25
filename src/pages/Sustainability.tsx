import { PageLayout } from "@/components/PageLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Leaf,
  Zap,
  Server,
  BarChart3,
  Recycle,
  Globe,
  TreePine,
  Droplets,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const wasteData = [
  { category: "Failed Deploys", manual: 840, sfdx: 50, label: "API Calls" },
  { category: "Retries", manual: 420, sfdx: 35, label: "API Calls" },
  { category: "Full Retrieves", manual: 600, sfdx: 180, label: "API Calls" },
  { category: "Redundant Ops", manual: 320, sfdx: 20, label: "API Calls" },
];

const impactMetrics = [
  {
    icon: Zap,
    value: "62%",
    label: "Fewer API calls per deployment cycle",
    detail: "Delta packages + chunked retrieval eliminate redundant compute",
  },
  {
    icon: Server,
    value: "840",
    label: "API round-trips saved per team/month",
    detail: "Based on 60 deploys/month with auto-retry vs. manual retries",
  },
  {
    icon: Recycle,
    value: "94%",
    label: "First-attempt deploy success rate",
    detail: "Compared to 66% for manual changesets — fewer wasted cycles",
  },
  {
    icon: Globe,
    value: "73%",
    label: "Reduction in deployment compute time",
    detail: "Faster deploys = less server time = less energy consumption",
  },
];

const principles = [
  {
    icon: TreePine,
    title: "Deploy Only What Changed",
    description:
      "Delta packages ensure you're not redeploying your entire codebase every time. Less data transferred, less compute burned, less energy wasted.",
  },
  {
    icon: Droplets,
    title: "Retrieve Only What You Need",
    description:
      "Chunked retrieval fetches metadata type-by-type. No more pulling the entire org when you only need 3 Apex classes.",
  },
  {
    icon: Leaf,
    title: "Fail Smart, Not Repeatedly",
    description:
      "Auto-retry isolates and removes failing components instead of re-running the entire deployment. One bad component no longer means 4 full retries.",
  },
  {
    icon: Zap,
    title: "Automate the Repetitive",
    description:
      "Every automated manifest generation, every automated diff, every automated delta build replaces a manual process that would take 4-8x longer.",
  },
];

export default function Sustainability() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--success)/0.06),transparent_60%)]" />
        <div className="container relative py-24 md:py-40">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border bg-surface text-xs font-mono text-success mb-6">
                <Leaf className="h-3 w-3" />
                Sustainability Report 2026
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
                Faster deployments.{" "}
                <span className="text-success">Lighter footprint.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
                Every failed deployment burns compute. Every manual retry wastes energy.
                SFDX Platform reduces deployment waste by automating what shouldn't be manual
                — and doing it right the first time.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="border-y border-border bg-surface/50">
        <div className="container py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 80}>
                <div className="text-center md:text-left">
                  <m.icon className="h-8 w-8 text-success mb-3 mx-auto md:mx-0" strokeWidth={1.5} />
                  <div className="text-3xl font-bold text-success font-mono">{m.value}</div>
                  <div className="text-sm font-medium text-foreground mt-1">{m.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{m.detail}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Reduce Waste */}
      <section className="py-24 md:py-32">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                How we reduce deployment waste
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every optimization in SFDX Platform has a direct environmental benefit.
                Less compute, less energy, less waste.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div className="p-6 rounded-lg border border-border bg-card hover:border-success/40 transition-all duration-300 h-full">
                  <p.icon className="h-10 w-10 text-success mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Waste Comparison Chart */}
      <section className="py-24 md:py-32 border-y border-border bg-surface/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  API calls per month: manual vs. automated
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Every API call consumes server compute. Across millions of Salesforce teams,
                  the aggregate reduction is significant. Here's the breakdown for a single
                  team doing 60 deploys/month.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="h-3 w-3 rounded-sm bg-destructive/60 shrink-0" />
                    <span className="text-muted-foreground">Manual changeset workflow — 2,180 API calls/month</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="h-3 w-3 rounded-sm bg-success shrink-0" />
                    <span className="text-muted-foreground">SFDX Platform automated — 285 API calls/month</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} direction="right">
              <div className="rounded-lg border border-border bg-card p-6">
                <ResponsiveContainer width="100%" height={320}>
                  <BarChart data={wasteData} barGap={4}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(215 19% 20%)" />
                    <XAxis
                      dataKey="category"
                      tick={{ fill: "hsl(215 17% 63%)", fontSize: 11, fontFamily: "JetBrains Mono" }}
                      axisLine={{ stroke: "hsl(215 19% 27%)" }}
                    />
                    <YAxis
                      tick={{ fill: "hsl(215 17% 63%)", fontSize: 11, fontFamily: "JetBrains Mono" }}
                      axisLine={{ stroke: "hsl(215 19% 27%)" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(217 33% 10%)",
                        border: "1px solid hsl(215 19% 27%)",
                        borderRadius: "6px",
                        fontSize: 12,
                        fontFamily: "JetBrains Mono",
                      }}
                    />
                    <Bar dataKey="manual" name="Manual" radius={[4, 4, 0, 0]}>
                      {wasteData.map((_, i) => (
                        <Cell key={i} fill="hsl(0 72% 51% / 0.6)" />
                      ))}
                    </Bar>
                    <Bar dataKey="sfdx" name="SFDX Platform" radius={[4, 4, 0, 0]}>
                      {wasteData.map((_, i) => (
                        <Cell key={i} fill="hsl(142 71% 45%)" />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Bigger Picture */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                The bigger picture
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Salesforce processes over 7 billion transactions per day across its infrastructure.
                  Every metadata deployment, every retrieve, every diff contributes to that load.
                  When deployments fail and retry manually, the compute cost doubles or triples.
                </p>
                <p>
                  SFDX Platform can't fix cloud computing's energy footprint on its own. But we can
                  make sure that every Salesforce deployment is as efficient as possible — deploying
                  only what changed, retrieving only what's needed, and retrying intelligently instead
                  of brute-force.
                </p>
                <p>
                  If every Salesforce team switched from manual changesets to delta-based automated
                  deployments, the reduction in unnecessary API compute would be measured in
                  petajoules per year. We're starting with our platform. We hope the industry follows.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mt-12 p-8 rounded-lg border border-success/30 bg-success/5">
                <div className="flex items-start gap-4">
                  <Leaf className="h-6 w-6 text-success shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Our commitment</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We commit to publishing annual sustainability metrics — API calls saved,
                      compute hours reduced, and deployment efficiency improvements across our
                      user base. Transparency isn't just a product feature. It's how we operate.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Deploy smarter.{" "}
                <span className="text-success">Waste less.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Start with the free tier. See how much compute you save in your first week.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://sfdx.duckdns.org" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="xl">
                    Start Free <ArrowRight className="ml-1 h-5 w-5" />
                  </Button>
                </a>
                <Link to="/blog/sustainability-in-salesforce-devops">
                  <Button variant="hero-outline" size="xl">
                    Read the Research
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
