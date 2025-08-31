import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="A delicious cup of milk tea"
        fill
        className="object-cover object-center brightness-50"
        priority
        data-ai-hint="milk tea"
      />
      <div className="relative z-10 container px-4 md:px-6 text-white">
        <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline leading-tight">
            Tambay Tayo!
            <br />
            <span className="text-primary-foreground/80">Your Daily Dose of Happiness.</span>
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-primary-foreground/90">
            Freshly brewed, perfectly blended. Discover your new favorite milk tea
            and find your perfect spot to chill and relax.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              <Link href="#menu">Order Now</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="#locations">Find a Store</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
