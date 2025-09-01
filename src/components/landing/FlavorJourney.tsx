'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const flavors = [
  {
    name: 'Creamy & Comforting',
    description: 'Para kang niyayakap. Subukan ang aming classic at rich milk teas.',
    image: 'https://images.unsplash.com/photo-1623123093799-70a72826e167?w=500&auto=format&fit=crop&q=60',
    hint: 'milk tea',
  },
  {
    name: 'Fruity & Vibrant',
    description: 'Gisingin ang iyong diwa sa sarap at asim ng aming fruit teas.',
    image: 'https://images.unsplash.com/photo-1698413463602-525762445be6?w=500&auto=format&fit=crop&q=60',
    hint: 'fruit tea',
  },
  {
    name: 'Bold & Indulgent',
    description: 'I-treat ang sarili sa kakaibang sarap ng brown sugar at cheese foam.',
    image: 'https://images.unsplash.com/photo-1623123093799-70a72826e167?w=500&auto=format&fit=crop&q=60',
    hint: 'milk tea',
  },
];

const FlavorJourney = () => {
  return (
    <section id="flavor-journey" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline mb-4">
          Anong Mood Mo Ngayon?
        </h2>
        <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mb-12">
          Bawat lasa, may kwento. Hanapin ang babagay sa'yo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flavors.map((flavor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col items-center justify-center p-8 text-center rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6">
                  <Image src={flavor.image} alt={flavor.name} fill className="object-cover" data-ai-hint={flavor.hint} />
                </div>
                <h3 className="text-2xl font-bold font-headline mb-2">{flavor.name}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{flavor.description}</p>
                <Button asChild variant="outline">
                   <Link href="https://m.me/pinoyentrepreneur.me?ref=webdev_explore_flavors" target="_blank" rel="noopener noreferrer">Tingnan ang Flavors</Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorJourney;
