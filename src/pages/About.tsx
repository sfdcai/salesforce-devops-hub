import { PageLayout } from "@/components/PageLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Eye, Target, Repeat } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Isolation",
    desc: "Users can never access another user's data. Every filesystem path is sandboxed. Every database query is scoped.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "CLI output is shown in a dedicated console. Every command is visible. Every result is logged.",
  },
  {
    icon: Target,
    title: "Predictability",
    desc: "All operations happen inside defined user folders. Three workspace separation ensures clean deploys.",
  },
  {
    icon: Repeat,
    title: "Recoverability",
    desc: "Projects are fully self-contained and movable. Backup and restore any project independently.",
  },
];

const archSteps = [
  { label: "React UI", desc: "Client-side interface for all operations" },
  { label: "API Routes", desc: "Next.js route handlers for business logic" },
  { label: "Domain Lib", desc: "Manifests, retrieval, comparison, deployment" },
  { label: "sf CLI", desc: "Real Salesforce CLI commands, sandboxed per user" },
  { label: "SQLite + FS", desc: "Metadata in DB, artifacts on disk" },
];

export default function About() {
  return (
    <PageLayout>
      <section className="py-24 md:py-32">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl mb-20">
              <span className="font-mono text-xs text-primary mb-4 block">ABOUT</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                We built the tool we wished existed
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SFDX DevOps Platform was born from frustration with Change Sets, fragile CI scripts,
                and expensive managed packages that lock you into their ecosystem. We wanted
                something that runs real sf CLI commands, shows you exactly what's happening,
                and keeps your metadata organized.
              </p>
            </div>
          </ScrollReveal>

          {/* Mission */}
          <ScrollReveal>
            <div className="rounded-lg border border-border bg-card p-8 md:p-12 mb-24">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                Make Salesforce metadata operations <span className="text-foreground font-medium">repeatable</span>,{" "}
                <span className="text-foreground font-medium">visual</span>, and{" "}
                <span className="text-foreground font-medium">auditable</span> — for every team,
                at every scale. No vendor lock-in. No black boxes. Just precision tooling.
              </p>
            </div>
          </ScrollReveal>

          {/* Principles */}
          <div className="mb-24">
            <ScrollReveal>
              <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-8 pb-4 border-b border-border">
                Design Principles
              </h2>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {principles.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 100}>
                  <div className="p-6 rounded-lg border border-border bg-card h-full">
                    <p.icon className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
                    <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div className="mb-24">
            <ScrollReveal>
              <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-8 pb-4 border-b border-border">
                Architecture
              </h2>
            </ScrollReveal>

            <ScrollReveal>
              <div className="rounded-lg border border-border bg-card p-8">
                <div className="flex flex-wrap gap-4 items-center justify-center">
                  {archSteps.map((step, i) => (
                    <div key={step.label} className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="px-4 py-3 rounded-md border border-border bg-surface-alt mb-1.5 min-w-[120px]">
                          <span className="text-sm font-semibold text-foreground">{step.label}</span>
                        </div>
                        <span className="text-[10px] text-muted-foreground">{step.desc}</span>
                      </div>
                      {i < archSteps.length - 1 && (
                        <ArrowRight className="h-4 w-4 text-primary shrink-0 hidden md:block" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Security */}
          <div className="mb-24">
            <ScrollReveal>
              <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-8 pb-4 border-b border-border">
                Security Model
              </h2>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Authentication", desc: "bcrypt-hashed passwords. JWT sessions with 7-day expiry. Role-based authorization on every route." },
                  { title: "Filesystem Sandboxing", desc: "resolveUserPath() prevents directory traversal. Each user is locked to /userdata/<userId>/." },
                  { title: "Data Isolation", desc: "Every database query includes user_id filters. No cross-tenant queries are possible." },
                  { title: "CLI Safety", desc: "All sf CLI commands run inside user folders. Org auth is stored per user and never shared." },
                ].map((item, i) => (
                  <div key={item.title} className="p-6 rounded-lg border border-border bg-card">
                    <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Built by developers, for developers.
              </h2>
              <a href="https://sfdx.duckdns.org/register" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl">
                  Try It Free <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
