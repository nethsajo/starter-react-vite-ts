import { ReactIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Link } from '@tanstack/react-router';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu';

export function Navbar() {
  return (
    <div className="supports-backdrop-filter:bg-background/50 shadow-primary/5 sticky top-0 z-50 h-16 w-full shrink-0 border-b border-dashed shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-8 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-1">
          <HugeiconsIcon icon={ReactIcon} className="size-8 text-blue-700" />
          <p className="text-primary text-xl font-bold tracking-tighter">
            React <span className="text-muted-foreground">Vite</span>
          </p>
        </Link>
        <div className="absolute left-1/2 -translate-x-1/2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
                >
                  <Link
                    to="/"
                    activeProps={{ className: 'font-bold text-primary' }}
                    inactiveProps={{ className: 'font-medium text-gray-500' }}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
                >
                  <Link
                    to="/sample"
                    activeProps={{ className: 'font-bold text-primary' }}
                    inactiveProps={{ className: 'font-medium text-gray-500' }}
                  >
                    Sample
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="">
          <Button className="rounded-md">Login</Button>
        </div>
      </div>
    </div>
  );
}
