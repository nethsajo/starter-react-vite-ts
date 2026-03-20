import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import * as React from 'react';

export const Route = createRootRoute({
  component: RootPage,
  head: () => ({
    title: 'React Vite TS Starter',
    meta: [
      { name: 'title', content: 'React Vite TS Starter' },
      { name: 'description', content: 'React Vite TS Starter' },
      { name: 'application_name', content: 'React Vite TS App Starter' },

      // Open Graph / Facebook
      { property: 'og:title', content: 'React Vite TS Starter' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'React Vite TS Starter' },
      { property: 'og:url', content: 'https://www.youtube.com/' },
      { property: 'og:description', content: 'React Vite TS Starter' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image:alt', content: 'banner_description' },

      // For Analytics
      { property: 'fb:app_id', content: 'your_app_id' },
      { name: 'twitter:site', content: '@username' },

      // Favicon
      { name: 'msapplication-TileColor', content: '#18181b' },
      { name: 'theme-color', content: '#ffffff' },
    ],
  }),
});

function RootPage() {
  return (
    <React.Fragment>
      <HeadContent />
      <div className="flex min-h-screen flex-col">
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      <TanStackDevtools />
    </React.Fragment>
  );
}

function TanStackDevtools() {
  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <>
      <TanStackRouterDevtools />
    </>
  );
}
