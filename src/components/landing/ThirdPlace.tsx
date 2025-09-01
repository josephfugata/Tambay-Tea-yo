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
              <div className="md:col-span-2 relative aspect-video md:aspect-auto md:h-80 w-full">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1738091397235-92e7381de07c?w=500&auto=format&fit=crop&q=60"
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
              Ang Iyong Third Place
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              May bahay, may trabaho, at mayroon kang espesyal na lugar. Ang iyong kanlungan. Binuo namin ang Tambay Tea para maging ganoon para sa iyo.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Pahinga Mula sa Bahay</h3>
                  <p className="text-sm text-muted-foreground">Takasan ang paulit-ulit na gawain at humanap ng bagong pananaw.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="bg-primary/10 p-3 rounded-full">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Opisina sa Labas ng Opisina</h3>
                  <p className="text-sm text-muted-foreground">Hanapin ang inspirasyon gamit ang libreng Wi-Fi at tamang ambiance.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="bg-primary/10 p-3 rounded-full">
                  <Coffee className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Sentro ng Iyong Komunidad</h3>
                  <p className="text-sm text-muted-foreground">Makipagkilala, bumati, at kumonekta sa mga kapwa mahilig sa tsaa.</p>
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
