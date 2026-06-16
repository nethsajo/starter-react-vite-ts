import {
  ArrowRight01Icon,
  Copy01Icon,
  GitForkIcon,
  Rocket01Icon,
  SourceCodeIcon,
  Tick02Icon,
  ZapIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useState, type ReactNode } from 'react';
import { DashedGridBackground } from '@/components/dashed-grid-background';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/')({
  component: IndexPage,
});

const cloneCommand = 'git clone https://github.com/nethsajo/starter-react-vite-ts';

type Feature = {
  icon: IconSvgElement;
  meta: string;
  title: string;
  children: ReactNode;
};

type Metric = {
  value: string;
  label: string;
};

const features: Feature[] = [
  {
    icon: ZapIcon,
    meta: 'vite/hmr',
    title: 'Fast Feedback',
    children: 'Iterate quickly with Vite, fast refresh, and a small starter surface.',
  },
  {
    icon: SourceCodeIcon,
    meta: 'ts/strict',
    title: 'Typed By Default',
    children: 'Start with TypeScript patterns that make route, data, and UI changes safer.',
  },
  {
    icon: Rocket01Icon,
    meta: 'app/ready',
    title: 'Production Shape',
    children: 'TanStack Router, Query, shadcn/ui, Tailwind, and project rules are already wired.',
  },
];

const metrics: Metric[] = [
  { value: '<1m', label: 'Local setup' },
  { value: '100%', label: 'TypeScript first' },
  { value: '7+', label: 'Core tools' },
  { value: 'OSS', label: 'Starter base' },
];

function FeatureCard({ icon, meta, title, children }: Feature) {
  return (
    <article className="group rounded-md border border-border bg-card/90 p-3 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-md md:p-4 lg:p-6">
      <div className="mb-3 flex items-center justify-between gap-3 md:mb-4">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-foreground transition-colors duration-200 group-hover:bg-background">
          <HugeiconsIcon icon={icon} aria-hidden className="size-4" />
        </span>
        <span className="min-w-0 truncate font-mono text-xs text-muted-foreground">{meta}</span>
      </div>
      <div className="space-y-2 md:space-y-3">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <p className="text-sm leading-6 text-muted-foreground">{children}</p>
      </div>
    </article>
  );
}

