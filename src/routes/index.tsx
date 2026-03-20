import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: IndexPage,
});

function IndexPage() {
  return (
    <div className="container mx-auto flex flex-col gap-16 py-20">
      <section className="flex flex-col items-center gap-8 text-center">
        <div className="space-y-4">
          <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-6xl">
            React Vite TypeScript <br />
            Starter
          </h1>
          <p className="text-muted-foreground font-mono text-sm">
            <span className="text-muted-foreground/60">{'// '}</span>
            Modern. Minimalist. Type-Safe.
          </p>
        </div>

        <p className="text-muted-foreground max-w-175 text-lg md:text-xl">
          A production-ready template with TanStack Router, TypeScript, Tailwind CSS, and shadcn/ui.
          Built for developers who value clarity.
        </p>

        {/* <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="h-12 px-8">
            <Link to="/sample">
              <span className="text-primary-foreground mr-2 font-mono">$</span>
              Start Building
              <span className="ml-2 animate-pulse">_</span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 font-mono">
            <a
              href="https://github.com/constROD/template-react-vite"
              target="_blank"
              rel="noreferrer"
            >
              git clone
            </a>
          </Button>
        </div> */}
      </section>

      <section className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-2 lg:gap-8">
        {/* Panel Card */}
        <div className="group border-border bg-card hover:border-primary/50 rounded-lg border p-6 transition-colors">
          <div className="bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-full">
            {/* <Zap className="text-primary h-5 w-5" /> */}
          </div>
          <h3 className="text-foreground mb-2 text-xl font-semibold">Lightning Fast</h3>
          <p className="text-muted-foreground">
            Powered by Vite and optimized for performance. Experience instant HMR and rapid builds.
          </p>
        </div>

        {/* Code Block Card */}
        <div className="border-border bg-card overflow-hidden rounded-lg border">
          <div className="border-border bg-muted flex items-center gap-2 border-b px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="text-muted-foreground ml-2 font-mono text-xs">sample-page.tsx</span>
          </div>
          <div className="flex h-full flex-col justify-between p-6">
            <div>
              <h3 className="text-foreground mb-2 text-xl font-semibold">Sample Integration</h3>
              <p className="text-muted-foreground mb-6">
                Demonstrates TanStack React Query for efficient data fetching and server actions.
              </p>
            </div>
            {/* <Button
              asChild
              variant="secondary"
              className="w-full justify-between font-mono text-xs"
            >
              <Link to="/sample">
                <span>View Sample</span>
                <ArrowRight size={14} />
              </Link>
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
}
