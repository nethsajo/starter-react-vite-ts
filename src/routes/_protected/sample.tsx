import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_protected/sample')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="container mx-auto px-4 py-14 sm:px-6">Hello "/_protected/sample"!</div>;
}