function MetricItem({ value, label }: Metric) {
  return (
    <div className="rounded-md border border-border bg-background/75 p-3 shadow-xs md:p-4">
      <div className="font-mono text-2xl font-semibold text-foreground md:text-3xl">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function IndexPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cloneCommand);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative isolate overflow-hidden">
      <DashedGridBackground />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-3 py-4 sm:px-4 sm:py-5 md:gap-4 md:px-6 md:py-6 lg:gap-6 lg:px-8 lg:py-8">
        <section
          aria-labelledby="home-hero-title"
          className="grid min-h-[calc(100svh-12rem)] items-center gap-3 md:gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] lg:gap-6"
        >
          <div className="space-y-4 md:space-y-5">
            <Badge
              variant="outline"
              className="h-auto max-w-full rounded-md border-dashed bg-background/85 px-2.5 py-1 font-mono text-xs text-muted-foreground shadow-xs backdrop-blur"
            >
              <span className="size-1.5 rounded-full bg-foreground" aria-hidden />
              workstation-ready starter
            </Badge>

            <div className="space-y-2 md:space-y-3">
              <h1
                id="home-hero-title"
                className="max-w-4xl text-4xl leading-tight font-semibold break-words text-foreground sm:text-5xl lg:text-6xl"
              >
                React Vite TypeScript Starter
              </h1>
              <p className="max-w-2xl text-base leading-7 text-pretty text-muted-foreground md:text-lg">
                A minimal, typed workstation for building React apps with TanStack Router, Query,
                shadcn/ui, and Tailwind already in place.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                type="button"
                size="lg"
                variant="outline"
                onClick={handleCopy}
                className="w-full justify-between gap-3 border-dashed bg-background/85 px-3 shadow-xs backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:w-auto sm:justify-center"
              >
                <HugeiconsIcon icon={GitForkIcon} aria-hidden className="size-4" />
                <code className="min-w-0 font-mono text-sm text-foreground">git clone</code>
                <span className="flex min-w-12 items-center justify-end gap-1 font-mono text-xs text-muted-foreground">
                  {copied ? (
                    <>
                      copied
                      <HugeiconsIcon
                        icon={Tick02Icon}
                        aria-hidden
                        className="size-4 text-foreground"
                      />
                    </>
                  ) : (
                    <>
                      copy
                      <HugeiconsIcon icon={Copy01Icon} aria-hidden className="size-4" />
                    </>
                  )}
                </span>
              </Button>

              <Button
                asChild
                size="lg"
                className="w-full px-3 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:w-auto"
              >
                <Link to="/sample">
                  View sample
                  <HugeiconsIcon icon={ArrowRight01Icon} aria-hidden className="size-4" />
                </Link>
              </Button>
            </div>

            <p aria-live="polite" className="min-h-5 text-sm text-muted-foreground">
              {copied ? 'Clone command copied to clipboard.' : 'Ready for local development.'}
            </p>
          </div>

          <aside
            aria-label="Starter command preview"
            className="overflow-hidden rounded-md border border-border bg-card/95 shadow-sm backdrop-blur"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-muted/70 px-3 py-2 md:px-4">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-foreground" aria-hidden />
                <span className="font-mono text-xs text-foreground">local</span>
              </div>
              <span className="font-mono text-xs text-muted-foreground">starter.config.ts</span>
            </div>
            <div className="overflow-x-auto p-3 md:p-4 lg:p-6">
              <div className="min-w-max space-y-3 font-mono text-xs leading-6 md:text-sm">
                <p>
                  <span className="text-muted-foreground">$</span>{' '}
                  <span className="text-foreground">pnpm install</span>
                </p>
                <p>
                  <span className="text-muted-foreground">$</span>{' '}
                  <span className="text-foreground">pnpm dev</span>
                </p>
                <p className="text-muted-foreground">
                  vite ready <span className="text-foreground">localhost:5173</span>
                </p>
                <p>
                  <span className="text-muted-foreground">stack:</span>{' '}
                  <span className="text-foreground">react + vite + tanstack + shadcn</span>
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section aria-labelledby="stack-heading" className="space-y-3 md:space-y-4">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end md:gap-4">
            <div className="space-y-2 md:space-y-3">
              <p className="font-mono text-xs text-muted-foreground">/src/routes/index.tsx</p>
              <h2 id="stack-heading" className="text-2xl font-semibold text-foreground md:text-3xl">
                Built for focused app work.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              Start from a disciplined React stack with typed routing, query flow, and reusable UI
              primitives already organized.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3 md:gap-4 lg:gap-6">
            {features.map(feature => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <section
          aria-labelledby="sample-heading"
          className="grid gap-3 md:gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-6"
        >
          <div className="rounded-md border border-dashed border-border bg-background/80 p-3 shadow-xs backdrop-blur md:p-4 lg:p-6">
            <div className="space-y-2 md:space-y-3">
              <p className="font-mono text-xs text-muted-foreground">/_protected/sample</p>
              <h2
                id="sample-heading"
                className="text-2xl font-semibold text-foreground md:text-3xl"
              >
                Sample integration
              </h2>
              <p className="text-sm leading-6 text-muted-foreground">
                A protected route demonstrates TanStack Query flow, mutation structure, and the
                starter project conventions in one place.
              </p>
            </div>
            <Button asChild variant="link" className="mt-4 h-auto px-0 text-sm font-medium md:mt-5">
              <Link to="/sample">
                Open sample route
                <HugeiconsIcon icon={ArrowRight01Icon} aria-hidden className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="overflow-hidden rounded-md border border-border bg-card shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-muted/70 px-3 py-2 md:px-4">
              <span className="font-mono text-xs text-foreground">sample-page.tsx</span>
              <span className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-xs text-muted-foreground">
                query hook
              </span>
            </div>
            <div className="overflow-x-auto p-3 md:p-4 lg:p-6">
              <div className="min-w-max space-y-2 font-mono text-xs leading-6 md:text-sm">
                <p>
                  <span className="text-muted-foreground">import</span>{' '}
                  <span className="text-foreground">{'{ useQuery }'}</span>{' '}
                  <span className="text-muted-foreground">from</span>{' '}
                  <span className="text-foreground">'@tanstack/react-query'</span>
                </p>
                <p className="text-muted-foreground">// route-level data stays predictable</p>
                <p>
                  <span className="text-muted-foreground">const</span>{' '}
                  <span className="text-foreground">{'{ data, isLoading } = useQuery(...)'}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-label="Starter project metrics"
          className="grid grid-cols-2 gap-3 border-y border-dashed border-border py-3 md:grid-cols-4 md:gap-4 md:py-4 lg:gap-6 lg:py-6"
        >
          {metrics.map(metric => (
            <MetricItem key={metric.label} {...metric} />
          ))}
        </section>
      </div>
    </div>
  );
}
