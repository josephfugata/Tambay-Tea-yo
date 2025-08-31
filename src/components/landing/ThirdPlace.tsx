'use client';
import Image from 'next/image';
import { Home, Briefcase, Coffee } from 'lucide-react';

const ThirdPlace = () => {
  return (
    <section id="third-place" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2 relative aspect-square md:aspect-auto md:h-80 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1661499102718-aebb4886a0bc?w=400&h=400&auto=format&fit=crop&q=60"
                  alt="Cozy cafe corner"
                  fill
                  className="rounded-xl object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
                  data-ai-hint="cafe interior"
                />
              </div>
              <div className="relative aspect-square w-full">
                <Image
                  src="https://images.unsplash.com/photo-1583124252668-93a11eb64a5f?w=400&auto=format&fit=crop&q=60"
                  alt="Friends chatting"
                  fill
                  className="rounded-xl object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
                   data-ai-hint="people talking"
                />
              </div>
               <div className="relative aspect-square w-full">
                <Image
                  src="https://images.unsplash.com/photo-1575737111036-fabeda85c6a4?w=400&auto=format&fit=crop&q=60"
                  alt="Person studying"
                  fill
                  className="rounded-xl object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
                   data-ai-hint="person studying"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Your Third Place
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              There’s home, there’s work, and then there’s your special place. Your haven. We’ve built Tambay Tea to be that for you.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">A Break from Home</h3>
                  <p className="text-sm text-muted-foreground">Escape the routine and find a new perspective.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="bg-primary/10 p-3 rounded-full">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">An Office Away From The Office</h3>
                  <p className="text-sm text-muted-foreground">Spark creativity with free Wi-Fi and the perfect ambiance.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="bg-primary/10 p-3 rounded-full">
                  <Coffee className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Your Community Hub</h3>
                  <p className="text-sm text-muted-foreground">Meet, greet, and connect with fellow tea lovers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdPlace;
