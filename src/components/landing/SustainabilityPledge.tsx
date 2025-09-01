'use client';
import { Recycle, Leaf, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const pledges = [
  {
    icon: <Leaf className="w-10 h-10 text-primary" />,
    title: 'Mula sa Maaasahang Pinagmulan',
    text: 'Direkta kaming nakikipag-ugnayan sa mga magsasaka para masigurong patas ang kalakalan at pinakamataas ang kalidad ng mga sangkap.',
  },
  {
    icon: <Recycle className="w-10 h-10 text-primary" />,
    title: 'Pagbabawas ng Basura',
    text: 'Mula sa mga compostable na straw hanggang sa reusable cup programs, nakatuon kami sa pangangalaga sa ating magandang planeta.',
  },
  {
    icon: <Heart className="w-10 h-10 text-primary" />,
    title: 'Suporta sa Komunidad',
    text: 'Ang isang bahagi ng aming kinikita ay napupunta sa mga lokal na proyekto ng komunidad at mga inisyatibong pangkalikasan.',
  },
];

const SustainabilityPledge = () => {
  return (
    <section id="sustainability" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Pagsipsip na may Konsensya
          </h2>
          <p className="max-w-3xl text-muted-foreground md:text-xl/relaxed">
            Dahil naniniwala kami na ang kaligayahan ay hindi dapat makasira sa kalikasan. Ang aming dedikasyon sa sustainability ay nasa bawat tasa na aming inihahain.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {pledges.map((pledge, index) => (
             <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full text-center border-0 bg-transparent shadow-none">
                <CardHeader className="items-center">
                  <div className="p-5 bg-background rounded-full">
                    {pledge.icon}
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <CardTitle className="text-xl font-bold">{pledge.title}</CardTitle>
                  <p className="text-muted-foreground">{pledge.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilityPledge;
