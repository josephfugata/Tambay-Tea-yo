'use client';
import { Recycle, Leaf, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const pledges = [
  {
    icon: <Leaf className="w-10 h-10 text-primary" />,
    title: 'Ethical Sourcing',
    text: 'We build direct relationships with farmers to ensure fair practices and the highest quality ingredients.',
  },
  {
    icon: <Recycle className="w-10 h-10 text-primary" />,
    title: 'Reducing Our Footprint',
    text: 'From compostable straws to reusable cup programs, we are committed to protecting our beautiful planet.',
  },
  {
    icon: <Heart className="w-10 h-10 text-primary" />,
    title: 'Community Support',
    text: 'A portion of our proceeds goes back into local community projects and environmental initiatives.',
  },
];

const SustainabilityPledge = () => {
  return (
    <section id="sustainability" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Sipping with a Conscience
          </h2>
          <p className="max-w-3xl text-muted-foreground md:text-xl/relaxed">
            Because we believe that happiness shouldn’t cost the Earth. Our commitment to sustainability is in every cup we serve.
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
