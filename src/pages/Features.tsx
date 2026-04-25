import { PageLayout } from "@/components/PageLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  Layers,
  Zap,
  GitCompare,
  Terminal,
  Shield,
  BarChart3,
  Eye,
  RotateCcw,
  FileCode,
  History,
  Users,
  Database,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const featureSections = [
  {
    category: "Core Workflow",
    features: [
      {
        icon: Layers,
        title: "Manifest Generation",
        desc: "Generate package.xml directly from any connected Salesforce org. Edit manifests inline with a built-in XML editor. Save and version your manifests per project.",
        details: ["Auto-detect all metadata types in the org", "Inline editing with syntax highlighting", "Save per project workspace"],
      },
      {
        icon: Zap,
        title: "Chunked Metadata Retrieval",
        desc: "Split large manifests by metadata type and retrieve each chunk independently. Track success, failure, and progress for every type in real time.",
        details: ["Per-type chunk splitting", "Sequential retrieval with status tracking", "Stop and resume capability", "Click to view retrieved members"],
      },
      {
        icon: GitCompare,
        title: "Diff & Delta Builder",
        desc: "Compare source and destination metadata side-by-side. Filter by Added, Changed, or Removed status. Select specific changes and build a delta manifest from your selections.",
        details: ["CSV-backed diff results", "Filter by type and change status", "Build delta from selection", "HTML comparison report"],
      },
      {
        icon: BarChart3,
        title: "Deploy with Auto-Retry",
        desc: "Deploy your delta package with configurable test levels. If components fail, SFDX auto-removes them and retries — no manual intervention required.",
        details: ["Check-only validation mode", "RunLocalTests / RunAllTests", "Auto-retry removes failing components", "Full deployment log"],
      },
    ],
  },
  {
    category: "Developer Experience",
    features: [
      {
        icon: Terminal,
        title: "CLI Console",
        desc: "Every sf CLI command runs visibly in a dedicated console panel. See exactly what's happening, including full output, errors, and timing.",
        details: ["Real-time command output", "Searchable log history", "Copy commands for local use"],
      },
      {
        icon: Eye,
        title: "Visual Diff Viewer",
        desc: "Side-by-side visual comparison of any two metadata files. Filter by folder, type, or keyword. See source/destination presence indicators at a glance.",
        details: ["Side-by-side layout", "Status icons per file", "Filter and search"],
      },
      {
        icon: FileCode,
        title: "Guided Workflow",
        desc: "Context-sensitive help banners and section guides explain what to do next. Recovery panels provide plain-language troubleshooting after failures.",
        details: ["Step-by-step guidance", "Readiness gating", "Error recovery panels"],
      },
      {
        icon: History,
        title: "Full History",
        desc: "Every retrieval, comparison, and deployment is logged per project. Audit trails for compliance and troubleshooting.",
        details: ["Retrieve history", "Compare history", "Deploy history with results"],
      },
    ],
  },
  {
    category: "Security & Multi-Tenancy",
    features: [
      {
        icon: Shield,
        title: "Workspace Isolation",
        desc: "Each user has a dedicated filesystem root with path traversal protection. All database queries are scoped by user_id. No cross-tenant access is possible.",
        details: ["Per-user /userdata/<userId>/ sandbox", "resolveUserPath() prevents traversal", "All queries include user_id filter"],
      },
      {
        icon: Users,
        title: "Admin Controls",
        desc: "Manage users, roles, passwords, and storage from the admin console. Review upgrade requests. Inspect the database through a built-in web UI.",
        details: ["User role management", "Password reset", "Project storage audit", "Database CRUD UI"],
      },
      {
        icon: Database,
        title: "Multi-Tenant Architecture",
        desc: "Tenant-scoped data model with per-tenant usage metering. Plan limits enforced at every API endpoint. Stripe-ready billing integration.",
        details: ["Tenant table with plan status", "Usage metrics tracking", "Upgrade request workflow"],
      },
      {
        icon: RotateCcw,
        title: "Recoverability",
        desc: "Projects are fully self-contained with three isolated workspaces (source, destination, deploy). Move, backup, or restore any project independently.",
        details: ["3-workspace project structure", "Self-contained project folders", "Backup and restore support"],
      },
    ],
  },
];

export default function Features() {
  return (
    <PageLayout>
      <section className="py-24 md:py-32">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl mb-20">
              <span className="font-mono text-xs text-primary mb-4 block">FEATURE CATALOG</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Built for teams who deploy Salesforce metadata seriously
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every feature is designed to reduce risk, increase visibility, and eliminate
                the manual toil of metadata deployments.
              </p>
            </div>
          </ScrollReveal>

          {featureSections.map((section, si) => (
            <div key={section.category} className="mb-24 last:mb-0">
              <ScrollReveal>
                <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-8 pb-4 border-b border-border">
                  {section.category}
                </h2>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-6">
                {section.features.map((f, fi) => (
                  <ScrollReveal key={f.title} delay={fi * 100}>
                    <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 h-full">
                      <f.icon className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
                      <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{f.desc}</p>
                      <ul className="space-y-1.5">
                        {f.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="h-1 w-1 rounded-full bg-primary mt-1.5 shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <ScrollReveal>
            <div className="text-center mt-16">
              <a href="https://sfdx.duckdns.org" target="_blank" rel="noopener noreferrer">
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
