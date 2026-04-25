import { PageLayout } from "@/components/PageLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Zap,
  GitCompare,
  Layers,
  Terminal,
  BarChart3,
  Clock,
  Users,
  CheckCircle2,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const timeData = [
  { month: "Jan", manual: 48, sfdx: 12 },
  { month: "Feb", manual: 52, sfdx: 11 },
  { month: "Mar", manual: 45, sfdx: 9 },
  { month: "Apr", manual: 56, sfdx: 10 },
  { month: "May", manual: 62, sfdx: 8 },
  { month: "Jun", manual: 58, sfdx: 7 },
];

const features = [
  {
    icon: Layers,
    title: "Manifest Generation",
    desc: "Generate package.xml directly from org metadata. Edit inline, save instantly.",
  },
  {
    icon: Zap,
    title: "Chunked Retrieval",
    desc: "Split manifests per metadata type. Track success and failure for every chunk.",
  },
  {
    icon: GitCompare,
    title: "Diff & Delta",
    desc: "Compare source vs destination. Filter by status. Build delta packages from selections.",
  },
  {
    icon: Terminal,
    title: "CLI Transparency",
    desc: "Every sf CLI command runs visibly. Full output in a dedicated console panel.",
  },
  {
    icon: Shield,
    title: "Workspace Isolation",
    desc: "Each user gets a sandboxed filesystem. No cross-tenant data access, ever.",
  },
  {
    icon: BarChart3,
    title: "Deploy with Auto-Retry",
    desc: "Deploy delta packages with optional tests. Auto-retry removes failing components.",
  },
];

const stats = [
  { value: "73%", label: "Faster deployments" },
  { value: "4.2x", label: "More deploys per week" },
  { value: "89%", label: "Fewer deployment errors" },
  { value: "<6min", label: "Avg. time to green" },
];

const trustedBy = [
  "Enterprise SF Teams",
  "ISV Partners",
  "DevOps Engineers",
  "Release Managers",
  "Consultancies",
];

export default function Index() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08),transparent_60%)]" />
        <div className="container relative py-24 md:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border bg-surface text-xs font-mono text-primary mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  v2.0 — Now with multi-tenant isolation
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
                  Deploy metadata{" "}
                  <span className="text-gradient">with precision</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-8">
                  The complete Salesforce DevOps toolkit. Generate manifests, retrieve metadata,
                  compare orgs, build delta packages, and deploy — all from one guided workflow.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-4">
                  <a href="https://sfdx.duckdns.org/register" target="_blank" rel="noopener noreferrer">
                    <Button variant="hero" size="xl">
                      Start Free <ArrowRight className="ml-1 h-5 w-5" />
                    </Button>
                  </a>
                  <Link to="/features">
                    <Button variant="hero-outline" size="xl">
                      See How It Works
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Terminal mock */}
            <ScrollReveal delay={400} direction="right">
              <div className="rounded-lg border border-border bg-card overflow-hidden border-glow">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-alt">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-warning/60" />
                  <div className="h-3 w-3 rounded-full bg-success/60" />
                  <span className="ml-2 text-xs font-mono text-muted-foreground">sfdx-deploy.sh</span>
                </div>
                <div className="p-5 font-mono text-sm leading-7 text-muted-foreground">
                  <div><span className="text-primary">$</span> sf project retrieve start --manifest source/package.xml</div>
                  <div className="text-success">✓ Retrieved 47 metadata types in 3.2s</div>
                  <div className="mt-2"><span className="text-primary">$</span> sfdx diff --source prod --target staging</div>
                  <div className="text-accent">△ 23 changed · 8 added · 2 removed</div>
                  <div className="mt-2"><span className="text-primary">$</span> sfdx deploy --delta --test-level RunLocalTests</div>
                  <div className="text-success">✓ Deployment complete — 31 components, 0 errors</div>
                  <div className="mt-2"><span className="text-primary">$</span> <span className="animate-pulse">▊</span></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-surface/50">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 80}>
                <div className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-primary font-mono">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 md:py-32">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Everything you need to ship Salesforce changes
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From manifest to deployment, every step is guided, transparent, and recoverable.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <div className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300">
                  <f.icon className="h-10 w-10 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Time Savings Chart */}
      <section className="py-24 md:py-32 border-y border-border bg-surface/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Hours saved, every sprint
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Teams using SFDX Platform cut deployment time by 73% compared to manual
                  changeset workflows. That's hours back every week for actual development.
                </p>
                <div className="space-y-3">
                  {["Automated chunked retrieval", "One-click delta builds", "Auto-retry on failures", "Audit trail for every deploy"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} direction="right">
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold">Deployment Hours / Month</span>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-muted-foreground" /> Manual
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-primary" /> SFDX Platform
                    </span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={timeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(215 19% 20%)" />
                    <XAxis
                      dataKey="month"
                      tick={{ fill: "hsl(215 17% 63%)", fontSize: 12, fontFamily: "JetBrains Mono" }}
                      axisLine={{ stroke: "hsl(215 19% 27%)" }}
                    />
                    <YAxis
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
                    <Area
                      type="monotone"
                      dataKey="manual"
                      stroke="hsl(215 17% 63%)"
                      fill="hsl(215 17% 63% / 0.1)"
                      strokeWidth={2}
                    />
                    <Area
                      type="monotone"
                      dataKey="sfdx"
                      stroke="hsl(173 58% 39%)"
                      fill="hsl(173 58% 39% / 0.1)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 md:py-32">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Five steps. Zero guesswork.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A linear workflow that mirrors how experienced Salesforce DevOps engineers
                actually work — just faster and with a safety net.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Connect", desc: "Paste sfdxAuthUrl for source and destination orgs" },
              { step: "02", title: "Generate", desc: "Auto-generate package.xml from org metadata" },
              { step: "03", title: "Retrieve", desc: "Chunked retrieval with per-type status tracking" },
              { step: "04", title: "Compare", desc: "Visual diff with Added, Changed, Removed filters" },
              { step: "05", title: "Deploy", desc: "Delta deploy with tests and auto-retry" },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 100}>
                <div className="p-5 rounded-lg border border-border bg-card group hover:border-primary/50 transition-all duration-300 h-full">
                  <span className="font-mono text-xs text-primary">{item.step}</span>
                  <h3 className="text-base font-semibold mt-2 mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 border-y border-border bg-surface/30">
        <div className="container">
          <ScrollReveal>
            <p className="text-center text-sm text-muted-foreground mb-8">Trusted by Salesforce professionals worldwide</p>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {trustedBy.map((name, i) => (
              <ScrollReveal key={name} delay={i * 60}>
                <div className="flex items-center gap-2 text-muted-foreground/60">
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-medium">{name}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Stop deploying blind.<br />
                <span className="text-gradient">Start deploying with precision.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                Join teams who have cut their Salesforce deployment time in half.
                Free tier available — no credit card required.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://sfdx.duckdns.org" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="xl">
                    Get Started Free <ArrowRight className="ml-1 h-5 w-5" />
                  </Button>
                </a>
                <Link to="/comparisons">
                  <Button variant="hero-outline" size="xl">
                    Compare Tools
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
