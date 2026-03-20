import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_protected')({
  component: PrivateLayout,
});

function PrivateLayout() {
  return <Outlet />;
}
