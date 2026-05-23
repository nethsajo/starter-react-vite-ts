import { createFileRoute, Outlet, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

export const Route = createFileRoute('/_protected')({
  component: ProtectedLayout,
});

function ProtectedLayout() {
  const navigate = useNavigate();
  const isAuthenticated = false;

  useEffect(() => {
    const handleRedirect = () => {
      const url = new URL(window.location.href);
      const pathname = url.pathname;
      const redirect = url.searchParams.get('redirect');

      const encodedRedirect = encodeURIComponent(pathname);

      if (!isAuthenticated) {
        navigate({ to: `/login?redirect=${encodedRedirect}` });
        return;
      }

      if (redirect && redirect !== pathname) {
        navigate({ to: redirect, replace: true });
      }
    };

    handleRedirect();
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return <Outlet />;
}
