import { DashedGridBackground } from '@/components/dashed-grid-background';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
import React, { useState } from 'react';

export const Route = createFileRoute('/')({
  component: IndexPage,
});

type Feature = {
  icon: IconSvgElement;
  title: string;
  children: React.ReactNode;
};

function FeatureCard({ icon, title, children }: Feature) {
  return (
    <div className="group border-border bg-card hover:border-primary/20 rounded-lg border p-6 transition-colors">
      <HugeiconsIcon icon={icon} className="mb-4 size-8 text-blue-500" />
      <h3 className="text-foreground mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{children}</p>
    </div>
  );
}

function IndexPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('git clone https://github.com/nethsajo/starter-react-vite-ts');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen w-full bg-white">
      <DashedGridBackground />
      <div className="relative z-10 container mx-auto flex flex-col gap-16 px-4 py-20 sm:px-6">
        <section className="flex flex-col items-center gap-8 text-center">
          <div className="space-y-8">
            <Badge className="h-7 bg-blue-100 py-1.5 font-semibold text-blue-600 [&>svg]:size-4!">
              <HugeiconsIcon
                icon={ZapIcon}
                data-icon="inline-start"
                className="animate-pulse text-blue-500"
              />
              Lightning-fast development
            </Badge>
            <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-6xl">
              React Vite TypeScript <br />
              Starter
            </h1>
          </div>
          <p className="text-muted-foreground max-w-175 text-lg text-balance md:text-xl">
            A scalable, production-grade foundation with Vite, TypeScript, TanStack Router & Query,
            shadcn/ui, and Tailwind CSS pre-configured.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              onClick={handleCopy}
              className="group px-6 py-3 transition-all"
            >
              <HugeiconsIcon
                icon={GitForkIcon}
                className="text-accent-foreground mr-3 size-4 shrink-0"
              />
              <code className="text-foreground font-mono text-sm whitespace-nowrap">
                git clone starter
              </code>
              <div className="ml-0 flex h-4 w-0 shrink-0 items-center justify-center overflow-hidden transition-all duration-300 group-hover:ml-3 group-hover:w-4">
                {copied ? (
                  <HugeiconsIcon icon={Tick02Icon} className="size-4 text-green-500" />
                ) : (
                  <HugeiconsIcon
                    icon={Copy01Icon}
                    className="text-accent-foreground size-4 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                )}
              </div>
            </Button>
          </div>
        </section>
        <section className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-3 lg:gap-8">
          <FeatureCard icon={ZapIcon} title="Lightning Fast">
            Powered by Vite and optimized for performance. Experience instant HMR and rapid builds.
          </FeatureCard>
          <FeatureCard icon={SourceCodeIcon} title="Type-Safe">
            Full TypeScript support with strict mode enabled. Build with confidence and catch errors
            early.
          </FeatureCard>
          <FeatureCard icon={Rocket01Icon} title="Modern Stack">
            Pre-configured with TanStack Router, Query, shadcn/ui, and Tailwind. Ready for
            production.
          </FeatureCard>
        </section>
        <section className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-balance">Sample Integration</h2>
            <p className="text-muted-foreground mb-6 text-balance">
              Demonstrates TanStack React Query for efficient data fetching and server actions. Get
              started with best practices out of the box.
            </p>
            <Button asChild variant="outline" size="lg" className="cursor-pointer">
              <Link to="/sample">
                View Sample
                <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="border-border bg-card overflow-hidden rounded-lg border">
            <div className="border-border bg-muted flex items-center gap-2 border-b px-4 py-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="text-muted-foreground ml-2 font-mono text-xs">sample-page.tsx</span>
            </div>
            <div className="overflow-x-auto p-4 font-mono text-sm">
              <div className="text-cyan-600">
                import <span className="text-blue-500">{'{ useQuery }'}</span>{' '}
                <span className="text-cyan-600">from</span>{' '}
                <span className="text-green-600">'@tanstack/react-query'</span>
              </div>
              <div className="mt-2 text-slate-400">// Your data fetching logic here</div>
              <div className="mt-2 text-cyan-600">
                <span className="text-blue-500">const</span> {'{ data, isLoading } ='}{' '}
                <span className="text-blue-500">useQuery</span>
                <span className="text-slate-400">{'{...}'}</span>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto grid w-full max-w-6xl gap-6 border-t border-b py-12 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-1 text-3xl font-bold">0ms</div>
            <div className="text-muted-foreground text-sm">Setup time</div>
          </div>
          <div className="text-center">
            <div className="mb-1 text-3xl font-bold">100%</div>
            <div className="text-muted-foreground text-sm">Type-safe</div>
          </div>
          <div className="text-center">
            <div className="mb-1 text-3xl font-bold">100%</div>
            <div className="text-muted-foreground text-sm">Tools included</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-1 text-3xl font-bold">∞</div>
            <div className="text-muted-foreground text-sm">Scalability</div>
          </div>
        </section>
      </div>
    </div>
  );
}
