import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const feedImages = [
  { src: 'https://picsum.photos/500/500?random=5', hint: 'people drinking milk-tea' },
  { src: 'https://picsum.photos/500/500?random=6', hint: 'milk-tea flatlay' },
  { src: 'https://picsum.photos/500/500?random=7', hint: 'cafe interior' },
  { src: 'https://picsum.photos/500/500?random=8', hint: 'close-up boba' },
  { src: 'https://picsum.photos/500/500?random=9', hint: 'friends laughing' },
  { src: 'https://picsum.photos/500/500?random=10', hint: 'aesthetic drink' },
];

const SocialFeed = () => {
  return (
    <section id="social" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Join the #TambayTea Fam
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Follow our adventures on Instagram and share your own moments with us.
              We love seeing your smiling faces!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
          {feedImages.map((image, index) => (
            <Link key={index} href="#" className="block group overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={`Instagram feed image ${index + 1}`}
                width={500}
                height={500}
                className="object-cover w-full h-full aspect-square group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={image.hint}
              />
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="#">Follow @TambayTea on Instagram</Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
