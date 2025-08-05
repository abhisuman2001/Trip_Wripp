"use client";

import type { Destination } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import Link from 'next/link'; // Add this import

const mockDestinations: Destination[] = [
  { id: '1', name: 'Jaipur, India', description: 'Royal palaces, bustling bazaars, and timeless havelis.', image: '/images/istockphoto-1135820309-612x612.jpg', imageHint: 'Jaipur' },
  { id: '2', name: 'Himachal Pradesh, India', description: 'Snow-capped mountains, serene valleys, and adventurous mountain trails.', image: '/images/mountain-6004249_1280.jpg', imageHint: 'himachal mountains' },
  { id: '3', name: 'Rishikesh, India', description: 'Spiritual vibes, thrilling river rafting, and tranquil sunsets by the Ganges.', image: '/images/river-7895935_1280.jpg', imageHint: 'rishikesh ganges sunset' },
  
];

export function DestinationShowcase() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-headline font-semibold tracking-tight text-center">Popular Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockDestinations.map((destination) => (
          <Link key={destination.id} href={`/destinations/${destination.id}`} className="block">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <CardHeader className="p-0">
                <div className="aspect-[3/2] relative w-full">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    width={500}
                    height={500}
                    objectFit="cover"
                    data-ai-hint={destination.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-headline mb-2 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {destination.name}
                </CardTitle>
                <CardDescription>{destination.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
