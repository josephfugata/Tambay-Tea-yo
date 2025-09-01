import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1572932759882-bb34c848d1b3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0"
        alt="Isang masarap na baso ng milk tea"
        fill
        className="object-cover object-center brightness-50"
        priority
        data-ai-hint="milk tea"
      />
      <div className="relative z-10 container px-4 md:px-6 text-white">
        <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline leading-tight">
            Tara, Tambay Tea-yo!
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-background/80">
            Bagong timpla, sakto sa panlasa. Hanapin ang bago mong paboritong milk tea
            at ang perfect spot para mag-chill at mag-relax.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              <Link href="#menu">Order na!</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="#locations">Hanapin ang Tambayan</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
