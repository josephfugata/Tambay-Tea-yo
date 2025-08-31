'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    title: 'Sourced with Care',
    description: 'We travel the world to find the finest tea leaves, ensuring every sip starts with quality.',
    image: 'https://images.unsplash.com/photo-1621221814631-e8bfdabd5ca4?w=400&h=500&auto=format&fit=crop&q=60',
    hint: 'tea leaves',
  },
  {
    title: 'Brewed to Perfection',
    description: 'Our teas are brewed in small batches, timed precisely to extract the richest flavors.',
    image: 'https://picsum.photos/400/500?random=13',
    hint: 'tea brewing',
  },
  {
    title: 'Crafted by Hand',
    description: 'Each drink is a masterpiece, handcrafted with passion by our talented baristas.',
    image: 'https://picsum.photos/400/500?random=14',
    hint: 'barista pouring',
  },
];

const ArtOfBrewing = () => {
  return (
    <section id="art-of-brewing" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline mb-4">
          The Art of the Brew
        </h2>
        <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mb-12">
          It’s more than a process; it’s our passion. Discover the journey from leaf to cup.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="p-0">
                <div className="relative h-64 w-full">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    data-ai-hint={step.hint}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-headline mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtOfBrewing;
