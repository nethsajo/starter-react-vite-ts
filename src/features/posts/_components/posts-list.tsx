import { AlertCircle, RefreshCw, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { usePostsQuery } from '../_hooks/query/use-posts-query';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { type Post } from '@/data';

function PostCard({ post }: { post: Post }) {
  return (
    <article className="rounded-md border border-border bg-card p-3 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-md md:p-4">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="min-w-0 text-base leading-6 font-semibold break-words text-foreground">
          {post.title}
        </h3>
        <Badge variant="outline" className="shrink-0 rounded-md font-mono">
          #{post.id}
        </Badge>
      </div>
      <p className="text-sm leading-6 break-words text-muted-foreground">{post.body}</p>
      <div className="mt-4 border-t border-dashed border-border pt-3 font-mono text-xs text-muted-foreground">
        user {post.userId}
      </div>
    </article>
  );
}

function PostsLoading() {
  return (
    <div className="grid gap-3 md:gap-4 xl:grid-cols-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="h-44 animate-pulse rounded-md border border-border bg-muted/70 p-3 md:p-4"
        />
      ))}
    </div>
  );
}

export function PostsList() {
  const [searchValue, setSearchValue] = useState('');
  const postsQuery = usePostsQuery();
  const posts = postsQuery.data ?? [];

  const filteredPosts = useMemo(() => {
    const query = searchValue.trim().toLowerCase();
    if (!query) return posts;

    return posts.filter(post =>
      [post.title, post.body, String(post.id), String(post.userId)].some(value =>
        value.toLowerCase().includes(query)
      )
    );
  }, [posts, searchValue]);

  return (
    <section aria-labelledby="posts-list-heading" className="space-y-3 md:space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-4">
        <div className="min-w-0 space-y-1">
          <h2 id="posts-list-heading" className="text-lg font-semibold break-words text-foreground">
            Read posts
          </h2>
          <p aria-live="polite" className="text-sm text-muted-foreground">
            {filteredPosts.length} of {posts.length} posts
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative min-w-0 sm:w-64">
            <Search
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              value={searchValue}
              onChange={event => setSearchValue(event.target.value)}
              aria-label="Search posts"
              placeholder="Search posts"
              className="pl-8"
            />
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => postsQuery.refetch()}
            disabled={postsQuery.isFetching}
            className="w-full sm:w-auto"
          >
            <RefreshCw
              aria-hidden
              className={postsQuery.isFetching ? 'size-4 animate-spin' : 'size-4'}
            />
            Refresh
          </Button>
        </div>
      </div>

      {postsQuery.isError && (
        <Alert variant="destructive">
          <AlertCircle aria-hidden className="size-4" />
          <AlertTitle>Unable to load posts</AlertTitle>
          <AlertDescription>{postsQuery.error.message}</AlertDescription>
        </Alert>
      )}

      {postsQuery.isLoading ? (
        <PostsLoading />
      ) : (
        <div className="grid gap-3 md:gap-4 xl:grid-cols-2">
          {filteredPosts.map(post => (
            <PostCard key={`${post.id}-${post.title}`} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
