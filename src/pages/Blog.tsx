import { PageLayout } from "@/components/PageLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const blogPosts = [
  {
    slug: "why-changesets-are-killing-your-velocity",
    title: "Why Changesets Are Killing Your Deployment Velocity",
    excerpt: "Manual changesets introduce human error at every step. Here's the data on how automated manifest generation and delta deploys recover 73% of lost deployment time.",
    date: "2026-03-18",
    readTime: "8 min",
    category: "DevOps Strategy",
    featured: true,
  },
  {
    slug: "salesforce-devops-roi-calculator",
    title: "The Real ROI of Salesforce DevOps Tooling: A Framework for Enterprise Buyers",
    excerpt: "A practical framework for calculating deployment automation ROI. Includes formulas for time savings, error reduction, and developer satisfaction metrics that leadership actually cares about.",
    date: "2026-03-14",
    readTime: "12 min",
    category: "Enterprise",
    featured: true,
  },
  {
    slug: "multi-tenant-isolation-salesforce",
    title: "Multi-Tenant Isolation: Why Your Salesforce DevOps Tool Needs Sandboxing",
    excerpt: "Most deployment tools share environments between users. Here's why per-user filesystem isolation isn't optional for enterprise Salesforce teams — and how SFDX Platform implements it.",
    date: "2026-03-10",
    readTime: "6 min",
    category: "Security",
  },
  {
    slug: "chunked-retrieval-explained",
    title: "Chunked Metadata Retrieval: How to Retrieve 200+ Types Without Timeouts",
    excerpt: "Large orgs hit retrieve limits fast. Learn how splitting manifests per metadata type eliminates timeouts and gives you granular status tracking per component.",
    date: "2026-03-06",
    readTime: "7 min",
    category: "Technical Deep Dive",
  },
  {
    slug: "auto-retry-deployment-strategy",
    title: "Auto-Retry Deployments: Stop Failing Because of One Bad Component",
    excerpt: "A single failing ApexClass shouldn't block 47 other components. SFDX Platform's auto-retry removes failures and re-deploys the rest — here's how it works under the hood.",
    date: "2026-03-01",
    readTime: "5 min",
    category: "Technical Deep Dive",
  },
  {
    slug: "sustainability-in-salesforce-devops",
    title: "How Faster Deployments Reduce Your Carbon Footprint",
    excerpt: "Every failed deployment burns compute cycles. Every manual retry wastes energy. Here's how automated, precise deployments reduce infrastructure waste and help the planet.",
    date: "2026-02-25",
    readTime: "6 min",
    category: "Sustainability",
  },
  {
    slug: "free-tier-enterprise-adoption",
    title: "Why We Built the Most Generous Free Tier in Salesforce DevOps",
    excerpt: "30 retrieves, 10 deploys, 2 GB storage — for free, forever. Here's the business case for giving enterprise teams a risk-free path to adoption, and why it accelerates deals.",
    date: "2026-02-20",
    readTime: "5 min",
    category: "Product",
  },
  {
    slug: "salesforce-cli-transparency",
    title: "CLI Transparency: Why You Should See Every Command Your Tool Runs",
    excerpt: "Black-box deployment tools hide what's happening. SFDX Platform shows every sf CLI command, every output, every log. Here's why transparency builds trust — and catches bugs faster.",
    date: "2026-02-15",
    readTime: "4 min",
    category: "Philosophy",
  },
];

export default function Blog() {
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <PageLayout>
      <section className="py-24 md:py-32">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Resources & Insights
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Deep dives on Salesforce DevOps, deployment automation, and building enterprise-grade tooling.
              </p>
            </div>
          </ScrollReveal>

          {/* Featured */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {featured.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 100}>
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <article className="p-8 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                        Featured
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Tag className="h-3 w-3" /> {post.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* All Posts */}
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8">All Posts</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {rest.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 60}>
                <Link to={`/blog/${post.slug}`} className="group block">
                  <article className="flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono text-muted-foreground bg-surface px-2 py-0.5 rounded border border-border">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold group-hover:text-primary transition-colors mb-1">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground shrink-0">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </span>
                      <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
