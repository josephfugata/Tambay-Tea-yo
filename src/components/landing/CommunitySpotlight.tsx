'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const stories = [
  {
    image: 'https://images.unsplash.com/photo-1542338332-76971ae8c292?w=500&auto=format&fit=crop&q=60',
    hint: 'students studying',
    quote: "Our weekly study group wouldn't be the same without our Tambay Tea sessions. It's our brain fuel!",
    author: '— The Engineering Barkada',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1679090867828-e34703088027?w=500&auto=format&fit=crop&q=60',
    hint: 'couple on a date',
    quote: "We had our first date here! Now it's our go-to spot for anniversaries. So many happy memories.",
    author: '— Mark & Jess',
  },
  {
    image: 'https://picsum.photos/400/300?random=24',
    hint: 'freelancer working',
    quote: "As a freelancer, this is my office. The vibe is just right for getting inspired and being productive.",
    author: '— Alex, Graphic Designer',
  },
   {
    image: 'https://picsum.photos/400/300?random=25',
    hint: 'family laughing',
    quote: "Our Sunday tradition. The kids love the pearls and we love the coffee. It's our family's happy place.",
    author: '— The Santos Family',
  },
];

const CommunitySpotlight = () => {
  return (
    <section id="community-spotlight" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Stories from Our Tables
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
            Our greatest ingredient is you. Here are some of the moments you've shared with us.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {stories.map((story, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4 h-full">
                  <Card className="h-full flex flex-col shadow-lg">
                    <CardContent className="p-0 flex flex-col flex-grow">
                      <div className="relative w-full h-56">
                        <Image
                          src={story.image}
                          alt={story.author}
                          fill
                          className="object-cover rounded-t-lg"
                          data-ai-hint={story.hint}
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <blockquote className="italic text-muted-foreground mb-4 flex-grow">
                          &quot;{story.quote}&quot;
                        </blockquote>
                        <p className="font-bold text-right text-primary">{story.author}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default CommunitySpotlight;
