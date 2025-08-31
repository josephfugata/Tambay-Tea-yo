'use client';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const behindTheCupItems = [
  {
    title: 'Meet Our Farmers',
    description: 'We partner with local farms that share our passion for quality and sustainability. Get to know the hands that grow our amazing ingredients.',
    image: 'https://picsum.photos/500/500?random=26',
    hint: 'farmer portrait',
  },
  {
    title: 'Our Passionate Baristas',
    description: "They're more than just staff; they're artists, creators, and the smiling faces that make your day better. They're the heart of Tambay Tea.",
    image: 'https://picsum.photos/500/500?random=27',
    hint: 'barista portrait',
  },
];

const BehindTheCup = () => {
  return (
    <section id="behind-the-cup" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="secondary">People & Passion</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline mt-2">
            Behind Every Cup
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
            It takes a village to create your perfect moment.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {behindTheCupItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid gap-6"
            >
              <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl mx-auto max-w-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  data-ai-hint={item.hint}
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold font-headline">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehindTheCup;
