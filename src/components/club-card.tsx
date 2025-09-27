import Image from 'next/image';
import Link from 'next/link';
import type { Club } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle } from 'lucide-react';

type ClubCardProps = {
  club: Club;
};

export function ClubCard({ club }: ClubCardProps) {
  const placeholder = PlaceHolderImages.find(p => p.id === club.image);

  return (
    <Link href="#">
      <Card className="w-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300 ease-in-out h-full flex flex-col">
        <CardHeader className="p-0">
          <div className="relative h-40 w-full">
            {placeholder && (
              <Image
                src={placeholder.imageUrl}
                alt={placeholder.description}
                fill
                className="object-cover"
                data-ai-hint={placeholder.imageHint}
              />
            )}
            <div className="absolute top-2 right-2 flex gap-2">
                {club.isFeatured && (
                    <Badge className="bg-accent text-accent-foreground hover:bg-accent/80">
                        <Star className="mr-1 h-3 w-3" />
                        Featured
                    </Badge>
                )}
                {club.isVerified && (
                     <Badge>
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Verified
                    </Badge>
                )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <Badge variant="secondary" className="mb-2">{club.category}</Badge>
          <CardTitle className="text-xl leading-snug mb-2">{club.name}</CardTitle>
          <CardDescription className="text-sm line-clamp-3">{club.description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
