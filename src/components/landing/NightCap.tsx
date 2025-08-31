'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NightCap = () => {
  return (
    <section id="nightcap" className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-t from-secondary to-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline mb-4">
            Ready for Your Happy Moment?
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed mb-8">
            Your cup of happiness is waiting. Whether you want to grab and go or stay and chill, we're ready for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="#menu">Explore the Menu</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#locations">Find Your Tambayan</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NightCap;
