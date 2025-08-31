'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const OurStory = () => {
  return (
    <section id="our-story" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              From a Simple Dream
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Tambay Tea started not in a boardroom, but on a porch with friends. It was born from a shared love for laughter, stories, and the simple joy of a perfect cup of milk tea. We wanted to create a space that felt like home—a place to pause, connect, and just be.
            </p>
            <p className="text-muted-foreground md:text-lg/relaxed">
              Every corner of our shops, every drink on our menu, is infused with that original spirit of friendship and community. It's our story, and we invite you to be a part of it.
            </p>
            <Button variant="link" className="p-0 h-auto text-primary">
              Read Our Full Story
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full aspect-square relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1697206663454-6537a6bebd48?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Founders laughing"
              fill
              className="object-cover rounded-xl shadow-lg"
              data-ai-hint="friends laughing"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
