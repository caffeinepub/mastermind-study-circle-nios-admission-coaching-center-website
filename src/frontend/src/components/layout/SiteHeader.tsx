import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useAuthz } from '../../hooks/useAuthz';

const publicNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/vision', label: 'Our Vision' },
  { href: '/nios-streams', label: 'NIOS Streams & Subjects' },
  { href: '/admissions', label: 'Admissions & Contact' },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;
  const { isAuthenticated, isAdmin } = useAuthz();

  const showAdminLink = isAuthenticated && isAdmin;

  const navLinks = showAdminLink
    ? [...publicNavLinks, { href: '/admin', label: 'Admin' }]
    : publicNavLinks;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/generated/nios-coaching-logo.dim_512x512.png"
            alt="Mastermind Study Circle Logo"
            className="h-10 w-10 rounded-lg"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-foreground">Mastermind Study Circle</span>
            <span className="text-xs text-muted-foreground">NIOS Admission & Coaching Center</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                currentPath === link.href
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-bold">Menu</span>
              <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-5 w-5" />
                </Button>
              </SheetClose>
            </div>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    to={link.href}
                    className={`rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                      currentPath === link.href
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
