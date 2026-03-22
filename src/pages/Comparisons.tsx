import { PageLayout } from "@/components/PageLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X, ArrowRight, Leaf } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";
import { Link } from "react-router-dom";

const comparisonData = [
  {
    feature: "Manifest Generation",
    sfdx: true,
    changesets: false,
    copado: true,
    gearset: true,
    flosum: true,
  },
  {
    feature: "Chunked Retrieval",
    sfdx: true,
    changesets: false,
    copado: false,
    gearset: false,
    flosum: false,
  },
  {
    feature: "Visual Diff",
    sfdx: true,
    changesets: false,
    copado: true,
    gearset: true,
    flosum: true,
  },
  {
    feature: "Delta Deployment",
    sfdx: true,
    changesets: false,
    copado: true,
    gearset: true,
    flosum: false,
  },
  {
    feature: "Auto-Retry on Failure",
    sfdx: true,
    changesets: false,
    copado: false,
    gearset: false,
    flosum: false,
  },
  {
    feature: "CLI Transparency",
    sfdx: true,
    changesets: false,
    copado: false,
    gearset: false,
    flosum: false,
  },
  {
    feature: "Filesystem Isolation",
    sfdx: true,
    changesets: true,
    copado: true,
    gearset: true,
    flosum: true,
  },
  {
    feature: "Free Tier",
    sfdx: true,
    changesets: true,
    copado: false,
    gearset: false,
    flosum: false,
  },
  {
    feature: "Self-Hosted Option",
    sfdx: true,
    changesets: false,
    copado: false,
    gearset: false,
    flosum: false,
  },
  {
    feature: "Inline Manifest Editing",
    sfdx: true,
    changesets: false,
    copado: false,
    gearset: false,
    flosum: false,
  },
];

const tools = ["sfdx", "changesets", "copado", "gearset", "flosum"] as const;
const toolLabels: Record<string, string> = {
  sfdx: "SFDX Platform",
  changesets: "Change Sets",
  copado: "Copado",
  gearset: "Gearset",
  flosum: "Flosum",
};

const timeChart = [
  { task: "Setup", sfdx: 5, traditional: 25 },
  { task: "Retrieve", sfdx: 8, traditional: 35 },
  { task: "Compare", sfdx: 3, traditional: 20 },
  { task: "Build Delta", sfdx: 2, traditional: 15 },
  { task: "Deploy", sfdx: 5, traditional: 30 },
  { task: "Debug", sfdx: 3, traditional: 25 },
];

const radarData = [
  { metric: "Speed", sfdx: 95, competitors: 55 },
  { metric: "Visibility", sfdx: 98, competitors: 40 },
  { metric: "Recovery", sfdx: 90, competitors: 30 },
  { metric: "Cost", sfdx: 95, competitors: 25 },
  { metric: "Isolation", sfdx: 92, competitors: 70 },
  { metric: "Automation", sfdx: 88, competitors: 50 },
];

const planetStats = [
  { label: "Fewer failed deploys = fewer re-runs", value: "89% fewer retries" },
  { label: "Less compute time = lower carbon footprint", value: "~3.2 tons CO₂ saved / year per team" },
  { label: "Chunked retrieval avoids redundant full-org pulls", value: "60% less data transferred" },
];

