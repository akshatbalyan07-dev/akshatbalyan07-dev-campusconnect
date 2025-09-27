import Image from 'next/image';
import Link from 'next/link';
import type { Event } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Heart, Share2 } from 'lucide-react';
import { format } from 'date-fns';

type EventCardProps = {
  event: Event;
};

export function EventCard({ event }: EventCardProps) {
  const placeholder = PlaceHolderImages.find(p => p.id === event.image);

  return (
    <Card className="w-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300 ease-in-out">
      <Link href={`/events/${event.id}`}>
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            {placeholder && (
              <Image
                src={placeholder.imageUrl}
                alt={placeholder.description}
                fill
                className="object-cover"
                data-ai-hint={placeholder.imageHint}
              />
            )}
             <Badge variant="secondary" className="absolute top-2 right-2">{event.category}</Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg leading-snug mb-2 truncate">{event.title}</CardTitle>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(event.date), 'MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="truncate">{event.venue}</span>
            </div>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="ghost" size="sm">
          <Heart className="mr-2 h-4 w-4" />
          Save
        </Button>
        <Button variant="ghost" size="sm">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </CardFooter>
    </Card>
  );
}
