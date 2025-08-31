'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const MadeForYou = () => {
  return (
    <section
      id="made-for-you"
      className="relative w-full py-20 md:py-32 lg:py-40 text-center text-white overflow-hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1529474944862-bf4949bd2f1a?h=480&w=1080&auto=format&fit=crop&q=60"
        alt="A variety of colorful milk tea drinks"
        fill
        className="object-cover"
        data-ai-hint="milk tea variety"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto flex flex-col items-center space-y-6"
        >
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl font-headline leading-tight text-white">
            An Expression of You
          </h2>
          <p className="max-w-xl text-lg md:text-xl text-background/90">
            Your drink is your statement. Sweet, bold, subtle, or surprising—what will you create today? Our menu is your canvas.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold animate-pulse">
            <Link href="#customizer">Make It Yours</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MadeForYou;
