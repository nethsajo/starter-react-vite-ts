import { createFileRoute } from '@tanstack/react-router';
import { DashedGridBackground } from '@/components/dashed-grid-background';
import { Badge } from '@/components/ui/badge';
import { CreatePostForm } from '@/features/posts/_components/create-post-form';
import { PostsList } from '@/features/posts/_components/posts-list';

export const Route = createFileRoute('/posts/')({
  component: PostsPage,
});

function PostsPage() {
  return (
    <div className="relative isolate min-h-full overflow-hidden">
      <DashedGridBackground />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-3 py-4 sm:px-4 sm:py-5 md:gap-4 md:px-6 md:py-6 lg:gap-6 lg:px-8 lg:py-8">
        <header className="flex flex-col justify-between gap-3 border-b border-dashed border-border pb-3 md:flex-row md:items-end md:gap-4 md:pb-4 lg:gap-6 lg:pb-6">
          <div className="min-w-0 space-y-2 md:space-y-3">
            <Badge
              variant="outline"
              className="h-auto max-w-full rounded-md border-dashed bg-background/85 px-2.5 py-1 font-mono text-xs text-muted-foreground shadow-xs backdrop-blur"
            >
              jsonplaceholder /posts
            </Badge>
            <h1 className="text-3xl leading-tight font-semibold break-words text-foreground md:text-4xl">
              Posts
            </h1>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted-foreground md:text-right">
            Create and read records from the JSONPlaceholder posts endpoint.
          </p>
        </header>

        <div className="grid gap-3 md:gap-4 lg:grid-cols-[minmax(18rem,0.42fr)_minmax(0,1fr)] lg:gap-6">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <CreatePostForm />
          </div>
          <PostsList />
        </div>
      </div>
    </div>
  );
}
