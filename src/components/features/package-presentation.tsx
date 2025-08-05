"use client";

import type { Package } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CalendarDays, DollarSign, ListChecks, MapPin, Package as PackageIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const mockPackages: Package[] = [
  { id: '1', name: 'Enchanting Himachal', destination: 'Shimla, Manali, Dharamshala', duration: '10 Days', price: '₹25,000', highlights: ['Mall Road & Jakhu Temple Visit', 'Rohtang Pass Snow Adventure', 'Dalai Lama Monastery Tour'], image: 'https://placehold.co/600x400.png', imageHint: 'enchanting Himachal' },
  
];

export function PackagePresentation() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-headline font-semibold tracking-tight text-center">Featured Packages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {mockPackages.map((pkg) => (
          <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col">
            <CardHeader className="p-0">
              <div className="aspect-[16/9] relative w-full">
                <Image 
                  src="/images/kufri-7217824_1280.jpg" alt="Destination Image"
                  alt={pkg.name} 
                  width={700}
                  height={300}
                  objectFit="cover"
                  data-ai-hint={pkg.imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="text-xl font-headline mb-1 flex items-center gap-2">
                <PackageIcon className="h-5 w-5 text-primary" />
                {pkg.name}
              </CardTitle>
              <CardDescription className="mb-3 text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {pkg.destination}
              </CardDescription>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm">
                  <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                  <span>Duration: {pkg.duration}</span>
                </div>
                <div className="flex items-center text-sm">
                  <DollarSign className="h-4 w-4 mr-2 text-primary" />
                  <span>Price: {pkg.price}</span>
                </div>
                <div className="mt-2">
                  <div className="flex items-start text-sm">
                    <ListChecks className="h-4 w-4 mr-2 mt-1 text-primary shrink-0" />
                    <div>
                      <span className="font-medium">Highlights:</span>
                      <ul className="list-disc list-inside ml-1">
                        {pkg.highlights.map((highlight, index) => (
                          <li key={index} className="text-xs text-muted-foreground">{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button className="w-full" variant="cta">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
