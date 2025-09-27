import Link from "next/link";
import { ArrowRight, Calendar, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClubCard } from "@/components/club-card";
import { EventCard } from "@/components/event-card";
import { clubs, events } from "@/lib/data";

export default function Home() {
  const upcomingEvents = events.slice(0, 8);
  const featuredClubs = clubs.filter((c) => c.isFeatured).slice(0, 6);

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-foreground/90 to-foreground/50 leading-tight">
                  Connect Your Campus Life
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover events, join clubs, and manage your schedule. Campus Hub is your all-in-one platform for a vibrant university experience.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" asChild>
                  <Link href="/events">
                    Explore Events
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/clubs">
                    Find Clubs
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Upcoming Events</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Don't Miss Out</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From tech talks to cultural festivals, there's always something happening on campus.
                </p>
              </div>
            </div>
            <div className="relative mt-12">
              <div className="w-full overflow-hidden">
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                  {[...upcomingEvents, ...upcomingEvents].map((event, index) => (
                    <div key={index} className="w-[350px] px-4">
                      <EventCard event={event} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-secondary/30 to-transparent"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-secondary/30 to-transparent"></div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Find Your Community
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore a diverse range of clubs and student organizations.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-8">
              {featuredClubs.map((club) => (
                <ClubCard key={club.id} club={club} />
              ))}
            </div>
            <div className="flex justify-center pt-8">
               <Button variant="outline" asChild>
                  <Link href="/clubs">
                    View All Clubs
                    <Users className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
