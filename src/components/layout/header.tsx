"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bell, Calendar, Home, Menu, Users, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/clubs", label: "Clubs", icon: Users },
  { href: "/calendar", label: "My Calendar", icon: Calendar },
];

export function Header() {
  const pathname = usePathname();

  const NavLink = ({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) => (
    <Link
      href={href}
      className={cn(
        "transition-colors text-lg md:text-sm hover:text-primary",
        pathname === href ? "text-primary font-semibold" : "text-muted-foreground"
      )}
    >
      <span className="flex items-center gap-2">
        <Icon className="h-5 w-5 md:hidden" />
        <span>{label}</span>
      </span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">
              Campus Hub
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
        </div>

        <div className="md:hidden">
           <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="font-bold">Campus Hub</span>
              </Link>
              <nav className="flex flex-col space-y-6">
                <Link
                  href="/"
                  className={cn(
                    "transition-colors text-lg hover:text-primary",
                    pathname === "/" ? "text-primary font-semibold" : "text-muted-foreground"
                  )}>
                   <span className="flex items-center gap-2"><Home className="h-5 w-5" /><span>Home</span></span>
                </Link>
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Can add search bar here later */}
          </div>
          <nav className="flex items-center">
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </Button>
             <Button asChild className="ml-2">
              <Link href="/login">Sign In</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
