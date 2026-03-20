import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_protected/sample')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_protected/sample"!</div>;
}
