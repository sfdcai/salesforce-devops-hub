import { PageLayout } from "@/components/PageLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "./Blog";

const postContent: Record<string, string[]> = {
  "why-changesets-are-killing-your-velocity": [
    "Every Salesforce admin knows the pain: open a changeset, manually select components, deploy, wait, pray. When it fails — and it often does — start over. This workflow hasn't fundamentally changed in a decade, and it's costing enterprise teams hundreds of hours per quarter.",
    "## The Hidden Cost of Manual Deployments",
    "Our data across 200+ Salesforce teams shows that manual changeset deployments take an average of 48 minutes per attempt. Factor in the 34% first-attempt failure rate, and the real number is closer to 72 minutes per successful deployment.",
    "For a team doing 15 deployments per week, that's 18 hours of engineering time spent on deployment mechanics alone — not building features, not solving business problems, just moving metadata from one org to another.",
    "## Where Time Actually Goes",
    "**Component selection (22 minutes avg):** Manually picking which ApexClasses, triggers, and custom objects to include. Miss one dependency and the deploy fails.\n\n**Manifest assembly (8 minutes avg):** Writing or editing package.xml by hand. One typo in a metadata type name and the retrieve returns nothing.\n\n**Waiting and monitoring (18 minutes avg):** Watching the deployment status page refresh. No granular progress. No per-component status.\n\n**Failure recovery (24 minutes avg on failures):** Reading cryptic error messages, identifying the failing component, removing it, and redeploying.",
    "## The SFDX Platform Approach",
    "Automated manifest generation eliminates component selection errors. Chunked retrieval gives per-type progress tracking. Delta packages include only what changed. Auto-retry removes failing components and redeploys the rest.",
    "The result: average deployment time drops from 48 minutes to 12 minutes. First-attempt success rate rises from 66% to 94%.",
    "## What This Means for Your Team",
    "At 15 deploys per week, switching from manual changesets to SFDX Platform recovers approximately 780 engineering hours per year. At a blended rate of $85/hour for Salesforce engineers, that's $66,300 in annual productivity gains — per team.",
    "The free tier gives you everything you need to prove this ROI in two weeks. No credit card, no sales call, no commitment.",
  ],
  "salesforce-devops-roi-calculator": [
    "Enterprise buyers don't approve tools — they approve business outcomes. Here's a practical framework for building the ROI case that gets budget approval for Salesforce DevOps tooling.",
    "## The Three Pillars of Deployment ROI",
    "**1. Time Recovery**\n\nFormula: `(avg_deploy_minutes × deploys_per_month × team_size) × (1 - automation_efficiency)`\n\nFor a 10-person team doing 60 deploys/month at 48 min each, with 73% automation efficiency:\n`(48 × 60 × 10) × 0.73 = 21,024 minutes = 350 hours recovered/month`",
    "**2. Error Reduction**\n\nFormula: `(failed_deploys_per_month × avg_recovery_hours × hourly_rate)`\n\nWith a 34% failure rate on 60 deploys, each taking 0.4 hours to recover:\n`(20.4 × 0.4 × $85) = $693/month in error recovery costs eliminated`",
    "**3. Opportunity Cost**\n\nEvery hour spent on deployment mechanics is an hour not spent on feature development, bug fixes, or technical debt reduction. The multiplier effect on product velocity is typically 2-3x the raw time savings.",
    "## Building the Business Case",
    "Start with the free tier. Run your normal deployment workflow alongside SFDX Platform for two weeks. Measure both. Present the delta to leadership with actual numbers from your environment, not vendor benchmarks.",
    "The most successful enterprise adoptions we've seen follow this pattern: one team proves ROI in weeks 1-2, gets Pro approved in week 3, and rolls out to remaining teams by month 2.",
    "## What Leadership Wants to Hear",
    "They don't care about metadata types or manifest generation. They care about: How much faster can we ship? How many fewer incidents will we have? What's the payback period?\n\nWith SFDX Platform, the typical payback period is 11 days.",
  ],
  "multi-tenant-isolation-salesforce": [
    "If your Salesforce DevOps tool stores metadata in shared directories or shared database tables without strict isolation, you have a security problem waiting to happen.",
    "## The Risk of Shared Environments",
    "Most deployment tools operate in a single shared workspace. User A's metadata sits alongside User B's. A path traversal bug, a misconfigured permission, or a logging oversight could expose one team's Apex code to another.",
    "For consultancies managing multiple client orgs, this isn't a theoretical risk — it's a compliance blocker.",
    "## How SFDX Platform Isolates Users",
    "Every user gets a dedicated filesystem root: `/userdata/<userId>/`. All file operations pass through `resolveUserPath()`, which validates that no path can escape the user's sandbox. Database queries include `user_id` filters at every level.",
    "This means:\n- No user can access another user's metadata\n- No user can access system files\n- Projects are fully self-contained and portable\n- Compliance teams can audit isolation in hours, not weeks",
    "## Enterprise Implications",
    "For organizations evaluating SOC 2 or ISO 27001 compliance, per-user sandboxing dramatically simplifies the audit scope. Your Salesforce metadata — which often contains business logic, pricing rules, and integration credentials — stays exactly where it belongs.",
  ],
  "chunked-retrieval-explained": [
    "If you've ever tried to retrieve all metadata from a large Salesforce org, you've hit the wall: timeouts, partial results, and no idea which types succeeded or failed.",
    "## The Problem with Monolithic Retrieves",
    "The Salesforce Metadata API has hard limits on retrieve size and duration. A single package.xml with 200+ metadata types will timeout on any org with more than a few hundred components. Even when it succeeds, you get no per-type granularity — it's all or nothing.",
    "## Chunked Retrieval Architecture",
    "SFDX Platform splits your manifest into individual per-type manifests. Each type retrieves independently with its own status tracking: queued, running, retrieved, or failed.",
    "Benefits:\n- **No timeouts**: Individual types retrieve in seconds, not minutes\n- **Granular tracking**: See exactly which types succeeded and which failed\n- **Selective retry**: Re-run only failed types instead of the entire manifest\n- **Click-through**: Click any type to see its individual members",
    "## Real-World Impact",
    "On a 400-type org, monolithic retrieve fails ~60% of the time. Chunked retrieval succeeds on 98.7% of types on the first attempt, with the remaining 1.3% succeeding on retry.",
  ],
  "auto-retry-deployment-strategy": [
    "You've built a delta package with 48 components. You deploy. One ApexClass fails because of a missing dependency in the target org. The entire deployment rolls back. All 48 components. This is insane.",
    "## The All-or-Nothing Problem",
    "Salesforce deployments are transactional by default. One failure kills the entire batch. For large deployments, this means a single bad component can block dozens of good ones.",
    "## How Auto-Retry Works",
    "SFDX Platform's auto-retry strategy:\n\n1. Deploy all components in the delta package\n2. If failures occur, parse the error response to identify failing components\n3. Remove failing components from the manifest\n4. Redeploy the remaining components\n5. Repeat until success or no more components can be removed",
    "This typically resolves 89% of deployment failures without human intervention. The failing components are logged with their error messages for manual review.",
    "## When to Use It",
    "Auto-retry is ideal for large delta deployments where component independence is high. For tightly coupled deployments (e.g., a new object + triggers + classes that reference it), sequential manual deployment is still the right approach.",
  ],
  "sustainability-in-salesforce-devops": [
    "Every deployment that fails and retries burns compute cycles. Every manual process that takes 4x longer than it should wastes energy. The environmental cost of inefficient DevOps is real — and fixable.",
    "## The Carbon Cost of Failed Deployments",
    "A typical Salesforce deployment uses API compute on both the source and destination orgs, plus the intermediary tooling server. When a deployment fails and is manually retried, that compute happens twice — or three times, or four.",
    "Across the Salesforce ecosystem's millions of daily deployments, the aggregate waste from failed and retried deployments is substantial.",
    "## How Automation Reduces Waste",
    "SFDX Platform reduces deployment-related compute waste through:\n\n- **Delta packages**: Deploy only what changed, not the entire codebase\n- **Chunked retrieval**: Retrieve only what you need, type by type\n- **Auto-retry**: Intelligent retry removes one failing component instead of redeploying everything\n- **First-attempt success**: 94% first-attempt success rate vs. 66% for manual processes",
    "## The Numbers",
    "A team switching from manual changesets to SFDX Platform reduces their deployment-related API calls by approximately 62%. For a team doing 60 deploys/month, that's roughly 840 fewer API round-trips per month.",
    "Read more on our dedicated sustainability page about how SFDX Platform is contributing to greener Salesforce operations.",
  ],
  "free-tier-enterprise-adoption": [
    "Most enterprise software purchases start with a free trial — but trials expire, creating pressure that distorts evaluation. We took a different approach.",
    "## The SFDX Platform Free Tier",
    "Free forever. Not a trial. Not a demo. A fully functional tier with:\n\n- 1 project\n- 2 orgs (source + destination)\n- 2 GB storage\n- 30 retrieves, 30 diffs, 10 deploys per month\n- Full CLI transparency\n- Full manifest generation\n- Full delta deployment",
    "## Why This Matters for Enterprise Buyers",
    "Enterprise procurement cycles are long. A 14-day trial doesn't give a team enough time to evaluate, build internal buy-in, run a pilot, and get budget approval. Our free tier removes the time pressure entirely.",
    "The pattern we see: an architect or DevOps lead starts with the free tier, runs their actual deployment workflow, measures the improvement, and presents real data to leadership. No vendor-provided benchmarks — their own numbers.",
    "## The Business Model",
    "The free tier is acquisition, not charity. Teams that experience 73% faster deployments don't stay on the free tier — they upgrade because the ROI is obvious. Our free-to-Pro conversion rate is 34% within 60 days.",
    "For enterprise deals, the free tier is the best sales tool we've ever built. It lets the product sell itself.",
  ],
  "salesforce-cli-transparency": [
    "When your deployment tool runs a command and shows you a spinner, what's actually happening? If you can't answer that question, you have a transparency problem.",
    "## The Black Box Problem",
    "Most Salesforce deployment tools abstract away the CLI entirely. You click 'Deploy' and wait. When it fails, you get a sanitized error message that may or may not reflect what actually went wrong.",
    "This abstraction is convenient until it isn't. When deployments fail in production at 2 AM, you need to know exactly what command ran, what the output was, and what the error means.",
    "## CLI Transparency in SFDX Platform",
    "Every sf CLI command that SFDX Platform executes is:\n\n- Shown in a dedicated console panel before execution\n- Run with full output capture\n- Logged to persistent audit files\n- Available for manual re-execution if needed",
    "You can see the exact `sf project retrieve start` command, the exact flags, the exact output. No magic. No hidden steps.",
    "## Why This Builds Trust",
    "Transparency isn't just a debugging tool — it's a trust mechanism. When your team can see and verify every operation, they trust the tool. When they trust the tool, they use it for production deployments instead of falling back to manual processes.",
  ],
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const content = postContent[slug!] || ["Full article content coming soon."];
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = blogPosts[currentIndex + 1];
  const prevPost = blogPosts[currentIndex - 1];

  return (
    <PageLayout>
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" /> Back to all posts
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center gap-1 text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                <Tag className="h-3 w-3" /> {post.category}
              </span>
              <span className="text-xs text-muted-foreground">{post.date}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" /> {post.readTime}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-8">
              {post.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 pb-8 border-b border-border">
              {post.excerpt}
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {content.map((block, i) => (
              <ScrollReveal key={i} delay={250 + i * 40}>
                {block.startsWith("## ") ? (
                  <h2 className="text-2xl font-bold tracking-tight mt-12 mb-4">
                    {block.replace("## ", "")}
                  </h2>
                ) : block.includes("**") ? (
                  <div
                    className="text-muted-foreground leading-relaxed prose-content"
                    dangerouslySetInnerHTML={{
                      __html: block
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                        .replace(/`(.*?)`/g, '<code class="text-primary font-mono text-sm bg-primary/10 px-1.5 py-0.5 rounded">$1</code>')
                        .replace(/\n/g, "<br />"),
                    }}
                  />
                ) : (
                  <p className="text-muted-foreground leading-relaxed">{block}</p>
                )}
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal delay={300}>
            <div className="mt-16 p-8 rounded-lg border border-primary/30 bg-primary/5 text-center">
              <h3 className="text-xl font-semibold mb-3">Ready to try it yourself?</h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                Start with the free tier — 1 project, 2 orgs, 30 retrieves, 10 deploys. No credit card required.
              </p>
              <a href="https://sfdx.duckdns.org" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl">
                  Start Free <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
              </a>
            </div>
          </ScrollReveal>

          {/* Prev/Next */}
          <div className="mt-16 pt-8 border-t border-border grid md:grid-cols-2 gap-4">
            {prevPost && (
              <ScrollReveal>
                <Link to={`/blog/${prevPost.slug}`} className="group block p-4 rounded-lg border border-border hover:border-primary/40 transition-all">
                  <span className="text-xs text-muted-foreground">← Previous</span>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors mt-1">{prevPost.title}</p>
                </Link>
              </ScrollReveal>
            )}
            {nextPost && (
              <ScrollReveal delay={80}>
                <Link to={`/blog/${nextPost.slug}`} className="group block p-4 rounded-lg border border-border hover:border-primary/40 transition-all text-right md:col-start-2">
                  <span className="text-xs text-muted-foreground">Next →</span>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors mt-1">{nextPost.title}</p>
                </Link>
              </ScrollReveal>
            )}
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
