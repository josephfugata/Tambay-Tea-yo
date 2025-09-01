'use client';

import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';
import React from 'react';
import { cn } from '@/lib/utils';

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
    <Card className="h-full transform hover:scale-105 transition-transform duration-300 shadow-lg w-[350px] shrink-0">
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
          <div className="grid grid-cols-1 gap-6 mt-12 place-items-center">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        ) : (
          <div className="relative mt-12 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <div className="flex w-max items-stretch gap-6 [--gap:1.5rem] hover:[animation-play-state:paused] animate-marquee">
                {reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
                 {reviews.map((review, index) => (
                    <ReviewCard key={`duplicate-${index}`} review={review} />
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomerReviews;