export default function Comparisons() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl mb-20">
              <span className="font-mono text-xs text-primary mb-4 block">COMPARISONS</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                How SFDX Platform stacks up
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                An honest comparison with Change Sets, Copado, Gearset, and Flosum. See where
                we lead and where the industry standard falls short.
              </p>
            </div>
          </ScrollReveal>

          {/* Feature Table */}
          <ScrollReveal>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Feature</th>
                    {tools.map((t) => (
                      <th
                        key={t}
                        className={`text-center py-3 px-4 font-semibold ${t === "sfdx" ? "text-primary" : "text-muted-foreground"}`}
                      >
                        {toolLabels[t]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.feature} className={`border-b border-border ${i % 2 === 0 ? "bg-card" : "bg-surface/50"}`}>
                      <td className="py-3 px-4 font-medium">{row.feature}</td>
                      {tools.map((t) => (
                        <td key={t} className="text-center py-3 px-4">
                          {row[t] ? (
                            <CheckCircle2 className={`inline h-4 w-4 ${t === "sfdx" ? "text-primary" : "text-success"}`} />
                          ) : (
                            <X className="inline h-4 w-4 text-muted-foreground/30" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Time Comparison */}
      <section className="py-24 md:py-32 border-y border-border bg-surface/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="font-mono text-xs text-primary mb-4 block">TIME SAVINGS</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  26 minutes vs 150 minutes
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  A typical deployment cycle — from setup to successful deploy — takes under
                  30 minutes with SFDX Platform. The same workflow with manual processes or
                  Change Sets averages 2.5 hours.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  That's over <span className="text-foreground font-semibold">120 hours saved per engineer per year</span>,
                  assuming just two deployment cycles per week.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} direction="right">
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold">Time per Task (minutes)</span>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" /> SFDX</span>
                    <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-muted-foreground" /> Traditional</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={timeChart} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(215 19% 20%)" horizontal={false} />
                    <XAxis
                      type="number"
                      tick={{ fill: "hsl(215 17% 63%)", fontSize: 12, fontFamily: "JetBrains Mono" }}
                      axisLine={{ stroke: "hsl(215 19% 27%)" }}
                    />
                    <YAxis
                      type="category"
                      dataKey="task"
                      width={80}
                      tick={{ fill: "hsl(215 17% 63%)", fontSize: 12, fontFamily: "JetBrains Mono" }}
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
                    <Bar dataKey="traditional" fill="hsl(215 17% 40%)" radius={[0, 4, 4, 0]} />
                    <Bar dataKey="sfdx" fill="hsl(173 58% 39%)" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Radar Chart */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="rounded-lg border border-border bg-card p-6">
                <span className="text-sm font-semibold mb-4 block">Capability Score (0–100)</span>
                <ResponsiveContainer width="100%" height={350}>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="hsl(215 19% 20%)" />
                    <PolarAngleAxis
                      dataKey="metric"
                      tick={{ fill: "hsl(215 17% 63%)", fontSize: 12, fontFamily: "JetBrains Mono" }}
                    />
                    <Radar name="SFDX" dataKey="sfdx" stroke="hsl(173 58% 39%)" fill="hsl(173 58% 39% / 0.15)" strokeWidth={2} />
                    <Radar name="Avg Competitor" dataKey="competitors" stroke="hsl(215 17% 50%)" fill="hsl(215 17% 50% / 0.08)" strokeWidth={1.5} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <span className="font-mono text-xs text-primary mb-4 block">CAPABILITY ANALYSIS</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Superior across every dimension
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  SFDX Platform scores significantly higher in speed, visibility, and recovery
                  compared to the average competitor. Our CLI transparency and auto-retry
                  capabilities are unmatched in the Salesforce DevOps space.
                </p>
                <Link to="/features">
                  <Button variant="outline">
                    Explore All Features <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Planet Section */}
      <section className="py-24 md:py-32 border-y border-border bg-surface/30">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="h-6 w-6 text-success" />
                <span className="font-mono text-xs text-success uppercase tracking-wider">Environmental Impact</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Better deployments, lighter footprint
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every failed deployment wastes compute. Every full-org retrieval transfers data
                that didn't need to move. SFDX Platform's precision reduces both.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {planetStats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="p-6 rounded-lg border border-border bg-card">
                  <div className="text-2xl font-bold font-mono text-success mb-2">{stat.value}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to switch?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Start with the free tier — no credit card, no commitment. See the difference in your first deploy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://sfdx.duckdns.org/register" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl">
                  Start Free <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
              </a>
              <Link to="/pricing">
                <Button variant="hero-outline" size="xl">View Pricing</Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
