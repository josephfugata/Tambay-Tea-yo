'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Sun, Moon } from 'lucide-react';

const rituals = [
  {
    icon: <Sun className="w-8 h-8 text-primary" />,
    title: 'Pampasigla sa Umaga',
    text: "Simulan ang araw with a burst of energy. Isang refreshing fruit tea para magising ang iyong diwa at mag-set ng positive vibes.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Power-Up sa Hapon',
    text: "Labanan ang antok! Isang classic milk tea na may chewy pearls, ang perfect treat para bumalik ang focus mo.",
  },
  {
    icon: <Moon className="w-8 h-8 text-primary" />,
    title: 'Pampakalma sa Gabi',
    text: "Mag-relax para sa isang cozy na gabi. Isang mainit at creamy na taro drink para matulungan kang mag-unwind after a long day.",
  },
];

const DailyRitual = () => {
  return (
    <section id="daily-ritual" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Ang Daily Dose of Happiness Mo
          </h2>
          <p className="max-w-2xl text-muted-foreground md:text-xl/relaxed">
            Anuman ang moment, may inumin kami para sa'yo. Gawing daily ritual ang Tambay Tea.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {rituals.map((ritual, index) => (
            <Card key={index} className="text-center p-8 border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all duration-300 shadow-lg">
              <CardContent className="flex flex-col items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  {ritual.icon}
                </div>
                <h3 className="text-xl font-bold font-headline">{ritual.title}</h3>
                <p className="text-muted-foreground">{ritual.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyRitual;
