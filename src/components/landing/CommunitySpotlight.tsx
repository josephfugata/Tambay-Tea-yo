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
    quote: "Hindi kumpleto ang weekly study group namin kung walang Tambay Tea session. Ito ang aming brain fuel!",
    author: '— Ang Engineering Barkada',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1679090867828-e34703088027?w=500&auto=format&fit=crop&q=60',
    hint: 'couple on a date',
    quote: "Dito kami nag-first date! Ngayon, ito na ang aming go-to spot for anniversaries. Ang daming happy memories!",
    author: '— Mark & Jess',
  },
  {
    image: 'https://picsum.photos/400/300?random=24',
    hint: 'freelancer working',
    quote: "Bilang freelancer, ito ang opisina ko. Sakto ang vibe para maging inspired at productive.",
    author: '— Alex, Graphic Designer',
  },
   {
    image: 'https://picsum.photos/400/300?random=25',
    hint: 'family laughing',
    quote: "Tradisyon namin tuwing Linggo. Paborito ng mga bata ang pearls, at kami naman, ang kape. Happy place ng pamilya namin.",
    author: '— The Santos Family',
  },
];

const CommunitySpotlight = () => {
  return (
    <section id="community-spotlight" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Mga Kwento Mula sa Tambayan
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
            Ang pinaka-espesyal na sangkap namin ay kayo. Ito ang ilan sa mga moments na ibinahagi ninyo.
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
