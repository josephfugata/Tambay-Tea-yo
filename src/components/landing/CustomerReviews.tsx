'use client';

import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Autoplay from 'embla-carousel-autoplay';
import { useIsMobile } from '@/hooks/use-mobile';
import React from 'react';

const reviews = [
  {
    name: 'Angela P.',
    avatar: 'AP',
    avatarImage: 'https://picsum.photos/100/100?random=1',
    rating: 5,
    review:
      'Pinakamasarap na classic milk tea sa bayan! Laging perfect ang pagkaluto ng pearls. Perfect for a quick tambay with friends.',
  },
  {
    name: 'John D.',
    avatar: 'JD',
    avatarImage: 'https://picsum.photos/100/100?random=2',
    rating: 5,
    review:
      'Love ko ang fruit teas nila! Super refreshing, lalo na sa mainit na araw. Ang saya gamitin nung "Create Your Own" feature online!',
  },
  {
    name: 'Maria C.',
    avatar: 'MC',
    avatarImage: 'https://picsum.photos/100/100?random=3',
    rating: 4,
    review:
      'Cozy place and great drinks. Sobrang friendly ng staff. Dito ako laging nag-aaral. Maaasahan din ang Wi-Fi!',
  },
  {
    name: 'Kevin S.',
    avatar: 'KS',
    avatarImage: 'https://picsum.photos/100/100?random=4',
    rating: 5,
    review:
      'Patay ako diyan sa cheese foam! Laging kong ino-order. Ang galing ng online ordering system, laging ready on time ang order ko.',
  },
];

const ReviewCard = ({ review }: { review: (typeof reviews)[0] }) => (
    <Card className="h-full transform hover:scale-105 transition-transform duration-300 shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage
              src={review.avatarImage}
              alt={review.name}
              data-ai-hint="profile picture"
            />
            <AvatarFallback>{review.avatar}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">{review.name}</CardTitle>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < review.rating
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          &quot;{review.review}&quot;
        </p>
      </CardContent>
    </Card>
);

const CustomerReviews = () => {
    const isMobile = useIsMobile();
    const autoplay = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }));

  return (
    <section id="reviews" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Bet na Bet ng mga Foodies!
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Huwag maniwala sa sabi-sabi, pakinggan ang sinasabi ng aming mga customers tungkol sa kanilang Tambay Tea experience.
            </p>
          </div>
        </div>
        {isMobile ? (
          <div className="grid grid-cols-1 gap-6 mt-12">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        ) : (
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
             plugins={[autoplay.current]}
            className="w-full max-w-5xl mx-auto mt-12"
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <ReviewCard review={review} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default CustomerReviews;
