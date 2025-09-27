import Image from "next/image";
import { events } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Share2, Heart } from "lucide-react";
import { format } from "date-fns";

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = events.find((e) => e.id === params.id);

  if (!event) {
    notFound();
  }

  const placeholder = PlaceHolderImages.find((p) => p.id === event.image);

  return (
    <div className="container max-w-4xl mx-auto py-8 md:py-12">
      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
        {placeholder && (
          <Image
            src={placeholder.imageUrl}
            alt={placeholder.description}
            fill
            className="object-cover"
            data-ai-hint={placeholder.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 md:p-8">
          <Badge variant="secondary" className="mb-2">{event.category}</Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground tracking-tight">
            {event.title}
          </h1>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">About this Event</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{event.description}</p>
        </div>
        <div className="space-y-6">
          <div className="p-6 rounded-lg bg-card border">
            <h3 className="text-xl font-bold mb-4">Details</h3>
            <div className="space-y-4 text-md text-card-foreground">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <span>{format(new Date(event.date), 'EEEE, MMMM d, yyyy')}</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <span>{event.venue}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Button size="lg">
              <Heart className="mr-2 h-5 w-5" />
              Save to Calendar
            </Button>
            <Button variant="secondary" size="lg">
              <Share2 className="mr-2 h-5 w-5" />
              Share Event
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
