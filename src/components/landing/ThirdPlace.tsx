'use client';
import Image from 'next/image';
import { Home, Briefcase, Coffee } from 'lucide-react';

const ThirdPlace = () => {
  return (
    <section id="third-place" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-w-1 aspect-h-1">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://picsum.photos/400/600?random=18"
                alt="Cozy cafe corner"
                width={400}
                height={600}
                className="rounded-xl object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
                data-ai-hint="cafe interior"
              />
              <div className="grid gap-4">
                <Image
                  src="https://picsum.photos/400/300?random=19"
                  alt="Friends chatting"
                  width={400}
                  height={300}
                  className="rounded-xl object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
                   data-ai-hint="people talking"
                />
                <Image
                  src="https://picsum.photos/400/300?random=20"
                  alt="Person studying"
                  width={400}
                  height={300}
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
