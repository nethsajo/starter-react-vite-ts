export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mx-auto w-full border-t px-4 py-12 text-center text-muted-foreground">
      &copy; {currentYear} React Vite TypeScript by Kenneth. All rights reserved.
    </footer>
  );
}
