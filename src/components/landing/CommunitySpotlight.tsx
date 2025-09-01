'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/use-mobile';
import React from 'react';

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

const StoryCard = ({ story }: { story: (typeof stories)[0] }) => (
    <Card className="h-full flex flex-col shadow-lg w-full max-w-[380px] shrink-0">
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
);


const CommunitySpotlight = () => {
    const isMobile = useIsMobile();

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
        {isMobile ? (
          <div className="grid grid-cols-1 gap-6 place-items-center">
            {stories.map((story, index) => (
              <StoryCard key={index} story={story} />
            ))}
          </div>
        ) : (
           <div className="relative mt-12 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <div className="flex w-max items-stretch gap-6 [--gap:1.5rem] hover:[animation-play-state:paused] animate-marquee">
                {stories.map((story, index) => (
                    <StoryCard key={index} story={story} />
                ))}
                 {stories.map((story, index) => (
                    <StoryCard key={`duplicate-${index}`} story={story} />
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CommunitySpotlight;
