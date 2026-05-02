import { AddSampleForm } from '@/features/sample/_components/add-sample-form';
import { DatabaseIcon, SafeIcon, ZapIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_protected/sample')({
  component: SamplePage,
});

function SamplePage() {
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
        <AddSampleForm />
      </div>
    </div>
  );
}
