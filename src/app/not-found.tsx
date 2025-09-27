import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] text-center px-4">
      <h1 className="text-8xl md:text-9xl font-black text-primary animate-pulse">404</h1>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight">Page Not Found</h2>
      <p className="mt-2 max-w-md text-muted-foreground">
        Oops! The page you're looking for seems to have gotten lost in the campus library.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Go Back to Home</Link>
      </Button>
    </div>
  );
}
