import Link from "next/link";
import { GraduationCap, Twitter, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <GraduationCap className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built for a better campus life.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-4">
            <div className="flex gap-4 text-sm text-muted-foreground">
                <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            </div>
            <div className="flex gap-4">
                <Link href="#" aria-label="Twitter">
                    <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                 <Link href="#" aria-label="Instagram">
                    <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                 <Link href="#" aria-label="Facebook">
                    <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
