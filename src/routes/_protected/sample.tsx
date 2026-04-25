import { DatabaseIcon, SafeIcon, ZapIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_protected/sample')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto h-full max-w-7xl gap-8 px-4 py-14 sm:px-6">
      <div className="grid gap-8 sm:grid-cols-[max-content_1fr]">
        <div className="space-y-2">
          <h1 className="text-foreground text-3xl font-bold tracking-tight">Sample Integration</h1>
          <p className="text-muted-foreground text-sm">CRUD operations with TanStack Query</p>
          <div className="mt-6 space-y-3">
            <h3 className="text-foreground text-sm font-semibold tracking-wider uppercase">
              Features
            </h3>
            <div className="space-y-2">
              <div className="text-muted-foreground hover:text-foreground flex items-center gap-3 text-sm transition-colors">
                <HugeiconsIcon
                  icon={DatabaseIcon}
                  data-icon="inline-start"
                  className="text-blue-500"
                />
                <span>Data Fetching</span>
              </div>
              <div className="text-muted-foreground hover:text-foreground flex items-center gap-3 text-sm transition-colors">
                <HugeiconsIcon icon={ZapIcon} data-icon="inline-start" className="text-blue-500" />
                <span>Real-time updates</span>
              </div>
              <div className="text-muted-foreground hover:text-foreground flex items-center gap-3 text-sm transition-colors">
                <HugeiconsIcon icon={SafeIcon} data-icon="inline-start" className="text-blue-500" />
                <span>Type-safe</span>
              </div>
            </div>
          </div>
        </div>
        {/* Add Sample - Code Block Card Style */}
        <div className="border-border bg-card overflow-hidden rounded-lg border">
          <div className="border-border bg-muted flex items-center gap-2 border-b px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="text-muted-foreground ml-2 font-mono text-xs">create-sample.tsx</span>
          </div>
          <div className="p-6">
            <div className="mb-6 space-y-1">
              <h2 className="text-foreground text-lg font-semibold">Add New Sample</h2>
              <p className="text-muted-foreground text-sm">Create a new record in the database.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
