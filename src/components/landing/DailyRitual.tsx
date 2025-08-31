'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Sun, Moon } from 'lucide-react';

const rituals = [
  {
    icon: <Sun className="w-8 h-8 text-primary" />,
    title: 'The Morning Boost',
    text: "Start your day with a burst of energy. A refreshing fruit tea to awaken your senses and set a positive tone.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'The Afternoon Pick-Me-Up',
    text: "Beat the midday slump. A classic milk tea with chewy pearls is the perfect treat to re-energize your focus.",
  },
  {
    icon: <Moon className="w-8 h-8 text-primary" />,
    title: 'The Evening Wind-Down',
    text: "Settle in for a cozy evening. A warm, creamy taro drink to help you relax and unwind after a long day.",
  },
];

const DailyRitual = () => {
  return (
    <section id="daily-ritual" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Your Daily Dose of Happiness
          </h2>
          <p className="max-w-2xl text-muted-foreground md:text-xl/relaxed">
            Whatever the moment, we have a drink to match. Make Tambay Tea your daily ritual.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {rituals.map((ritual, index) => (
            <Card key={index} className="text-center p-8 border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all duration-300">
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
