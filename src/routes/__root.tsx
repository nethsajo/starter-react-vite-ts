import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import * as React from 'react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { useLayoutsContext } from '@/contexts/layouts';
import { cn } from '@/lib/utils';
import '../global.css';

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
  const { hideNavbar, hideFooter } = useLayoutsContext();

  return (
    <React.Fragment>
      <HeadContent />
      <div className="relative min-h-screen font-sans antialiased">
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
          {!hideNavbar && <Navbar />}
          <main className={cn('h-full w-full')}>
            <Outlet />
          </main>
          {!hideFooter && <Footer />}
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
      <ReactQueryDevtools initialIsOpen={false} />
      <TanStackRouterDevtools />
    </>
  );
}
