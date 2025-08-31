'use client';

import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const reviews = [
  {
    name: 'Angela P.',
    avatar: 'AP',
    avatarImage: 'https://picsum.photos/100/100?random=1',
    rating: 5,
    review:
      'The best classic milk tea in town! The pearls are always perfectly chewy. Perfect for a quick tambay with friends.',
  },
  {
    name: 'John D.',
    avatar: 'JD',
    avatarImage: 'https://picsum.photos/100/100?random=2',
    rating: 5,
    review:
      'I love their fruit teas! Super refreshing, especially on a hot day. The "Create Your Own" feature online is so fun!',
  },
  {
    name: 'Maria C.',
    avatar: 'MC',
    avatarImage: 'https://picsum.photos/100/100?random=3',
    rating: 4,
    review:
      'Cozy place and great drinks. The staff are super friendly. My go-to study spot. The Wi-Fi is reliable too!',
  },
  {
    name: 'Kevin S.',
    avatar: 'KS',
    avatarImage: 'https://picsum.photos/100/100?random=4',
    rating: 5,
    review:
      'That cheese foam is to die for! I get it on every drink. The online ordering is seamless and my order is always ready on time.',
  },
];

const CustomerReviews = () => {
  return (
    <section id="reviews" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Loved by Foodies
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don&apos;t just take our word for it. Here&apos;s what our amazing
              customers have to say about their Tambay Tea experience.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto mt-12"
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
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

export default CustomerReviews;
